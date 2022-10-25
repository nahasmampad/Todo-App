import React, { Component } from "react";
import "./TodoApp.css";

export class TodoApp extends Component {
  state = {
    input: "",
    items: [],
    edit : '',
    show : false
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  handleEdit = (event) => {
    this.setState({
      edit: event.target.value,
    });
  };



  storeItems = (event) => {
    event.preventDefault();

    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input:"",
      
    });
  };

  updateItems = (event)=>{
    event.preventDefault();

    const { edit } = this.state;

    this.setState({
      items: [...this.state.items, edit],
      edit:"",
      show:false
      
    });





  }

  deleteItem = (key)=>{

    this.setState({
        items : this.state.items.filter((data, index)=> index !== key )
    })


  }

  editItem = (key)=>{
    
    this.setState({
      show: true,
      edit : this.state.items.filter((data, index)=> index === key ),
      items : this.state.items.filter((data, index)=> index !== key ),

  })
  }

  render() {
    const { input, items, edit, show } = this.state;
    console.log(items);
    return (
      <div className="todo-container">

        



        <form className="input-section" onSubmit={this.storeItems}>
          <h1>Todo App</h1>
          <input
            type="text"
            placeholder="Enter Items.."
            value={input}
            onChange={this.handleChange}
          />
        </form>

        {show && <form className="input-section"   onSubmit={this.updateItems}>
          
          <input
            type="text"
            
            value={edit}
            onChange={this.handleEdit}
          />
        </form>}




        
        <ul>
          {
            items.map((data, index) => (
                <li key={index}>
            {data}
            <div className="list">

            <i class="bi bi-pencil-square" onClick={()=>this.editItem(index)}></i>
            <i className="bi bi-trash3-fill" onClick={()=>this.deleteItem(index)}></i>
            
            </div>
          </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default TodoApp;
