import React, {Component } from 'react';

export default class TodoForm extends Component{

	constructor(){
		super();
		this.state = {
			error: null
		} 
	}

	validateInput(task){

		if(!task){
			return 'Please enter a value';
		}
		else if(this.props.todos.find(todo => todo.task.toUpperCase() === task.toUpperCase())){
			return 'Task is already exists'; 
		}
		else{
			return null;
		}
	}

	renderError(){
			if(!this.state.error){return null;}
			return(
			<div style={{color:'red'}}>
				{this.state.error}
			</div>
			)
	}
	handleCreate(e){
		e.preventDefault();
		let task = this.inputText.value;
		let validateInput = this.validateInput(task);
		if(validateInput){
			this.setState({
				error: validateInput
			})
			return ; 
		}
		this.props.createTask({ "task": task, "iscompleted": false });
		this.inputText.value = '';	
		
		
	}

	render(){
		return(
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" ref= {(input) => this.inputText = input} placeholder="Agrega una tarea" />
				<button>Create</button>
				{this.renderError()}
			</form>
			)
	}
}