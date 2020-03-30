import React from 'react';

import { FaFacebookSquare, FaWordpressSimple, FaGooglePlay, FaPhone } from "react-icons/fa";
import './styles.scss';

const Header = () => <section>
  <nav className="header" >
    <div className="title">
      Rádio Moriá FM - 99,7
    </div>
    <div className="actions">
      <a href="https://www.facebook.com/RadioMoria99.7/" target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare size={32} color={'#ffffff'} />
      </a>
      <a href="http://www.portalmoria.com/" target="_blank" rel="noopener noreferrer">
        <FaWordpressSimple size={32} color={'#ffffff'} />
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.enokdigital.radiomoria/" target="_blank" rel="noopener noreferrer">
        <FaGooglePlay size={30} color={'#ffffff'} />
      </a>
      <a href="tel:+558834211989">
        <FaPhone size={30} color={'#ffffff'} />
      </a>
    </div>
  </nav>
</section>;

export default Header;
