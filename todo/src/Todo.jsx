import React, {Component} from 'react';
import TodoItem from './TodoItem.jsx';
import AddTodo from './AddTodo.jsx';
class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {todolist: []};
        this.setValue = this.setValue.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    setValue(value){
        // console.log("state:"+ this.state.todolist);
        this.setState({todolist: [...this.state.todolist,value]})
    }
    deleteItem(index){
        // console.log("index:"+index);
        var itemtodelete = this.state.todolist;
        itemtodelete.splice(index, 1);
        this.setState({todolist: itemtodelete})
    }

    componentDidMount(){
        var values = [];
        $.get("./../server.json", function(data, status){
            data.map(function(value, index){ 
        values.push(value);
        console.log(values+"values");
        })
        console.log("inner"+values);
        });
        console.log("outer"+values);
        this.setState({todolist: values})
        console.log("state"+this.state.todolist);
        //this.setState({todolist: values});
    }

     render(){
         console.log("state:"+ this.state.todolist);
         return (
            <div className="container">
                <div className="row">
                    <h1>Todo List</h1>
                    <AddTodo setValue={this.setValue}/>
                    <TodoItem todolist={this.state.todolist} deleteItem={this.deleteItem}/>
                </div> 
            </div>
            
         )
     }
 }

export default Todo;
 
 