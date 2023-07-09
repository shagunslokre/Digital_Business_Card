import React from "react";

import Github from '../assets/github-icon.png'
import Twitter from '../assets/twitter-icon.png'

const Footer = () => {
    return(
        <div className="card__footer">
            < a href="https://github.com/shagunslokre">
                <img src={Github} alt="github" />
            </a>

            < a href="https://twitter.com/ShagunLokre22">
                <img src={Twitter} alt="twitter" />
            </a>
        </div>
    )
}

export default Footer;

