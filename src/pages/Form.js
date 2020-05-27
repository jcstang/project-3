
import React, { Component } from "react";
import AddToDo from "../components/AddToDo";
import ToDoList from "../components/ToDoList";

class Form extends Component {
    state = {
      toDoItem: '',
      toDoList: [
        {
          text: 'Display to do item',
          done: true
        }
      ]
    };
  
    updateToDoItem = (event) => {
      const { name, value } = event.target;
  
      this.setState({
        [name]: value
      })
    }
  
    saveToDoItem = (event) => {
      event.preventDefault();
  
      const newToDoItem = {
        text: this.state.toDoItem,
        done: false
      }
  
      this.setState({
        toDoList: this.state.toDoList.concat(newToDoItem),
        toDoItem: ''
      })

      
    }
  
    markAsDone = (event) => {
      const index = event.target.value;
      let toDoItem = this.state.toDoList[index];
      toDoItem.done = !toDoItem.done;
  
      this.setState({
        toDoList: this.state.toDoList
      })
    }


    render() {
    return (
        <div>
        <h1>Add a Habit</h1>
        <AddToDo
          toDoItem={this.state.toDoItem}
          updateToDoItem={this.updateToDoItem}
          saveToDoItem={this.saveToDoItem}
        />
        {/* <ToDoList
          toDoList={this.state.toDoList}
          markAsDone={this.markAsDone}
        /> */}
      </div> 
    );
}

}

export default Form;