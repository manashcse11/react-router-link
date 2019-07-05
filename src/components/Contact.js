import React from 'react';
import {Route, Link} from 'react-router-dom';
import Local from './Local';
import International from './International';

const Contact = () => {
    return(
        <div>
            <h1>Contact Page</h1>
            <ul>
                <li>
                    <Link to="/contact/local">Local</Link>
                </li>
                <li>
                    <Link to="/contact/international">International</Link>
                </li>
            </ul>
            <Route path="/contact/local" component={Local} />
            <Route path="/contact/international" component={International} />
        </div>
    );
}

export default Contact;