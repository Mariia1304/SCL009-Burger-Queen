import React, { Component } from 'react';
import './Breakfast.css';
import Button from '../Button/Button'
import Menu from '../../data/menu';

class Breakfast extends Component{
    render(){
        return(
            <div className="desayuno col-12">
                <div className="row">
                    {Menu.breakfast.map(el=><div className="col-6"><Button key={el.item} class={el.class} image={el.image} price={el.price} item={el.item} /></div>)}
                </div>
            </div>
        )
    }
}
export default Breakfast;