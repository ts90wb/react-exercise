import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";




class Dog extends Component {
 constructor(){
   super();
   this.state={
    isRunning:false,
    isBarking:false
   }
 }
 run(){
   console.log('run');
   console.log(this);
   this.setState({
     isRunning:true
   })
setTimeout(()=>{
this.setState(data=>{
  return {isRunning:false}
})
},5000)
  }
  bark(){

  }
    render () {
        return (
  <div onClick={()=>{
    this.run();
    this.bark();
  }}>
Dog
  </div>
        )
      }
}
ReactDOM.render(<Dog/>, document.getElementById("root"));
registerServiceWorker();
