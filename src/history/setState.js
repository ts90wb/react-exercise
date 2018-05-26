import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";




class LikeBtn extends Component {
 constructor(){
   super();
   this.state={
     isLike:false,
     count:0
   }
 }
  handleClick(){
    this.setState({
      isLike:!this.state.isLike
    });
    //data=>this.state
    this.setState(data=>{
    return  {count:this.state.count}
    })
    this.setState(data=>{
      return  {count:data.count+1}
    })
  }
    render () {
        return (
  <div onClick={this.handleClick.bind(this)}>
<button>{this.state.isLike?'点赞':'取消'}</button>
  </div>
        )
      }
}
ReactDOM.render(<LikeBtn/>, document.getElementById("root"));
registerServiceWorker();
