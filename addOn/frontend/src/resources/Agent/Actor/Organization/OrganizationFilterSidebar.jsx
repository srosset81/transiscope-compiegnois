import React from 'react';
import { CardContent } from '@mui/material';
import { FilterLiveSearch } from 'react-admin';
import { ReferenceFilter } from '@semapps/list-components';
import ReferenceFilterTree from '../../../../common/ReferenceFilterTree';
import AsideCard from '../../../../layout/list/AsideCard';

const ProjectFilterSidebar = () => {
  return (
    <AsideCard>
      <CardContent>
        <FilterLiveSearch fullWidth source="q" hiddenLabel label="Rechercher une organisation" />
        <ReferenceFilter
          reference="Type"
          source="pair:hasType"
          inverseSource="pair:typeOf"
          limit={100}
          filter={{ a: 'pair:OrganizationType' }}
          sort={{ field: 'pair:label', order: 'DESC' }}
        />
        <ReferenceFilterTree
          reference="Theme"
          title="Thèmes"
          broader="pair:broader"
          source="pair:hasTopic"
          label="pair:label"
          predicate="http://virtual-assembly.org/ontologies/pair#hasTopic"
          limit={100}
          sort={{ field: 'pair:label', order: 'DESC' }}
        />
      </CardContent>
    </AsideCard>
  );
};

export default ProjectFilterSidebar;
