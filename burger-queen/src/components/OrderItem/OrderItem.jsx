import React, { Component} from 'react';
import './OrderItem.css';
import images from '../../importImages';

class OrderItem extends Component{
    render(){
        return(
            <tr>
                <td className="nameItem">{this.props.item}</td>
                <td className="quantityItem">{this.props.quantity}</td>
                <td className="priceTotalItem">{this.props.price}</td>
                <td className="deleteItem"><img className="img-fluid delete" src={images['delete5.png']} alt="delete"/></td>
            </tr>
        )
    }
}
export default OrderItem;