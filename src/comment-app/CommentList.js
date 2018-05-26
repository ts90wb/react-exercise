import React,{Component} from 'react'
import CommentItem from './CommentItem'
class CommentList extends Component{
    render(){
        const {commentList}=this.props
        return (
            <div className="comment-list">
<CommentItem  commentItem={commentList}/>
            </div>
        )
    }
}
export default CommentList