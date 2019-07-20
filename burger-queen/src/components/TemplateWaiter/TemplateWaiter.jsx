import React, { Component } from 'react';
import './TemplateWaiter.css';
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';
import Order from '../Order/Order';

 class TemplateWaiter extends Component {
    constructor(){
        super()
        this.state={
            showAndHide: true
        }
    }
    hideLunch(){
        this.setState({
            showAndHide:true
        })
    }  
    hideBreakfast(){
        this.setState({
            showAndHide:false
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
                                    this.state.showAndHide?
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
                                   <Order/>
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