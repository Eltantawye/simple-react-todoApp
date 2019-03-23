import React ,{Component} from 'react'

class AddTodo extends Component{
  state = {
    content:''
  }
  /*send the content to main app Component */
  handleAdd=(e)=>{
    e.preventDefault();
    if(this.state.content.length)
    this.props.addTodo(this.state);
    this.setState({
      content:''
    })
  }

  /* set the input into comonent's state */
  handleChange=(e)=>{
    this.setState({
      content : e.target.value
    })
  }

  render(){
    return(
      <div className="stripped">
        <form onSubmit={this.handleAdd}>

          <label> Add Todo </label>
          {/* Setting the value to the new content which is empty */}
          <input id="name" type="text" placeholder="your Todo" onChange={this.handleChange} value={this.state.content}/>
          <div  style ={{width : '100%' ,height :2 , background:'#d7ccc8'}}></div>
        </form>
      </div>
    );

  }




}
export default AddTodo
