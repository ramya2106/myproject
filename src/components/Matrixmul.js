import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Matrixmul = () => {
    const [someState, setSomeState] = useState({
        firstvalue: "",
        secondvalue: "",
        thirdvalue: "",
        fourthvalue: ""
    });
    function handlechange(event) {
        console.log(event.target.value);
        setSomeState({
            ...someState,
            [event.target.name]:event.target.value
        });
      }
    const[value,setValue] = useState()
    const handleSubmit = (event) => {
        let r = someState.firstvalue;
        let c = someState.secondvalue;
        let mat1 = someState.thirdvalue;
        let mat2 = someState.fourthvalue;
        let res;
        
        for(let i=0; i<r; i++){
          for(let j=0; j<c; j++){
            res[i][j] = 0;
            for(let k=0; k<c; k++){
              res[i][j] += mat1[i][k] * mat2[k][j];
            }
          }
        }
       for(let i=0; i<r; i++){
         for(let j=0; j<c; j++){
           alert(res[i][j]);
         }
       }
    }
  return (
    <div className='wrapper'>
        <label>Enter the number of rows:</label>
        <input type= "text" id ="string1" name = "firstvalue" value={someState.firstvalue} onChange={handlechange}/>
        <br/>
        <label>Enter the number of columns:</label>
        <input type= "text" id ="string2" name = "secondvalue" value={someState.secondvalue} onChange={handlechange}/>
        <br/>
        <label>Enter the first matrix element:</label>
        <input type= "text" id ="string3" name = "thirdvalue" value={someState.thirdvalue} onChange={handlechange}/>
        <br/>
        <label>Enter the second matrix element:</label>
        <input type= "text" id ="string4" name = "fourthvalue" value={someState.fourthvalue} onChange={handlechange}/>
        <br/>
        <button type = "submit" onClick={handleSubmit}>Submit</button>
        {/* <Output data={value}/> */}
    </div>
    
  )
}

export default Matrixmul