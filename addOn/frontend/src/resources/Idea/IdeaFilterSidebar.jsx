import React from 'react';
import { CardContent } from '@mui/material';
import { FilterLiveSearch } from 'react-admin';
import { ReferenceFilter } from '@semapps/list-components';
import AsideCard from '../../layout/list/AsideCard';

const IdeaFilterSidebar = () => {
  return (
    <AsideCard>
      <CardContent>
        <FilterLiveSearch fullWidth source="q" hiddenLabel label="Rechercher une idée" />
        <ReferenceFilter
          reference="Status"
          source="pair:hasStatus"
          limit={100}
          filter={{ a: 'pair:IdeaStatus' }}
          sort={{ field: 'pair:label', order: 'DESC' }}
        />
        <ReferenceFilter
          reference="Type"
          source="pair:hasType"
          limit={100}
          filter={{ a: 'pair:IdeaType' }}
          sort={{ field: 'pair:label', order: 'DESC' }}
        />
      </CardContent>
    </AsideCard>
  );
};

export default IdeaFilterSidebar;
