import React from 'react';
import {Route,NavLink,Switch} from 'react-router-dom';
import '../styles/navigation.css'

const menuList = [
    {name:'start',path:'/',style:'home_selected',exact:true},
    {name:'producty',path:'/products',style:'products_selected'},
    {name:'contact',path:'/contact',style:'contact_selected'},
    {name:'panel admina',path:'/admin',style:'admin_selected'}
]

const Navigation = () => {
    const menu = menuList.map(item => (
        <li className="navli" key={item.name}>
            <NavLink activeClassName={item.style} to={item.path}
            exact={item.exact? item.exact : false }
            > 
                {item.name} 
            </NavLink>
        </li>
        ) 
    )   

    return ( 
        <nav  className="navigation" >
            <ul className="navul">
                {menu}
            </ul>
        </nav>

     );
}
 
export default Navigation;

