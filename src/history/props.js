import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";




class Index extends Component {
 constructor(){
   super();
   this.state={
    yLike:'你吃了么',
    mLike:'我吃饱了'
   }
 }
 
    render () {
        return (
<div>
<LikeBtn youAndMe={{yLike:this.state.yLike,mLike:this.state.mLike}} onClickBtn={()=>console.log('click')}/>
</div>
        )
      }
}
class LikeBtn extends Component {
  static defaultProps={
    yLike:'你吃',
    mLike:'我吃'
  }
  constructor(){
    super();
    this.state={
    isLike:false
    }
  }
  handleBtn(){
    this.setState({
      isLike:!this.state.isLike
    });
    if(this.props.onClickBtn){
      this.props.onClickBtn();
    }
  }
     render () {
    

         return (
 <div >
   <h1>{this.state.isLike?this.props.youAndMe.yLike:this.props.youAndMe.mLike}</h1>
 <button onClick={this.handleBtn.bind(this)}>点击改变</button>
 </div>
         )
       }
 }
ReactDOM.render(<Index/>, document.getElementById("root"));
registerServiceWorker();


