import React,{ useState } from "react";
import { Route, Redirect } from "react-router-dom";
function useAuth(){

    const [auth, setAuth] = useState(false);

    const login = ( callback ) => {
        setAuth(true);
        if(callback)callback();
    }

    const logout = ( callback ) => {
        setAuth(false);
        if(callback)callback();
    }

    const ProtectedRoute = ({component : Component , redirectTo ,...rest }) => {
        return <Route 
            {...rest}
            render={props=>{
                if(auth) {
                    return <Component {...props}/>
                } else {
                    return <Redirect to={redirectTo ? redirectTo : '/'} />
                }
            }}
        />
    }

    return {auth, login, logout, ProtectedRoute};
}

export default useAuth;