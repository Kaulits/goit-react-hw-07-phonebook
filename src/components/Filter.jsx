
import React from 'react';

export const Filter = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder="Search contacts"
  />
);

 
