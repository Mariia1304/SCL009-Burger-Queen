import React, { Component } from 'react';
import './Lunch.css';
import  Menu  from '../../data/menu';
import Button from '../Button/Button'
class Lunch extends Component{
    render(){
        return(
            <div className="almuerzo col-12">
                                    <div className="row">
                                   
                                    {Menu.lunch.hamburger.map(el=><div className="col-4"><Button key={el.item} class={el.class} image={el.image} price={el.price} item={el.item} itemAndPriceToOrder={this.props.itemAndPriceToOrder}/> </div>)}
                                    </div>
                                    <div className="row">
                                        {Menu.lunch.extra.map(el=><div className="col-6"><Button key={el.item}  class={el.class} image={el.image} price={el.price} item={el.item} itemAndPriceToOrder={this.props.itemAndPriceToOrder}/> </div>)}
                                       
                                    </div>
                                    <div className="row">
                                    {Menu.lunch.accompaniments.map(el=><div className="col-6"><Button key={el.item}  class={el.class} image={el.image} price={el.price} item={el.item} itemAndPriceToOrder={this.props.itemAndPriceToOrder}/> </div>)}
                                    </div>
                                    <div className="row">
                                    {Menu.lunch.drink.map(el=><div className="col-3"><Button key={el.item} class={el.class} image={el.image} price={el.price} item={el.item} itemAndPriceToOrder={this.props.itemAndPriceToOrder}/> </div>)}
                                    </div> 
                                </div>
        )
    }
}
export default Lunch