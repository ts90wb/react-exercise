
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";




class Computer extends Component {
 
  constructor(){
    super();
    this.state={
      status:'off',
      isOn:false
    }
  }
  switchBtn(){
    this.setState({
isOn:!this.state.isOn
    });
    if(this.state.status=='off'){    
    this.setState({
        status:'on'
    })
  }
    else{
      this.setState({
        status:'off'
    })
    }
  }
  render () {
    return (
      <div>
        <Screen showContent={{showOn:'显示器亮了',showOff:'显示器关了',switchShow:this.state.isOn}} />
        <h1>{this.state.status}</h1>
        <button onClick={this.switchBtn.bind(this)}>开关</button>
      </div>
    )
  }
}

class Screen extends Component {
  static defaultProps={
    showContent:{
      showOn:'无内容',
      showOff:'无内容'
    }
  }
  render () {
    return (
      <div className='screen'>
{this.props.showContent.switchShow?this.props.showContent.showOn:this.props.showContent.showOff}
      </div>
    )
  }
}

ReactDOM.render(<Computer/>, document.getElementById("root"));
registerServiceWorker();
