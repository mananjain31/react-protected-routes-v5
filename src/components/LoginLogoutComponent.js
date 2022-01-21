import React from 'react';
import { Link } from 'react-router-dom';

const LoginLogoutComponent = () => {
  return <div className='login-logout-component'>
    <div className='buttons'>
      <button

      >Login</button>
      <button

      >Logout</button>
    </div>
    <br/>
    <Link to='/'>Home</Link>
  </div>;
};

export default LoginLogoutComponent;