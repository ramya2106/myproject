import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Rvowels = () => {
    const[input,setInput] = useState()
    const[value,setValue] = useState()
    const handleSubmit = (event) => {
        setInput(event.target.value)
        const str = input
        const numberOfDigits = str.length;
        let sum = 0;

        for (let i = 0; i < numberOfDigits; i++) {
        sum += Math.pow(str.charAt(i), numberOfDigits);
        }

        if (sum == str) {
            setValue("The entered number is an Armstrong number.");
            
          } else {
            setValue("The entered number is not an Armstrong number.");
          }
        
        //setValue(newStr)
    }
    function handlechange(event){
        setInput(event.target.value)
    }
  return (
    <div className='wrapper'>
      <h3>Amstrong or not</h3>
        <label>Enter the three digit number:</label>
        <input type= "text" id ="string" value={input} onChange={handlechange}/>
        
        <button type = "submit" onClick={handleSubmit}>Submit</button>
        <Output data = {value}/>
    </div>
  )
}

export default Rvowels