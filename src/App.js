 import './App.css';
 import { useState } from 'react';
 
function App() {
  
  const [name, setName] = useState();

    const changeHandle=(event)=>{
     setName(event.target.value)
    }
 const submit=()=>{
  if(name == "" || name == null){
    document.getElementById("Show").innerHTML =  "Please Enter Your Name";

  }else{
    document.getElementById("Show").innerHTML =  name;

  }
  }
   
  return (
     <div className='Container'>
      <div id='Show'></div>
      <div id='nameContainer'> 
      <h4>Enter Your Name : </h4>
      <input type="text"  id='name'  name='name' onChange={changeHandle}/>
      <br></br>
      <button onClick={submit} >Submit</button>
      </div>
     </div>
  );
}

export default App;
