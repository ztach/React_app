import React from 'react';
import {Route,Redirect} from 'react-router-dom';


const permission = false;

const AdminPage = () => {
    return ( 
        <Route render={()=>(
            permission ? (<h1> cześć admin</h1>):(
                <Redirect to="/login" />
            )
        )} />
     )
}
 
export default AdminPage;