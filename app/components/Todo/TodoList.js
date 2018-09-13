import React, {Component} from 'react';
import TodoListHeader from './TodoListHeader';
import TodoListItem from './TodoListItem';

export default class TodoList extends Component{

	constructor(){
		super();
		
	}
	renderItems(){

		let {todos, ...rest} =this.props ;
		return this.props.todos.map((todo,index) => {
			return(
					<TodoListItem key={index} {...todo} {...rest}/>
				)
		});
	}
	render(){
		return(
			<table>
				<TodoListHeader/>
				<tbody>
				{this.renderItems()}
				</tbody>
			</table>
			)
	}
}