import React, { Component } from 'react';
import { db } from '../../config/firebase';
import './TemplateChef.css';
import OrderToChef from '../OrdersToChef/OrdersToChef';
class TemplateChef extends Component{
    constructor(props){
        super(props);
        this.state={
            showOrderToChef:false
        }
    }
    showOrders(){
        this.setState({
            showOrderToChef:true
        })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 btn-chef">
                        <button className="btn btn-pedidosChef" onClick={()=>this.showOrders()}>Pedidos a preparar</button>
                    </div>
                </div>
                
                    <div className="row">
                        <div className="col-12">
                        {
                            this.state.showOrderToChef?
                            <OrderToChef/>
                            :
                            null
                        }   
                        </div>
                    </div>
                    
                
                
            </div>
        )
    }
}
export default TemplateChef