import React from 'react';
import { ReactDOM } from 'react-dom';
import { BrowserRouter,Routes ,Route,Switch } from 'react-router-dom';
import Header from '../Header'
import Landing from '../Landing'
import Footer from '../Footer'
import Welcom from '../Welcom';
import Singup from '../Signup';
import ErrorPage from '../ErrorPage';
import Login from '../Login';
import SharedLayout from '../SharedLayout'
import '../../App.css';



function App() {
  return (
     <div>
<BrowserRouter>
      <Routes>

       
     

      <Route path='/' element ={ <SharedLayout />} >

          <Route index element = {< Landing />} />
          <Route path='/login' element ={ <Login />} />
          <Route path='/welcom' element = { < Welcom />}  />
          <Route path='/signup' element = {<Singup />}  />
          <Route path='*' element = {<ErrorPage/> }  />
                    
      </Route >

      
     
      

      </Routes>   

  </BrowserRouter>   
     </div>
  );
}

export default App;
