const CONFIG = require('./config');
const { ACTOR_TYPES } = require("@semapps/activitypub");

const writePermissionsToCreator = creatorUri => {
  console.log('---------------------------- writePermissionsToCreator',CONFIG.HOME_URL+'_groups/superadmins');
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
      uri : CONFIG.HOME_URL+'_groups/superadmins',
      read: true,
      write: true,
      control : true
    }
  }
};


module.exports = [
  {
    path: '/'
  },
  {
    path: '/membership-associations',
    acceptedTypes: ['pair:MembershipAssociation'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/groups',
    preferredView: '/Group',
    acceptedTypes: ['pair:Group', 'og:Circle'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/projects',
    preferredView: '/Project',
    acceptedTypes: ['pair:Project', 'og:Circle'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/events',
    preferredView: '/Event',
    acceptedTypes: ['pair:Event'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/tasks',
    preferredView: '/Task',
    acceptedTypes: ['pair:Task'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/bots',
    acceptedTypes: [ACTOR_TYPES.APPLICATION],
    excludeFromMirror: true,
  },
  {
    path: '/ideas',
    preferredView: '/Idea',
    acceptedTypes: ['pair:Idea'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/themes',
    preferredView: '/Theme',
    acceptedTypes: ['pair:Theme'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/skills',
    preferredView: '/Skill',
    acceptedTypes: ['pair:Skill'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/membership-roles',
    preferredView: '/MembershipRole',
    acceptedTypes: ['pair:MembershipRole'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/documents',
    preferredView: '/Document',
    acceptedTypes: ['pair:Document'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/status',
    preferredView: '/Status',
    acceptedTypes: [
      'pair:Status',
      'pair:ActivityStatus',
      'pair:AgentStatus',
      'pair:DocumentStatus',
      'pair:EventStatus',
      'pair:IdeaStatus',
      'pair:ProjectStatus',
      'pair:TaskStatus'
    ],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/types',
    preferredView: '/Type',
    acceptedTypes: [
      'pair:Type',
      'pair:ActivityType',
      'pair:AgentType',
      'pair:ConceptType',
      'pair:DocumentType',
      'pair:EventType',
      'pair:FolderType',
      'pair:GroupType',
      'pair:IdeaType',
      'pair:ObjectType',
      'pair:OrganizationType',
      'pair:PlaceType',
      'pair:ProjectType',
      'pair:ResourceType',
      'pair:SubjectType',
      'pair:TaskType'
    ],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/pages',
    preferredView: '/Page',
    acceptedTypes: ['semapps:Page'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/files',
    newResourcesPermissions: writePermissionsToCreator
  }
];
