import React, { Component } from 'react';
import './Breakfast.css';
class Breakfast extends Component{
    render(){
        return(
            <div className="desayuno col-12">
                <div className="row">
                    <div className="col-6" id="btn1">
                            <div className="btn item"><img className="img-fluid coffee" src="coffee.svg" alt=""/><p>Cafe Americano  <br/>  500</p></div>
                    </div>
                    <div className="col-6" id="btn2">
                            <div className="btn item"><img className="img-fluid coffee-cup" src="coffee-cup.svg" alt=""/><p> Cafe con leche  <br/> 700</p></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6" id="btn3">
                            <div className="btn item"><img className="img-fluid sandwich" src="sandwich.png" alt=""/><p>Sandwich de jamón con queso 1000</p></div>
                    </div>
                    <div className="col-6" id="btn4">
                            <div className="btn item"><img className="img-fluid juice" src="orange-juice.svg" alt=""/><p>Jugo natural  <br/>  700</p></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Breakfast;