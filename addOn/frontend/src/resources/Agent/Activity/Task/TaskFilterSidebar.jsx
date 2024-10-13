import React from 'react';
import { FilterLiveSearch } from 'react-admin';
import { ReferenceFilter } from '@semapps/list-components';
import { Aside } from '../../../../layout';

const TaskFilterSidebar = () => {
  return (
    <Aside>
      <FilterLiveSearch fullWidth source="q" hiddenLabel label="Rechercher une tâche" />
      <ReferenceFilter
        reference="Status"
        source="pair:hasStatus"
        limit={100}
        filter={{ a: 'pair:TaskStatus' }}
        sort={{ field: 'pair:label', order: 'DESC' }}
      />
      <ReferenceFilter
        reference="Type"
        source="pair:hasType"
        limit={100}
        filter={{ a: 'pair:TaskType' }}
        sort={{ field: 'pair:label', order: 'DESC' }}
      />
    </Aside>
  );
};

export default TaskFilterSidebar;
