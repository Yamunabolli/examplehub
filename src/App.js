import Email from './Email';
import './App.css';
import Nvabr from './Nvabr'
import Adduser from './Adduser';
import Emplist from './Emplist'
import Login from './Login';
import Ex from './Ex';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Forms from './Forms';
import Signup from './Signup';
import ResetPassword from './Resetpassword';
import Phone from './Phone';
import Dics from './Dics';

function App() {
  return (
    <div className="App">
<Routes>   
              
              <Route path='/' element={<Login/>}></Route>
              <Route path='/Signup' element={<Signup/>}></Route>
              <Route path='/Phone' element={<Phone/>}></Route>

              <Route path='/Resetpassword' element={<ResetPassword/>} />  

           <Route path='/Nvabr' element={<Nvabr/>} >  

           <Route path='/Nvabr/Adduser' element={<Adduser/>} /> 
           <Route path='/Nvabr/Emplist' element={<Emplist/>} /> 
           <Route path='/Nvabr/Forms' element={<Forms/>} /> 

           </Route>
         
              </Routes> 
          {/* <Dics/>     */}
    </div>
  );
}

export default App;
