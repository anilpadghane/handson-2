
import React, { useState } from "react";
import './myapp.css'

function App() {
    const [inputOne, setinput1]=useState();
    const [inputTwo, setinput2]=useState();
    const [inputThree, setinput3]=useState();
    const [item1,setitem]=useState([]);

    const getInputOne=(e)=>{
        setinput1(e.target.value);


    }
    const getInputTwo=(e)=>{
        setinput2(e.target.value);


    }
    const getInputThree=(e)=>{
        setinput3(e.target.value);


    }
    const onsubmits=(e)=>{
        e.preventDefault();
        setitem((olditems)=>{
            return [...olditems,["Name : ",inputOne, " | " , "Department : " ,inputTwo, " | ","Rating : ",inputThree]]

        })
        setinput1("");
        setinput2("");
        setinput3("");

    }

  return (
    <>
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <div className="card-1">
        <form onSubmit={onsubmits}>
          <div className="text">Name:
            <input type="text" className="input" onChange={getInputOne} value={inputOne} required/><br/><br/>
          </div>
          <div className="text">Department :
            <input type="text" className="input" onChange={getInputTwo} value={inputTwo} required/><br/><br/>
          </div>
          <div className="text">Rating :
            <input type="number" className="input" onChange={getInputThree} value={inputThree} required/><br/><br/>
          </div>
          <button type="submit"  className="submit" >Submit</button>
        </form>
      </div>

      <div className="box-2">
            {

            item1.map((itemval)=>{
                return <div className="inbox">{itemval}</div>
            })
            }
      </div>
    </>
  );
}
export default App;



