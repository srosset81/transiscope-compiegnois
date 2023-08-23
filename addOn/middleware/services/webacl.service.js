const { WebAclService } = require('@semapps/webacl');

console.log('____________________________________baseUrl',process.env.SEMAPPS_HOME_URL)

module.exports = {
  mixins: [WebAclService],
  settings: {
    baseUrl: process.env.SEMAPPS_HOME_URL,
    superAdmins: [
      'http://localhost:3000/users/simon.louvet.zen',
      'https://data.nantes.transiscope.org/users/simon.louvet.zen',
    ]
  }
};
