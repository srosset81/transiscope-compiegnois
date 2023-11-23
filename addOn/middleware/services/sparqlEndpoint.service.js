const { SparqlEndpointService } = require('@semapps/sparql-endpoint');

module.exports = {
  name: 'sparqlEndpoint',
  mixins: [SparqlEndpointService],
  hooks: {
    after: {
      'query': (ctx, res) => {
        // This customization filters personal data from Person resources to not expose them
        // Issue related #76
        if (Array.isArray(res['@graph'])) {
          res['@graph'].forEach((singleRes, index) => {
            if (Array.isArray(singleRes['@type']) && singleRes['@type'].includes('http://virtual-assembly.org/ontologies/pair#Person')) {
              delete res['@graph'][index]['e-mail'];
              delete res['@graph'][index]['email'];
              delete res['@graph'][index]['familyName'];
              delete res['@graph'][index]['nick'];
            }
          });
        }

        return res;
      }
    }
  },
};
