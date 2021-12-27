import React from 'react';
import Rating from './rating';
import {FormControl, InputGroup} from 'react-bootstrap'; 
import './filter.css'

function Filter() {
    return (
        <div className='filter'>
         <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"> <i class="fas fa-search"></i> </InputGroup.Text>
    <FormControl
      placeholder="search movie by name/rating"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
      <Rating/>
        </div>
    )
}

export default Filter
