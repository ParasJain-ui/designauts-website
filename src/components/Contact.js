import React from 'react'
import './Contact.css'
import logo from '../assets/logo.png'
import logo2 from '../assets/discord-512.png'
import logo3 from '../assets/thumb.jpg'
import logo4 from '../assets/logo4.jpeg'
import { Link } from "react-router-dom";

function Contact() {
    const newLocal = <div className="row">
    </div>
    return (
        <div className="Contact">
            <div className="col-6 .col-sm-12 .col-md-8" id="col1" >
                <img src={logo4} className="card1"></img>
                <img src={logo4} className="card2"></img>
            </div>
            <div className="col-6 .col-sm-12 .col-md-8" id="col2">
                <img src={logo3} className="card__img"></img>
                email:abc@gmail.com
            </div>
            <div className="row">
                <a href="https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react">
                    <img src={logo2} className="card3"/>
                </a>
            </div>
        </div>

    )
}
export default Contact;
