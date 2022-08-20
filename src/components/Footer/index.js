import React from 'react';
import { FaFacebook, FaInstagramSquare, FaEnvelopeSquare } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";


function Footer() {
  return (
    <div className="footer">
      <footer>
        <ul>
          <a href="https://www.facebook.com/AaliyahsPhotographs" target="blank">
            <li>
              <FaFacebook style={{color: 'rgba(47, 75, 70, 0.37)', fontSize: '50px'}} />
            </li>
          </a>
      
         
          
          <a href="https://www.instagram.com/aaliyahsphotographsllc/" target="blank">
            <li>
              <FaInstagramSquare style={{color: 'rgba(47, 75, 70, 0.37)', fontSize: '50px'}} />
            </li>
          </a>

          <a href="mailto:aaliyahsphotographs@gmail.com <aaliyahsphotographs@gmail.com>;?body=My custom mail body">
            <li>
              <FaEnvelopeSquare style={{color: 'rgba(47, 75, 70, 0.37)', fontSize: '50px'}} />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;