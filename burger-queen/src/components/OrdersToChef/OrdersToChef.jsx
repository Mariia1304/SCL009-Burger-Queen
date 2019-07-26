import React, { Component } from 'react';
import './OrdersToChef.css';
import { db } from '../../config/firebase';

class OrderToChef extends Component{
    state={
        orders:[]
    }
    componentDidMount(){
        db.collection('orders').where('stateOrder','==', false).orderBy("date","asc").limit(10)
            .get().then((snapShots)=>{
            this.setState({
                    orders: snapShots.docs.map(doc=>{
                    return{id:doc.id,data:doc.data()}
                })
            })
        })
    }
    render(){
        const { orders } = this.state;
        return(
       
             orders && orders !== undefined?orders.map((order)=>(
                <div key={order.id} className="order-chef-items">
                <div className="row">
                    <div className="col-6">
                        <h6>Nombre de cliente: {order.data.name}</h6>
                    </div>
                    <div className="col-6">
                        <h6>{new Date(order.data.date).toLocaleString()}</h6>
                    </div>
                </div>
                <table className="col-4">
                    <tbody>
                    {
                        order.data.orderList.map(el=>
                        <tr>
                            <td>{el.item}</td>
                            <td>{el.quantity}</td>
                        </tr>
                        ) 
                    }
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
            )):<div></div>
            
       
        )
    }
}
export default OrderToChef;