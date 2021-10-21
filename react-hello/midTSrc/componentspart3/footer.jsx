import React, { Component } from 'react';

const Footer = (props) => {

    return ( 
        <footer>
            <p>Copyright &copy;{props.year}</p>
        </footer>
  );
}
 
export default Footer;
