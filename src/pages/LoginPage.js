import React from 'react';
import '../styles/loginpage.css'

const LoginPage = () => {
    return ( 
        <div className="loginpage">
        <label >Podaj login: <input type="text"/></label>
        <br/>
        <label >Podaj hasło: <input type="text"/></label>
        <br/>
        <button>Zaloguj</button>
        </div>
     );
}
 
export default LoginPage;