import React,{Component} from 'react'
class CommentItem extends Component{
    render(){
        const {commentItem}=this.props
console.log(commentItem);
        return (
            <div className="item">
<em>{commentItem.userName}:</em>
<p>{commentItem.description}</p>
            </div>
        )
    }
}
export default CommentItem