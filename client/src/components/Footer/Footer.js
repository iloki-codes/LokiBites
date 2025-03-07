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
        
        <Link to="/" className={classes.bite}>QuickBite</Link>
        
        <span className={classes.eighteen}>One Place for all your cravings, and<br/>Order right now !</span>
        
        <ul className={classes.smedia}>
            
            <a href=""><img src={instaLogo} alt="insta" /></a>
            
            <a href=""><img src={fbLogo} alt="fb" /></a>
            
            <a href=""><img src={twitterLogo} alt="tweet" /></a>
        
        </ul>
    
    </div>

  <div className={classes.flexlast}>
    
    <ul className={classes.articles}>
        
        <li><a className={classes.art} href="">Articles</a></li>
        <br/>
        <li><a href="">Crowdfunding</a></li>
        <li><a href="">Website Donations</a></li>
        <li><a href="">Careers</a></li>
        <li><a href="">Event Registrations</a></li>
        <li><a href="">Social Events</a></li>
    
    </ul>
        
    <ul className={classes.leagues}>
            
        <li><a className={classes.lea} href="">Leagues</a></li>
        <br/>
        <li><a href="">Our Story</a></li>
        <li><a href="">Community Stories</a></li>
        <li><a href="">Customer Stories</a></li>
        <li><a href="">Expert Opinions</a></li>
        </ul>
        
        <ul className={classes.team}>
            
            <li><a className={classes.tea} href="">Team</a></li>
            <br/>
            <li><a href="">About Us</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Privacy & Policy</a></li>
            <li><a href="">Help</a></li>
        
        </ul>
        
        <ul className={classes.touch}>
            
            <li><a className={classes.get} href="">Get in touch</a></li>
            <br/>
            <li><a className={classes.a} href="">Contact: Mayank <br />7044-555-127</a></li>
        
        </ul>

      </div>

   </div>
  )
};

export default Footer;