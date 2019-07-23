import React, { Component } from 'react';
import './TemplateWaiter.css';
import Order from '../Order/Order';
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';

 class TemplateWaiter extends Component {
    constructor(props){
        super(props);
        this.state={
            showBreakfast: true,
            order:[]
        };
        this.itemAndPriceToOrder = this.itemAndPriceToOrder.bind(this);
        
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
    notFound(order, itemToOrder, priceToOrder) {
        const { length } = order;
        //console.log(length)
        const id = length + 1;
        const found = order.some(el => el.item === itemToOrder);
        if (found) order.some(el=>{
            if( el.item === itemToOrder){
            el.price= el.price+priceToOrder;
            el.quantity++;}
        })
        if (!found) order.push({id: id, item: itemToOrder, price: priceToOrder, quantity: 1})
        return order;
    }
    itemAndPriceToOrder(itemToOrder,priceToOrder){
        let notFound = this.notFound(this.state.order, itemToOrder, priceToOrder);
        // console.log("NOTFOUND:", this.notFound(this.state.order, itemToOrder, priceToOrder))
        // if(!notFound){
        this.setState({order: notFound});
        // }
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
                                   <Order order={this.state.order}/>
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