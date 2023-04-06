export function customizeResources(rawResources) {
  const customizedResources = {...rawResources};

  // Remove parent link to simplify TreeMenu
  const noParentResources = ['Event', 'Project', 'Task', 'Group', 'Organization', 'Person', 'Skill'];
  Object.keys(rawResources).forEach(key => {
    if (noParentResources.includes(key)) {
      customizedResources[key].config.options.parent = undefined;
    }
  });

  return customizedResources;
}
