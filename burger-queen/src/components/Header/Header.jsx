import React, { Component } from 'react';
import './Header.css';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
class Header extends Component {
    render(){
        return(
            <div className="Header container">
                <div className="row">
                       <Link to='/'><img className="img-fluid" src={logo} 
                     alt="logo"/></Link>  
                </div>  
            </div>
          
        )
    }
}
export default Header;