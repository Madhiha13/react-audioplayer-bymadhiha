import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" >
 

      <div className="app__footer-links_logo">
        <h1 className="headtext__cormorant">MUSIC</h1>
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the Music.&quot;</p>
        
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>


    <div className="footer__copyright">
      <p className="p__opensans">2024  All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
