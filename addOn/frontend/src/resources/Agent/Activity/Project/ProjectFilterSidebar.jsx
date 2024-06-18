import React from 'react';
import { CardContent } from '@mui/material';
import { FilterLiveSearch } from 'react-admin';
import { ReferenceFilter } from '@semapps/list-components';
import AsideCard from '../../../../layout/list/AsideCard';

const ProjectFilterSidebar = () => {
  return (
    <AsideCard>
      <CardContent>
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
      </CardContent>
    </AsideCard>
  );
};

export default ProjectFilterSidebar;
