
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
const lessons = [
  { title: 'Lesson 1: title', description: 'Lesson 1: description' },
  { title: 'Lesson 2: title', description: 'Lesson 2: description' },
  { title: 'Lesson 3: title', description: 'Lesson 3: description' },
  { title: 'Lesson 4: title', description: 'Lesson 4: description' }
 
]
class Lesson extends Component{

render(){
  const {lesson}=this.props;
  return (
    <div onClick={this.handleClick.bind(this)}>
<h1>{lesson.title}</h1>
<p>{lesson.description}</p>
    </div>
  )
}
handleClick(){
  console.log(this.props.index+'-'+this.props.lesson.title);
}
}
class Index extends Component{
  render(){
    return (
      <div>
        <LessonsList lessons={lessons}/>
      </div>
    )
  }
}
class LessonsList extends Component{
  render(){
  const {lessons}=this.props;    
    return (
      <div>
 {lessons.map((lesson,i)=><Lesson key={i} lesson={lesson} index={i}/>)}
      </div>
    )
  }
}


ReactDOM.render(<Index/>, document.getElementById("root"));
registerServiceWorker();
