import React, {useState} from 'react'
import './ToDoForm.css'
import {connect} from "react-redux";
import {saveTodo} from "../../store/actions/todoActions";

function ToDoForm({saveTodo}) {

	const [title, setTitle] = useState('');

	function handleChange(event) {
		setTitle(event.target.value);
	}
	function onFormSubmit(event) {
		event.preventDefault();
		saveTodo(title);
		setTitle('');
	}
	return (
		<form className='todo-form'
			  onSubmit={onFormSubmit}>
			<input type="text"
				   placeholder='Enter a new task'
				   value={title}
				   onChange={handleChange}
			/>
			<button>ADD</button>
		</form>
	);
}

const mapDispatchToProps = {
	saveTodo
};

export default connect(null, mapDispatchToProps)(ToDoForm);

