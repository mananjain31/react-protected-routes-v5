import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import ProtectedComponent from './ProtectedComponent';
import PublicComponent from './PublicCompoennt';
import useAuth from './useAuth';

const App = (props) => {

  const {auth, login, logout, ProtectedRoute} = useAuth();
  const history = useHistory();

  return <div className="app">
    <h1>React Protected Routes</h1>
    <hr width={'90%'}></hr>
    <div className='buttons'>
      <button
        onClick={()=>login(
          ()=>history.push('/protected')
        )}
      >Login</button>
      <button
        onClick={()=>logout(
          ()=>history.push('/')
        )}
      >Logout</button>
    </div>
    <h2>Login State : {auth ? "logged In" : 'not logged In'}</h2>

    <Switch>
      {/* public Route */}
      <Route exact path='/' component={PublicComponent}/> 

      {/* protected Route */}
      <ProtectedRoute exact path="/protected" component={ProtectedComponent} redirectTo={'/'}/>
    </Switch>

  </div>;
}

export default App;