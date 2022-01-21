import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import LoginLogoutComponent from './components/LoginLogoutComponent';
import useAuth from './useAuth';

const App = () => {

  const {auth, authLogin, authLogout} = useAuth();

  return <div className="app">
      <h1>React Protected Routes</h1>
      <hr width="90%"/>
      <div className='home'>
        <h2>
          Login Status : {auth ? 'Logged In' : 'Not Logged in'}
        </h2>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/loginlogoutcomponent' element={<LoginLogoutComponent/>} />
      </Routes>
  </div>;
}

export default App;