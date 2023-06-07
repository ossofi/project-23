import React from 'react'
import {useState} from 'react'
import Done from './Done'
import Continue from './Continue'

export default function Data () {
  const [values, setValues] = useState({
    address: "",
    number: "",
  });
    const handleChange = (name: any, value: any) => {
      setValues((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };
  return (
    <div>
        <Continue onChange={handleChange} />
        <Done value={{address:values.address, number:values.number, handleChange}}/>
    </div>
  )
};
