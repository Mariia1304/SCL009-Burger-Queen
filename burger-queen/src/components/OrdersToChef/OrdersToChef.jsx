import React, { Component } from 'react';
import './OrdersToChef.css';

class OrderToChef extends Component{
    render(){
        return(
        <React.Fragment>
            <div className="order-chef-items">
                <div className="row">
                    <div className="col-6">
                        <h6>Nombre de cliente:</h6>
                    </div>
                    <div className="col-6">
                        <h6>Fecha:</h6>
                    </div>
                </div>
                <table className="col-4">
                    <tbody>
                        <tr>
                            <td>Hamburguesa con res</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
                <div className="row">
                    <div className="col-2 offset-10">
                        <button className="btn btn-listo">
                            Listo!
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
}
export default OrderToChef;