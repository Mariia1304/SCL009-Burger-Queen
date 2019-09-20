import React, { Component } from 'react';
import './TemplateOption.css';
import Waiter from '../../img/iconomesero.png';
import Chef from '../../img/iconococinero.png';
import { Link } from 'react-router-dom';
class TemplateOption extends Component {
    render(){
        return( 
            <section id="main">
            
                <div className="container TemplateOption"  id="TemplateOption">
                    <div className="row">
                        <div className="col-md-6 col-6 mesero">
                            <Link to="/waiter"><button type="button" className="btn btn-mesero"><img className="img-fluid img-mesero" src={Waiter} alt="Waiter"/></button></Link>
                        </div>
                        <div className="col-md-6 col-6  cocinero">
                           <Link to="/chef"> <button type="button" className="btn btn-cocinero"><img className="img-fluid img-cocinero" src={Chef} alt=""/></button></Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default TemplateOption;