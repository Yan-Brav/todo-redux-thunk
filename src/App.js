import React from 'react';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';
import './App.css';


function App() {

	return (
		<div>
			<ToDoList />
			<ToDoForm />
		</div>
	);
}

export default App;
