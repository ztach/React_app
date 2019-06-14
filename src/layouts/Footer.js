//imr
import React from 'react'; 
import { Route } from 'react-router-dom';
//ssf

//sfc
const Footer = () => {
    return ( 
        <div>
        <h3>Footer</h3>
        
        <Route path="/:page/:id" exact  render={(props) => {
            return (
             <> 
             <p>jesteś na page: <span>{props.match.params.page}</span></p>
             <p>jesteś na id: <span>{props.match.params.page.id}</span></p>
             <p>jesteś na url: <span>{props.match.url}</span></p>
             </>
             )
        }
        }
         />
        </div>
     );
}
 
export default Footer;