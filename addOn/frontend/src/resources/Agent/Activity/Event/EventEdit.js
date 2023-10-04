import React from 'react';
import Edit from "../../../../layout/edit/Edit";
import Title from "../../../../layout/Title";
import EventForm from './EventForm';

const EventEdit = props => (
  <Edit title={<Title />} redirect="show" {...props}>
    <EventForm />
  </Edit>
);

export default EventEdit;
