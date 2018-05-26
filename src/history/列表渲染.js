
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]
class Index extends Component{
  render(){
    return (
      <div>
        {users.map((user,i)=><User key={i} user={user}/>)}
      </div>
    )
  }
}
class User extends Component{
  render(){
  const {user}=this.props;    
    return (
      <div>
      {user.username}
      </div>
    )
  }
}


ReactDOM.render(<Index/>, document.getElementById("root"));
registerServiceWorker();
