const { LdpService, DocumentTaggerMixin } = require('@semapps/ldp');
const urlJoin = require('url-join');
const { defaultOntologies } = require('@semapps/core');
const CONFIG = require('../config/config');
const containers = require('../config/containers');

module.exports = {
  mixins: [LdpService, DocumentTaggerMixin],
  settings: {
    baseUrl: CONFIG.HOME_URL,
    ontologies: defaultOntologies,
    containers,
    preferredViewForResource: async (resourceUri, containerPreferredView) => {
      if (!containerPreferredView) return resourceUri;
      return urlJoin(CONFIG.FRONT_URL, containerPreferredView, encodeURIComponent(resourceUri), 'show')
    },
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

        return res;
      }
    }
  }
};
