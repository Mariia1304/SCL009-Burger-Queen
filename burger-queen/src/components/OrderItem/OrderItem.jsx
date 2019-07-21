import React, { Component} from 'react';
import './OrderItem.css';
import images from '../../importImages';
import Order from '../Order/Order';
class OrderItem extends Component{
    render(){
        return(
            <tr>
                <td className="nameItem">Cafe americano</td>
                <td className="quantityItem"> 2</td>
                <td className="priceTotalItem">1000</td>
                <td className="deleteItem"><img className="img-fluid delete" src={images['delete5.png']} alt="delete"/></td>
            </tr>
        )
    }
}
export default OrderItem;