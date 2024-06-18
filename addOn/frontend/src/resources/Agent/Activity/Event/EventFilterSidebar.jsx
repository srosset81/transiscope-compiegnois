import React from 'react';
import { CardContent } from '@mui/material';
import { FilterLiveSearch } from 'react-admin';
import { ReferenceFilter } from '@semapps/list-components';
import AsideCard from '../../../../layout/list/AsideCard';

const EventFilterSidebar = () => {
  return (
    <AsideCard>
      <CardContent>
        <FilterLiveSearch fullWidth source="q" hiddenLabel label="Rechercher un évènement" />
        <ReferenceFilter
          reference="Theme"
          source="pair:hasTopic"
          inverseSource="pair:topicOf"
          limit={100}
          sort={{ field: 'pair:label', order: 'DESC' }}
        />
      </CardContent>
    </AsideCard>
  );
};

export default EventFilterSidebar;
