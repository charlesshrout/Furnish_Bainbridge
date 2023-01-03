import React from "react";
import {Link} from "react-router-dom";


function Contact() {
    return ( 
     <div>
        <h1>Contact Information</h1>
        <Link className="link" style={{ flex: 1 }} to="/login">Staff Login</Link>
    </div>);
}

export default Contact;