import React, { useState } from 'react';
import Form from '../Form/Form';
import List from '../List/List';
import {nanoid} from 'nanoid';
import './Watches.css'

function Watches() {
  const [clocks, setClocks] = useState([]);

  function onDelete(id) {
    const copy = clocks.filter((e) => e.id !== id);
    setClocks(copy);
  }

  function submitForm(form) {
    if (form.name === '' || form.timeZone === '') return;
    const copy = [...clocks, {id: nanoid(), name: form.name, timeZone: form.timeZone}];
    setClocks(copy);
  } 

  return (
    <>
      <Form submitForm={submitForm}/>
      <List clocks={clocks} onDelete={onDelete}/>
    </>
  )
}

export default Watches
