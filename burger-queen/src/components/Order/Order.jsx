import React, { Component} from 'react';
import './Order.css';

import OrderItem from '../OrderItem/OrderItem'
class Order extends Component{
    // constructor(props){
    //     super(props);

    // }
    render(){
        return(
            <div className="col-12 pedido container-fluid">   
            <input className="pedido__input" type="text" placeholder="Ingresa Nombre de Cliente"/>
            <table className="tableOrder">
                <tbody>
                   {this.props.order.map(el=> <OrderItem item={el.item} price={el.price}  />)}
              
             
                </tbody>
            </table>
            <table className="tableTotal">
                <tr>
                    <td className="total">Total:</td>
                    <td className="totalPriceOrder">4400</td>
                </tr>
            </table>
            <button className="btn btn-order">Enviar pedido</button>
        </div>
        )
    }
}
export default Order;