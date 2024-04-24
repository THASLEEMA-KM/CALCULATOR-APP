// import { useState } from 'react'
import './App.css'
import Display from './Components/Display'

function App() {
// const [result,setResult] = useState(0)


  return (
    <div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center'>
      <div style={{height:'450px'}} className='border rounded bg-secondary p-4'>
        <h1 className="text-center text-primary">CALCULATOR</h1>
          <Display/>
      </div>
    </div>
  )
}

export default App
