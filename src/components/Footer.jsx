import React from 'react'
import Logo from '../img/bloglogo.jpg'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="blog-logo" />
      <span>
        Made by Hüseyin Canbay with <b>React.js</b> ❄️
      </span>
    </footer>
  );
};

export default Footer