import React, { Component} from 'react';
import './Order.css';
import images from '../../importImages';
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
                <tr>

                    <td className="nameItem">Cafe americano</td>
                    <td className="quantityItem"> 2</td>
                    <td className="priceTotalItem">1000</td>
                    <td className="deleteItem"><img className="img-fluid delete" src={images['delete5.png']} alt="delete"/></td>
                </tr>
             
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