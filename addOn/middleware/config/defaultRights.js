const config = require('./config');

const getDefaultRights = creatorUri => {
  return {
    anon : {
      read: true
    },
    anyUser: {
      read: true,
      write: true,
    },
    user: {
      uri: creatorUri,
      read: true,
      write: true,
      control : true
    },
    group: {
      uri : config.HOME_URL + '_groups/superadmins',
      read: true,
      write: true,
      control : true
    }
  }
};

module.exports = {
  getDefaultRights,
};
