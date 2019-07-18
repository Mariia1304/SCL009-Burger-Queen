import React, { Component} from 'react';
import './Order.css';
import images from '../../importImages';
class Order extends Component{
    render(){
        return(
            <div className="col-12 pedido container-fluid">   
            <input className="pedido__input" type="text" placeholder="Ingresa Nombre de Cliente"/>
            <table className="tableOrder">
                <tr>
                    <td className="nameItem">Cafe americano</td>
                    <td className="quantityItem"> 2</td>
                    <td className="priceTotalItem">1000</td>
                    <td className="deleteItem"><img className="img-fluid delete" src={images['delete5.png']} alt="delete"/></td>
                </tr>
                <tr>
                    <td className="nameItem">Jugo natural</td>
                    <td className="quantityItem"> 2</td>
                    <td className="priceTotalItem"> 1400</td>
                    <td className="deleteItem"><img className="img-fluid delete" src={images['delete5.png']} alt="delete"/></td>
                </tr>
                <tr>
                    <td className="nameItem">Sandwich de jamon con queso</td>
                    <td className="quantityItem"> 2</td>
                    <td className="priceTotalItem">2000</td>
                    <td className="deleteItem"><img className="img-fluid delete" src={images['delete5.png']} alt="delete"/></td>
                </tr>
            </table>
            <table className="tableTotal">
                <tr>
                    <td className="total">Total:</td>
                    <td className="totalPriceOrder">4400</td>
                </tr>
            </table>
        </div>
        )
    }
}
export default Order;