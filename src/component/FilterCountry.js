import { useState } from "react";
import * as React from 'react';

const FilterCountry = ({ onSearch, countries }) => {
  const [show, setShow] = useState("");
  const handleListSearch = ({ target: { value } }) => {
    const upperValue = value.toUpperCase();
    onSearch(upperValue);
    setShow(value);
  };

  return (
    <div>
      <div>
        <input  value={show} onChange={handleListSearch} placeholder="Type Country Name ⌕" 
        style={{borderRadius: 10, width: 300, height: 50, textAlign: "center", boxSizing: "border-box", outline:"none", fontSize: 20
}}/> 

      </div>
    </div>
    
  );
};



export default FilterCountry;
