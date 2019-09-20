import React from 'react';
import images from '../../importImages';
class Button extends React.Component{ 
    render(){
      return <button className= "btn item" onClick={()=>this.props.itemAndPriceToOrder(this.props.item, this.props.price)} >
                <img className={this.props.class} src={images[this.props.image]} alt={this.props.item}/>
                <p>{this.props.item}<br/>{this.props.price}</p>
             </button>
    }
}
export default Button;