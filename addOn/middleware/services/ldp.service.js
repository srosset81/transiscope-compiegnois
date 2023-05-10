const { LdpService, DocumentTaggerMixin } = require('@semapps/ldp');
const urlJoin = require('url-join');
const { defaultOntologies } = require('@semapps/core');
const CONFIG = require('../config/config');
const containers = require('../config/containers');
const {LDPNavigator,FetchAdapter} = require('fix-esm').require('ldp-navigator');
const { defaultContext } = require('@semapps/core');

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
            "get":async (ctx, res)=>{
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
                  // console.log("res",res);
                  // if (res['pair:organizationOfMembership']){
                      res= await ldpNavigator.dereference(res,container.ldpDereferencePlan);
                  // }
                  res['@context']=oldContext;
                }
              }
              return res;
            }

        }
      }
};
