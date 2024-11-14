import rawResources from './resources';

const customizedResources = { ...rawResources };

// Remove unwanted resources
delete customizedResources['Group'];
delete customizedResources['Task'];
delete customizedResources['Idea'];

// Change list fetching method to container
Object.keys(customizedResources).forEach((key) => {
  if (customizedResources[key].dataModel?.list) {
    customizedResources[key].dataModel.list.fetchContainer = true;
  }
});

// Change "Organisation" to "Alternative" wording
customizedResources['Organization'].translations.fr.name = 'Alternative |||| Alternatives';
customizedResources['Organization'].translations.fr.searchLabel = 'Rechercher une alternative';

export default customizedResources;
