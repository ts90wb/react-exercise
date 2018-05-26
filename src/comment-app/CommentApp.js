import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
class CommentApp extends Component {
    constructor(){
        super();
        this.state={
            userName:'',
            description:''
        }
    }
    handleInput(data){
     this.setState({
         userName:data.userName,
         description:data.description
     });
    }
  render() {
    return (
      <div className="wrapper">
      <div className="container">
        <CommentInput  onSubmitValue={this.handleInput.bind(this)}/>
        <CommentList commentList={this.state}/>
        </div>
      </div>
    )
  }
}

export default CommentApp