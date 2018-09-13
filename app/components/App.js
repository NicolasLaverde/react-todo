import React,{Component} from 'react';
import {todos} from '../todos.json';
import TodoList from './Todo/TodoList';
import TodoForm from './Todo/TodoForm';

export default class App extends Component{

	constructor(){
		super();
		this.state = {
			todos
		}
	}

	createTask(task){
		this.setState({
			todos: [task,...this.state.todos]
		})
	}

	toggleTask(task){

		const findTodo = this.state.todos.find( todo => todo.task === task);
		console.log(findTodo)
		if(findTodo){
			findTodo.iscompleted = !findTodo.iscompleted;
		}
		this.setState({
			todos: this.state.todos
		});

	}
	saveTask(newtask, oldTask){
		const findTodo = this.state.todos.find( todo => todo.task === oldTask);
		if(findTodo){
			findTodo.task = newtask;
		}
		this.setState({
			todos : this.state.todos
		});
	}
	deleteTask(task){
		const todosFilter = this.state.todos.filter( todo => todo.task !== task);
		this.setState({
			todos:todosFilter
		})
	}

	render(){
		return(
			<div>
				<h1> Ejemplo Todo list React con webpack </h1>
				<TodoForm todos={this.state.todos} createTask={this.createTask.bind(this)}/>
				<TodoList todos={this.state.todos}
				 toggleTask={this.toggleTask.bind(this)} saveTask={this.saveTask.bind(this)} 
				 deleteTask={this.deleteTask.bind(this)} />
			</div>);
	}
}