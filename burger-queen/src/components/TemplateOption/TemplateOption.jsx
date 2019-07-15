import React, { Component } from 'react';
import './TemplateOption.css';
import Waiter from '../../img/iconomesero.png';
import Chef from '../../img/iconococinero.png'
class TemplateOption extends Component {
    render(){
        return(
            <div className="container TemplateOption"  id="TemplateOption">
                <div className="row">
                    <div className="col-6 mesero">
                        <button type="button" className="btn btn-mesero"><img className="img-fluid img-mesero" src={Waiter} alt="Waiter"/></button>
                    </div>
                    <div className="col-6 cocinero">
                        <button type="button" className="btn btn-cocinero"><img className="img-fluid img-cocinero" src={Chef} alt=""/></button>
                    </div>
                </div>
            </div>
        )
    }
}
export default TemplateOption;