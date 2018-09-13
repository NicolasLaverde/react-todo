import React, {Component} from 'react';

export default class TodoListItem extends Component{
	constructor(){
		super();

		this.state = {
			isEditing: false
		}
	}

	onSaveClick(e){
		e.preventDefault();
		let oldTask = this.props.task;
		let newTask = this.textInput.value;
		this.props.saveTask(newTask,oldTask);
		this.setState({
			isEditing: false
		})
	}
	
	renderTaskSection(){ 

		const {task,iscompleted} = this.props;

		const taskStyle= {
			color: iscompleted ? 'green' : 'red'
		}
		if(this.state.isEditing){
			return (
				<td>
					<form onSubmit={this.onSaveClick.bind(this)}>
						<input type="text" defaultValue={task} ref={(input) => this.textInput = input} />	
					</form>
				</td>
				)
		}
		return(
			<td style={taskStyle} onClick={this.props.toggleTask.bind(this,task)}> { task } </td>
			)
		
	}

	changeEditItem(){
		this.setState({
			isEditing: !this.state.isEditing
		})
	}
	onDeleteTask(){

		console.log(' mirame este')
		console.log(this.props.task);
		this.props.deleteTask(this.props.task);
	}
	renderActionSection(){
		if(this.state.isEditing){
			return(
				<td>
					<button onClick={this.onSaveClick.bind(this)}>Save</button>
					<button onClick={this.changeEditItem.bind(this)}>Cancel</button>
				</td>
			)
		}
		return(
				<td> 
					<button onClick={this.changeEditItem.bind(this)}> Edit </button>
					<button onClick={this.onDeleteTask.bind(this)}> Delete </button>
				</td>
			)
	}

	render(){

		
		return(
					<tr>
						{this.renderTaskSection()}
						{this.renderActionSection()}
					</tr>
			)
	}
}