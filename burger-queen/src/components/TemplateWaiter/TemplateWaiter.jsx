import React, { Component } from 'react';
import './TemplateWaiter.css';
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';
import Order from '../Order/Order';

 class TemplateWaiter extends Component {
    constructor(props){
        super(props)
        this.state={
            showBreakfast: true,
            order:[]
        }
        this.itemAndPriceToOrder = this.itemAndPriceToOrder(this);
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
    itemAndPriceToOrder(itemToOrder,priceToOrder){
        this.setState({order: this.state.order.concat([{item:itemToOrder, price:priceToOrder}])})
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
                                    <Breakfast/>
                                    :<Lunch/>
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