import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Dropdown = () => {
  const [filter, setFilter] = useState('');

  const handleChangeFilter = event => {
    setFilter(event.target.value);
  }

  return (
    <div>
      <label htmlFor="filter">Filter: </label>
      <select
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      >
        <option value="">All</option>
        <option value="top"><FontAwesomeIcon icon={faStar}/></option>
        <option value="mid">Date</option>
        <option value="low">Category</option>
      </select>
    </div>
  )
};

export default Dropdown;