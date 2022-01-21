import {useState} from "react";

function useAuth()
{
    const [auth, setAuth] = useState(false);

    const authLogin = callback => {
        setAuth(true);
        callback();
    }

    const authLogout = callback => {
        setAuth(false);
        callback();
    }

    return {auth, authLogin, authLogout};
}


export default useAuth;