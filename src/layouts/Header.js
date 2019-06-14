import React from 'react';
import {Route,Switch}  from 'react-router-dom';
import '../styles/header.css';

import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import img4 from '../images/header4.jpg';
import img5 from '../images/header5.jpg';

//const headerImage = () => <img src={header2} alt="header1"/>

const Header = () => {
    const imageList = [img2,img3,img4,img5];
    const index = Math.floor( Math.random() *4 );
    console.log(index)
    const img = imageList[index];
    return ( 
        <Switch>
        <Route path="/" exact render={() => (<img src={img2} alt="img2"/>)}/>
        <Route path="/products" render={() => (<img src={img3} alt="img3"/>)}/>
        <Route path="/contact" render={() => (<img src={img4} alt="img4"/>)}/>
        <Route path="/admin" render={() => (<img src={img5} alt="img5"/>)}/>
        <Route render={() => (<img src={img1} alt="img1"/>)}/>
        </Switch>
     );
}
 
export default Header;


/* 
<img src={img} alt="img"/>
        */