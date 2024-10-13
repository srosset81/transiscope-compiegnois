import React from 'react';
import { FilterLiveSearch } from 'react-admin';
import { ReferenceFilter } from '@semapps/list-components';
import { Aside } from '../../../../layout';

const ProjectFilterSidebar = () => {
  return (
    <Aside>
      <FilterLiveSearch fullWidth source="q" hiddenLabel label="Rechercher une personne" />
      <ReferenceFilter
        label="Intérêts"
        reference="Theme"
        source="pair:hasTopic"
        inverseSource="pair:topicOf"
        sort={{ field: 'pair:label', order: 'DESC' }}
        limit={100}
      />
    </Aside>
  );
};

export default ProjectFilterSidebar;
