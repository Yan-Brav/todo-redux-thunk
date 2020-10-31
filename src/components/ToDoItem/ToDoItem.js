import React from 'react'
import './ToDoItem.css'
import {connect} from "react-redux";
import {deleteTodo,
		updateTodo}
		from "../../store/actions/todoActions";

function ToDoItem({deleteTodo, updateTodo, item}) {
	return (
		<div className='grid-2-items'>
			<div
				className={'todo-item' + (item.isDone ? ' done' : '')}
				onClick={()=>updateTodo(item)}>
				{item.title}
			</div >
			<div className='delete-btn'>
					<span
						onClick={()=>deleteTodo(item.id)}>
						X
					</span>
			</div>
		</div>
	);
}

const mapDispatchToProps = {
	deleteTodo,
	updateTodo
};


export default connect(null, mapDispatchToProps)(ToDoItem);
