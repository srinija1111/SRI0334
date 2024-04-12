import React, { useState } from 'react';

const Checklist = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else { 
      setSelectedOptions([...selectedOptions, option]);
    }
  };

 return(
  <div>
    <h2>check list</h2>
    <form>
      <label>
        <input
        type="checkbox"
        value="Option 1"
        checked={selectedOptions.includes("OPtion 1")}
        onChange={()=> handleCheckboxChange("Option 1")}
        />
        OPtion 1
      </label>
      <br/>
      <label>
        <input
        type="checkbox"
        value="Option 2"
        checked={selectedOptions.includes("OPtion 2")}
        onChange={()=> handleCheckboxChange("Option 2")}
        />
        OPtion 2
      </label>
      <br/>
      <label>
        <input
        type="checkbox"
        value="Option 3"
        checked={selectedOptions.includes("OPtion 3")}
        onChange={()=> handleCheckboxChange("Option 3")}
        />
        OPtion 3
      </label>
      <br/>
      <label>
        <input
        type="checkbox"
        value="Option 4"
        checked={selectedOptions.includes("OPtion 4")}
        onChange={()=> handleCheckboxChange("Option 4")}
        />
        OPtion 4
      </label>
      <br/>
    </form>
    <div>
      <h3>selected options</h3>
      {selectedOptions.map((option,index)=>(
       <li key={index}>{option}</li> 
      ))}
    </div>
  </div>
 );
      }
      export default Checklist;