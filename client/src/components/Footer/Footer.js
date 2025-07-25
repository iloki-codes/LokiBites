import React from 'react';
import classes from "./footer.module.css";
import instaLogo from "../../assets/icons8-insta.svg";
import fbLogo from "../../assets/icons8-fb.svg";
import twitterLogo from "../../assets/icons8-twitter.svg";
import { Link } from 'react-router-dom';

const Footer = () => {

  return (

    <div className={classes.footer}>

    <div className={classes.social}>

        <Link to="/" className={classes.bite}>LokiBites</Link>

        <span className={classes.eighteen}>One Place for all your cravings, and<br/>Order right now !</span>

        <ul className={classes.smedia}>

            <a href=""><img src={instaLogo} alt="insta" /></a>

            <a href=""><img src={fbLogo} alt="fb" /></a>

            <a href=""><img src={twitterLogo} alt="tweet" /></a>

        </ul>

    </div>

  <div className={classes.flexlast}>

    <ul className={classes.articles}>

        <li>Articles</li>
        <br/>
        <li><a href="">Our Story</a></li>
        <li><a href="">Website Donations</a></li>
        <li><a href="">Customer Stories</a></li>
        <li><a href="">Event Registrations</a></li>
        <li><a href="">Social Events</a></li>

    </ul>

    <ul className={classes.leagues}>

        <li>Get in touch</li>
        <br/>
        <li><a href="http://www.linkedin.com/in/lokeshlokicodes">LinkedIn</a></li>
        <li><a href="https://github.com/iloki-codes">Github</a></li>
        <li><a href="https://medium.com/@loki_codes">Medium</a></li>
        <li><a href="">Portfolio</a></li>
        </ul>

        <ul className={classes.team}>

            <li>Team</li>
            <br/>
            <li><a href="">About Us</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Privacy & Policy</a></li>
            <li><a href="">Help</a></li>

        </ul>

        <ul className={classes.touch}>

            <li>Subscribe to get <br />latest offers</li>
            <br/>
            <li><a className={classes.a} href=""></a>
                <input type='email' name='email' placeholder='Enter your email' required className={classes.email} /><br />
                <button type='submit'>Connect with us</button>
            </li>

        </ul>

      </div>

   </div>
  )
};

export default Footer;