import React, { Component } from 'react';
import './TemplateWaiter.css';
// import Breakfast from '../Breakfast/Breakfast';
// import Lunch from '../Lunch/Lunch';
import Order from '../Order/Order';
import  Menu  from '../../data/menu';
import Button from '../Button/Button'

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
    itemAndPriceToOrder(itemToOrder,priceToOrder){
        this.setState({order: this.state.order.concat([{item: itemToOrder, price: priceToOrder}])})
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
                                    <div className="desayuno col-12">
                                    <div className="row">
                                        {Menu.breakfast.map(el=><div className="col-6"><Button key={el.item} class={el.class} image={el.image} price={el.price} item={el.item} itemAndPriceToOrder={this.itemAndPriceToOrder}  /></div>)}
                                    </div>
                                </div>
                                    :<div className="almuerzo col-12">
                                    <div className="row">
                                   
                                    {Menu.lunch.hamburger.map(el=><div className="col-4"><Button key={el.item} class={el.class} image={el.image} price={el.price} item={el.item} itemAndPriceToOrder={this.itemAndPriceToOrder}/> </div>)}
                                    </div>
                                    <div className="row">
                                        {Menu.lunch.extra.map(el=><div className="col-6"><Button key={el.item}  class={el.class} image={el.image} price={el.price} item={el.item} itemAndPriceToOrder={this.itemAndPriceToOrder}/> </div>)}
                                       
                                    </div>
                                    <div className="row">
                                    {Menu.lunch.accompaniments.map(el=><div className="col-6"><Button key={el.item}  class={el.class} image={el.image} price={el.price} item={el.item} itemAndPriceToOrder={this.itemAndPriceToOrder}/> </div>)}
                                    </div>
                                    <div className="row">
                                    {Menu.lunch.drink.map(el=><div className="col-3"><Button key={el.item} class={el.class} image={el.image} price={el.price} item={el.item} itemAndPriceToOrder={this.itemAndPriceToOrder}/> </div>)}
                                    </div>
                                </div>
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