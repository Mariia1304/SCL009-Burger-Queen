import React, { Component } from 'react';
import './Lunch.css';

class Lunch extends Component{
    render(){
        return(
            <div className="almuerzo col-12">
            <div className="row">
                <div className="col-4"><div className="btn item"><img className="img-fluid hamburger" src="burgersimple.png" alt=""/><p>Hamburguesa simple res <br/> 1500</p></div></div>
                <div className="col-4"><div className="btn item"><img className="img-fluid hamburger" src="burgersimple.png" alt=""/><p>Hamburguesa simple pollo  <br/>  1500</p></div></div>
                <div className="col-4"><div className="btn item"><img className="img-fluid hamburger" src="burgersimple.png" alt=""/><p>Hamburguesa simple veg  <br/>  1500</p></div></div>
                <div className="col-4"><div className="btn item"><img className="img-fluid hamburger" src="burger.png" alt=""/><p>Hamburguesa doble res  <br/>  2500</p></div></div>
                <div className="col-4"><div className="btn item"><img className="img-fluid hamburger" src="burger.png" alt=""/><p>Hamburguesa doble pollo<br/>  2500</p></div></div>
                <div className="col-4"><div className="btn item"><img className="img-fluid hamburger" src="burger.png" alt=""/><p>Hamburguesa doble veg<br/>  2500</p></div></div>
            </div>
            <div className="row">
                <div className="col-6"><div className="btn item"><img className="img-fluid cheese" src="cheese.png" alt=""/><p>Extra Queso <br/> 500</p></div></div>
                <div className="col-6"><div className="btn item"><img className="img-fluid egg" src="egg4.png" alt=""/><p>Extra Huevo<br/> 500</p></div></div>
            </div>
            <div className="row">
                <div className="col-6"><div className="btn item"><img className="img-fluid potatoes" src="fried-potatoes.png" alt=""/><p>Papas Fritas <br/> 500</p></div></div>
                <div className="col-6"><div className="btn item"><img className="img-fluid rings" src="onion-rings.png" alt=""/><p>Onion Rings <br/> 500</p></div></div>
            </div>
            <div className="row">
                <div className="col-3"><div className="btn item"><img className="img-fluid drink" src="water.png" alt=""/><p>Agua 500ml <br/> 500</p></div></div>
                <div className="col-3"><div className="btn item"><img className="img-fluid drinkBig" src="water.png" alt=""/><p>Agua 750ml <br/> 800</p></div></div>
                <div className="col-3"><div className="btn item"><img className="img-fluid drink" src="bottle.png" alt=""/><p>Gaseosa 500ml <br/> 700</p></div></div>
                <div className="col-3"><div className="btn item"><img className="img-fluid drinkBig" src="bottle.png" alt=""/><p>Gaseosa 750ml <br/> 1000</p></div></div>
            </div>
        </div>
        )
    }
}
export default Lunch