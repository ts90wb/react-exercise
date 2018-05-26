import React,{Component} from 'react'
class CommentInput extends Component{
    constructor(){
        super();
        this.state={
        userName:'',
        description:''
        }
    }
    handleUserName(event){
        this.setState({
userName:event.target.value
        })
    }
    handleDescription(event){
        this.setState({
            description:event.target.value
        })
    }
    handleCommit(){
        if(this.props.onSubmitValue){
       this.props.onSubmitValue(this.state);     
        }
        this.setState({description:''});
    }
    render(){
        return (
            <div className="c-input">
                <div className="username">
                    <span>用户名:</span>
                    <input type="text" value={this.state.userName} onChange={this.handleUserName.bind(this)}/>
                </div>
                <div className="description">
                    <span>内容:</span>
                    <textarea type="text" value={this.state.description} onChange={this.handleDescription.bind(this)} />
                </div>
                <button className="btn" onClick={this.handleCommit.bind(this)}>发布</button>
            </div>
        )
    }
}
export default CommentInput