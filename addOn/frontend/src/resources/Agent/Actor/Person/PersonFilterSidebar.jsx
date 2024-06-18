import React from 'react';
import { CardContent } from '@mui/material';
import { FilterLiveSearch } from 'react-admin';
import { ReferenceFilter } from '@semapps/list-components';
import AsideCard from '../../../../layout/list/AsideCard';

const ProjectFilterSidebar = () => {
  return (
    <AsideCard>
      <CardContent>
        <FilterLiveSearch fullWidth source="q" hiddenLabel label="Rechercher une personne" />
        <ReferenceFilter
          label="Intérêts"
          reference="Theme"
          source="pair:hasTopic"
          inverseSource="pair:topicOf"
          sort={{ field: 'pair:label', order: 'DESC' }}
          limit={100}
        />
      </CardContent>
    </AsideCard>
  );
};

export default ProjectFilterSidebar;
