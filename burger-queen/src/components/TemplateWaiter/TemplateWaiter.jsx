import React, { Component } from 'react';
import './TemplateWaiter.css';
import Order from '../Order/Order';
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';
import { db } from '../../config/firebase';
import swal from '@sweetalert/with-react'

 class TemplateWaiter extends Component {
    constructor(props){
        super(props);
        this.state={
            showBreakfast: true,
            order:[],
            total: 0,
            name: ""
        };
        this.itemAndPriceToOrder = this.itemAndPriceToOrder.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.submitToFirestore=this.submitToFirestore.bind(this);
        this.clearOrder=this.clearOrder.bind(this)
        
    }
    hideLunch(){
        this.setState({
            showBreakfast:true
        })
    }  
    hideBreakfast(){
        this.setState({
            showBreakfast:false
        })
    }
    addToOrder(order, itemToOrder, priceToOrder) {
        const { length } = order;
        const id = length + 1;
        const found = order.some(el => el.item === itemToOrder);
        if (found) order.some(el=>{
            if(el.item === itemToOrder){
            el.price = el.price+priceToOrder;
            el.quantity++;}
        })
        if (!found) order.push({id: id, item: itemToOrder, price: priceToOrder, quantity: 1})
        return order;
    }
    total(total, priceToOrder){
            total = total + priceToOrder;
       return total
    }
    itemAndPriceToOrder(itemToOrder,priceToOrder){
        let addToOrder = this.addToOrder(this.state.order, itemToOrder, priceToOrder);
        let totalToOrder = this.total(this.state.total, priceToOrder);
        this.setState({total:totalToOrder});
        this.setState({order: addToOrder});
    }
    deleteItem(itemId){
        let total = this.state.total;
       let newOrder = [...this.state.order];
        for( let i = 0; i<newOrder.length; i++){
            if ( newOrder[i].id === itemId){
                if(newOrder[i].quantity===1){
                total = total - newOrder[i].price;
                newOrder.splice(i, 1);
                }else{
                    newOrder[i].price = newOrder[i].price-(newOrder[i].price/newOrder[i].quantity);
                    newOrder[i].quantity--;
                    total = total - (newOrder[i].price/newOrder[i].quantity);
                    
                }
            }
        }
        this.setState({order:newOrder});
        this.setState({total:total})
    }
    handleChange (e) {
       
        const value = e.target.value;
       
        this.setState({
          name: value
        })
    };
    submitToFirestore(){
        if(this.state.name===""||this.state.total===0){
            swal("Pedido no fue enviado", "Revisa si está el nombre de cliente y pedido no está vacío", "error")
        }else{
        let idOrder = "id"+Date.now();
        let data = {
           id: idOrder,
           name: this.state.name,
           orderList: this.state.order,
           total: this.state.total,
           date: Date.now(),
           stateOrder: false
        }
     
        db.collection("orders").doc(idOrder).set(data)
            .then(()=>{
            swal("Pedido enviado a la cocina","", "success")
            this.clearOrder()
             })
            .catch((err)=>{
                swal("algo salio mal","", "error")
                console.log(err)})
        }
    }
    clearOrder(){
        this.setState({
            order:[],
            name: "",
            total: 0
        })
    }
     render(){
     return(
             <React.Fragment>
                <section id="main">
                    <div className="container"  id="templateWaiter">
                        <div className="row">
                            <div className="col-6">
                                <div className="row margin">
                                    <div className="col-6 btn btn-desayuno" onClick={()=>this.hideLunch()}>Desayuno</div>
                                    <div className="col-6 btn btn-almuerzo"onClick={()=>this.hideBreakfast()}>Almuerzo</div>
                                </div>
                                <div className="row margin">
                                {
                                    this.state.showBreakfast?
                                    <Breakfast itemAndPriceToOrder={this.itemAndPriceToOrder}/>
                                    :<Lunch itemAndPriceToOrder={this.itemAndPriceToOrder} />
                                }

                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12 btn btn-pedido">Pedido</div>
                                </div>
                                <div className="row">
                                   <Order order={this.state.order} name={this.state.name} handleChange={this.handleChange} total={this.state.total} deleteItem={this.deleteItem} submitToFirestore={this.submitToFirestore}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
             </React.Fragment>
       )
    }
 }

export default TemplateWaiter