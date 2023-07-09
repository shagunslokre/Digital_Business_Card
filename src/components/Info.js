import React from "react";
import profile from '../assets/myPic.jpg';
import Mail from '../assets/mail.png'
import LinkedIn from '../assets/linkedin.png'



const Info = () => {
    return (
        <div className="card__info">
            <img className="card__img" src= {profile} alt="profile" />
            <h2>Shagun S Lokre</h2>
            <h5>FrontEnd Web Developer</h5>
            <h6>JavaScript || React.js</h6>
            <div className="info__buttons">
                <a href="mailto: shagunslokre22@gmail.com" className="button">
                    <img src={Mail} alt="email" />
                    <p>Email</p>
                </a>

                <a href="https://www.linkedin.com/in/shagunslokre/" className="button">
                    <img src={LinkedIn} alt="social" />
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    )
}

export default Info;