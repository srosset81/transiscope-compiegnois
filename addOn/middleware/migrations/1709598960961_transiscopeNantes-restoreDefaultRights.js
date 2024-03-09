const config = require('../config/config');

module.exports = {
  up: async ({ update }) => {

    // Restore default write ACL to authenticated users and super-admins
    await update({
      query: `
        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
        PREFIX endpoint: <${config.HOME_URL}>

        INSERT {
          GRAPH <http://semapps.org/webacl> {
            ?acl <http://www.w3.org/ns/auth/acl#agentClass> <http://www.w3.org/ns/auth/acl#AuthenticatedAgent> .
            ?acl <http://www.w3.org/ns/auth/acl#agentGroup> endpoint:_groups\\/superadmins .
          }
        }
        WHERE {
          {
            endpoint:organizations ?predicate ?org .
            ?org <http://purl.org/dc/terms/created> ?createdDate .
          }
          {
            GRAPH <http://semapps.org/webacl> {
              ?acl ?predicateAcl ?org .
              ?acl <http://www.w3.org/ns/auth/acl#mode> <http://www.w3.org/ns/auth/acl#Write> .
            }
          }
          FILTER(xsd:dateTime(?createdDate) > "2023-11-20T00:00:00Z"^^xsd:dateTime)
          FILTER(xsd:dateTime(?createdDate) < "2024-03-31T00:00:00Z"^^xsd:dateTime)
        }
      `,
      webId: 'system'
    });

    // Restore default control ACL to super-admins
    await update({
      query: `
        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
        PREFIX endpoint: <${config.HOME_URL}>

        INSERT {
          GRAPH <http://semapps.org/webacl> {
            ?acl <http://www.w3.org/ns/auth/acl#agentGroup> endpoint:_groups\\/superadmins .
          }
        }
        WHERE {
          {
            endpoint:organizations ?predicate ?org .
            ?org <http://purl.org/dc/terms/created>	?createdDate .
          }
          {
            GRAPH <http://semapps.org/webacl> {
              ?acl ?predicateAcl ?org .
              ?acl <http://www.w3.org/ns/auth/acl#mode> <http://www.w3.org/ns/auth/acl#Control> .
            }
          }
          FILTER(xsd:dateTime(?createdDate) > "2023-11-20T00:00:00Z"^^xsd:dateTime)
          FILTER(xsd:dateTime(?createdDate) < "2024-03-31T00:00:00Z"^^xsd:dateTime)
        }
      `,
      webId: 'system'
    });
  },
  down: async () => {
    /*
     * Down not needed for this migration
     */
  },
};
