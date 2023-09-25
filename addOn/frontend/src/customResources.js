export function customizeResources(rawResources) {
  const customizedResources = {...rawResources};

  // Remove Task and Idea resources
  delete customizedResources['Group'];
  delete customizedResources['Task'];
  delete customizedResources['Idea'];

  // Remove parent link to simplify TreeMenu
  const noParentResources = ['Event', 'Project', 'Organization', 'Person', 'Skill'];
  Object.keys(rawResources).forEach(key => {
    if (noParentResources.includes(key)) {
      customizedResources[key].config.options.parent = undefined;
    }
  });

  return customizedResources;
}
