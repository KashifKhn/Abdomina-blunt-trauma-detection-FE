import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import {Upload} from './components/pages/Upload'
import {Result} from './components/pages/Result'
import {Record} from './components/pages/Record'
import {Home} from './components/pages/Home'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
 
  return (
  <div className='App'>
    <Navbar />
    <Routes>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/result' element={<Result/>}/>
      <Route path='/record' element={<Record/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>

  </div>
  )
}

export default App
