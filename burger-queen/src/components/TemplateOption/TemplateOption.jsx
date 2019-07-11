import React, { Component } from 'react';
import './TemplateOption.css';

class TemplateOption extends Component {
    render(){
        return(
            <div className="container TemplateOption"  id="TemplateOption">
                <div className="row">
                    <div className="col-6 mesero">
                        <button type="button" className="btn btn-mesero">Meser@</button>
                    </div>
                    <div className="col-6 cocinero">
                        <button type="button" className="btn btn-cocinero">Cociner@</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default TemplateOption;