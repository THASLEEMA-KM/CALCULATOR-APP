import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { FloatingLabel, Form } from 'react-bootstrap'
Button
function Buttons() {
   const [display,setDispaly] = useState("")
   const handleClick = (val)=>
   {
     setDispaly(display + val)
   }
   const calculateResult = () =>
   {
      try{
            const result = eval(display)
            setDispaly(result);
      }catch(error){
         setDispaly("         -----ERROR-----")
      }
   }
   const clearAll = ()=>
   {
      setDispaly("")
   }
   const removeLast = ()=>
   {
      setDispaly(display.toString().slice(0,-1))
   }
  return (
<div>
<div style={{width:'300px',height:'80px'}} className="bg-dark p-2 border rounded">
      <FloatingLabel
        controlId="floatingInput"
        label=""
        
        className="mb-3"
      >
        <Form.Control type="text" value={display} placeholder="0" />
      </FloatingLabel>
      {/* <div  style={{width:'100%',height:'60px'}} className="bg-light border rounded-3 p-3"></div> */}
      </div>
       <div style={{width:'300px',height:'250px'}} className="bg-dark p-3 border  shadow rounded ">
           <div className='w-100 d-flex justify-content-center align-items-center'>
              <Button variant="warning" onClick={clearAll} style={{width:'60px'}}>AC</Button>
              <Button variant="danger" onClick={removeLast} style={{width:'60px'}}>DEL</Button>
              <Button variant="success" onClick={calculateResult} style={{width:'80px'}}><i class="fa-solid fa-equals"></i></Button>
           </div>
   
           <div className='w-100 d-flex justify-content-center align-items-center'>
              <Button variant="light" onClick={()=>handleClick('7')} style={{width:'50px'}}>7</Button>
              <Button variant="light" onClick={()=>handleClick('8')} style={{width:'50px'}}>8</Button>
              <Button variant="light" onClick={()=>handleClick('9')} style={{width:'50px'}}>9</Button>
              <Button variant="info" onClick={()=>handleClick('/')} style={{width:'50px'}}><i class="fa-solid fa-divide"></i></Button>
           </div>
           <div className='w-100 d-flex justify-content-center align-items-center'>
              <Button variant="light" onClick={()=>handleClick('4')} style={{width:'50px'}}>4</Button>
              <Button variant="light" onClick={()=>handleClick('5')} style={{width:'50px'}}>5</Button>
              <Button variant="light" onClick={()=>handleClick('6')} style={{width:'50px'}}>6</Button>
              <Button variant="info" onClick={()=>handleClick('*')} style={{width:'50px'}}><i className="fa-solid fa-xmark"></i></Button>
           </div>
           <div className='w-100 d-flex justify-content-center align-items-center'>
              <Button variant="light" onClick={()=>handleClick('1')} style={{width:'50px'}}>1</Button>
              <Button variant="light" onClick={()=>handleClick('2')} style={{width:'50px'}}>2</Button>
              <Button variant="light" onClick={()=>handleClick('3')} style={{width:'50px'}}>3</Button>
              <Button variant="info" onClick={()=>handleClick('+')} style={{width:'50px'}}><i className="fa-solid fa-plus"></i></Button>
           </div>
           <div className='w-100 d-flex justify-content-center align-items-center'>
              <Button variant="light" onClick={()=>handleClick('.')} style={{width:'50px'}}>.</Button>
              <Button variant="light" onClick={()=>handleClick('0')} style={{width:'50px'}}>0</Button>
              <Button variant="info" onClick={()=>handleClick('**')} style={{width:'50px'}}>^</Button>
              <Button variant="info" onClick={()=>handleClick('-')} style={{width:'50px'}}><i class="fa-solid fa-minus"></i></Button>
           </div>
       </div>
</div>
  )
}

export default Buttons
