import React from 'react';
import images from '../../importImages';
class Button extends React.Component{
    render(){
      return <button className= "btn item"><img className={this.props.class} src={images[this.props.image]}/><p>{this.props.item}<br/>{this.props.price}</p></button>
    }
}
export default Button;