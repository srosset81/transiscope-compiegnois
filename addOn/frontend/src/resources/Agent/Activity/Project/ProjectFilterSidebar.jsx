import React from 'react';
import { FilterLiveSearch } from 'react-admin';
import { ReferenceFilter } from '@semapps/list-components';
import { Aside } from '../../../../layout';

const ProjectFilterSidebar = () => {
  return (
    <Aside>
      <FilterLiveSearch fullWidth source="q" hiddenLabel label="Rechercher un projet" />
      <ReferenceFilter
        reference="Status"
        source="pair:hasStatus"
        limit={100}
        filter={{ a: 'pair:ProjectStatus' }}
        sort={{ field: 'pair:label', order: 'DESC' }}
      />
      <ReferenceFilter
        reference="Theme"
        source="pair:hasTopic"
        inverseSource="pair:topicOf"
        limit={100}
        sort={{ field: 'pair:label', order: 'DESC' }}
      />
      <ReferenceFilter
        reference="Type"
        source="pair:hasType"
        limit={100}
        filter={{ a: 'pair:ProjectType' }}
        sort={{ field: 'pair:label', order: 'DESC' }}
      />
    </Aside>
  );
};

export default ProjectFilterSidebar;
