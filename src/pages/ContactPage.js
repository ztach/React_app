import React, {Component}  from 'react';
import {Prompt} from 'react-router-dom';

import '../styles/contactpage.css';

class ContactPage extends Component {
    state = { 
        value:''
     }

     handleChange = e => (
        this.setState({
            value:e.target.value
        })
     )
     
     handleClick = (e) => {
        e.preventDefault();
        this.setState({
            value:""
        })
     }

    render() { 
        return (
            <div className="contact">
                <form >
                    <h1>Napisz do nas</h1>
                    <textarea onChange={this.handleChange} 
                        name="napisz" 
                        value={this.state.value} 
                        id="napisz" 
                        cols="60" rows="10"
                        placeholder="Wpisz wiadomość ..."
                        >
                        </textarea>
                    <button onClick={this.handleClick}>Wyślij</button>
                </form>
                <Prompt
                    when={this.state.value}
                    message="masz niewypełniony formularz"
                />
            </div>
          );
    }
}
 
export default ContactPage;