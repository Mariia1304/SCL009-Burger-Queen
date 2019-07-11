import React, { Component } from 'react';
import './Header.css';
import logo from '../../logo.png';
class Header extends Component {
    render(){
        return(
                <nav>
                    <div className="row">
                        <a className="navbar-brand" href="#">
                            <img src={logo} width="90" height="60" alt="logo"/>  
                        </a>
                        <h1>Burger Queen</h1>
                    </div>  
                </nav>
          
            )
    }
}
export default Header;