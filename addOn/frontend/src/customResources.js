import rawResources from './resources';

const customizedResources = {...rawResources};

// Remove unwanted resources
delete customizedResources['Group'];
delete customizedResources['Task'];
delete customizedResources['Idea'];

// Remove parent link to simplify TreeMenu
const noParentResources = ['Event', 'Project', 'Organization', 'Person', 'Skill'];
Object.keys(customizedResources).forEach(key => {
  if (noParentResources.includes(key)) {
    customizedResources[key].config.options.parent = undefined;
  }
});

// Change list fetching method to container
Object.keys(customizedResources).forEach(key => {
  customizedResources[key].dataModel.list.fetchContainer = true;
});

export default customizedResources;
