import React, { Component } from 'react';
import './TemplateWaiter.css';
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';
import Order from '../Order/Order';
 class TemplateWaiter extends Component{
     render(){
         return(
             <React.Fragment>
                <section id="main">
                    <div className="container"  id="templateWaiter">
                        <div className="row">
                            <div className="col-6">
                                <div className="row" >
                                    <div className="col-6 btn btn-desayuno">Desayuno</div>
                                    <div className="col-6 btn btn-almuerzo">Almuerzo</div>
                                </div>
                                <div className="row">
                                    <Breakfast/>
                                    <Lunch />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12 btn btn-pedido">Pedido</div>
                                </div>
                                <div className="row">
                                   <Order/>å
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