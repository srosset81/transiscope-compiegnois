const { WebAclService } = require('@semapps/webacl');

module.exports = {
  mixins: [WebAclService],
  settings: {
    baseUrl: process.env.SEMAPPS_HOME_URL,
    superAdmins: process.env.SUPER_ADMINS ? process.env.SUPER_ADMINS.split(',') : [],
  }
};
