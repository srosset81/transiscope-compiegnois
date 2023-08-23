const { LdpService, DocumentTaggerMixin } = require('@semapps/ldp');
const urlJoin = require('url-join');
const { defaultOntologies } = require('@semapps/core');
const CONFIG = require('../config/config');
const containers = require('../config/containers');
const {LDPNavigator,FetchAdapter} = require('fix-esm').require('ldp-navigator');
const { defaultContext } = require('@semapps/core');
const jsonld = require('jsonld');

module.exports = {
  mixins: [LdpService, DocumentTaggerMixin],
  settings: {
    baseUrl: CONFIG.HOME_URL,
    ontologies : defaultOntologies,
    containers,
    preferredViewForResource: async (resourceUri, containerPreferredView) => {
      if (!containerPreferredView) return resourceUri;
      return urlJoin(CONFIG.FRONT_URL, containerPreferredView, encodeURIComponent(resourceUri), 'show')
    },
    defaultContainerOptions: {
      jsonContext: urlJoin(CONFIG.HOME_URL, 'context.json')
    }
  },
  hooksResource: {
        after: {
            "get": async (ctx, res) => {
              // This customization filters personal data from Person resources to not expose them
              // Issue related #76
              // foaf:name is not filtered because it is used to display logged user name in the app bar
              if (Array.isArray(res.type) && res.type.includes('Person')) {
                delete res['pair:e-mail'];
                delete res['foaf:email'];
                delete res['foaf:familyName'];
                delete res['foaf:nick'];
              }

              for ( let container of containers){
                if (ctx.params.resourceUri.includes(container.path) && container.ldpDereferencePlan){
                  let ldpNavigator=new LDPNavigator();
                  let headers = {
                    'accept': 'application/ld+json',
                  }
                  if (ctx.meta.headers && ctx.meta.headers.authorization){
                    headers.authorization = ctx.meta.headers.authorization
                  }
                  ldpNavigator.setAdapters([
                    new FetchAdapter({
                      headers : headers
                    })
                  ])
                  const oldContext= JSON.parse(JSON.stringify(res['@context']));
                  //context have to be replce because jsonld librairy don't support url with localhost
                  res['@context']=defaultContext['@context'];
                  await ldpNavigator.init(res);
                  res= await ldpNavigator.dereference(res,container.ldpDereferencePlan);
                  //frame have to be because ldp-navigator return '@id' instead 'id' in dereferenced data
                  res = await jsonld.frame(res,{'@context':res['@context'],'id':ctx.params.resourceUri});
                  res['@context']=oldContext;
                }
              }
              return res;
            }

        }
      }
};
