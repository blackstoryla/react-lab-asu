import './App.css'
import {Routes, Route} from 'react-router-dom'
import { LabItem } from './pages/LabItems.jsx';
import { Layout } from './wigets/Layout.jsx';
import {Auth} from './pages/Auth.jsx'
import { LabInfo } from './wigets/Labinfo.jsx';
import { LabInfoDefault } from './wigets/LabInfoDefault.jsx';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<Layout />}>
          <Route path='' element = {<LabItem />}>
            <Route index element = {<LabInfoDefault/>} />
            <Route path=':id' element = {<LabInfo/>} />
          </Route>  
          <Route path='authorization' element = {<Auth/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App
