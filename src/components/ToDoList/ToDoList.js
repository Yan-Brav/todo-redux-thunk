import React, {useEffect} from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'
import {connect} from "react-redux";
import {getTodos} from "../../store/actions/todoActions";

function ToDoList({todoListItems, getTodos}) {

	useEffect(() => {
		getTodos()
	},[getTodos]);
	return (
		<div className='todo-list'>
			{todoListItems.map(item => {
				return <ToDoItem key={item.id}
								 item={item} />
				})
			}
		</div>
	);
}

function mapStateToProps({todoListItems}) {
	return {
		todoListItems
	}
}

const mapDispatchToProps = {
	getTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
