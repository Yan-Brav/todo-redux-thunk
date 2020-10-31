import todoService from '../../todo-service'

export const GET_TODOS ='GET_TODOS';
export const setTodos = (payload) => ({type: GET_TODOS, payload});
export const getTodos = () => (dispatch) => {
    todoService.get('/').then(({data}) => dispatch(setTodos(data)))
};

export const ADD_TODO ='ADD_TODO';
export const addTodo = (payload) => ({type: ADD_TODO, payload});
export const saveTodo = (title) => (dispatch) => {
    const todo = {
        title: title,
        isDone: false
    };
    todoService.post('/', todo).then(({data}) => dispatch(addTodo(data)))
};

export const DELETE_TODO ='DELETE_TODO';
export const deleteTodoByID = (payload) => ({type:DELETE_TODO, payload});
export const deleteTodo = (id) => (dispatch) => {
    todoService.delete('/' + id).then(dispatch(deleteTodoByID(id)));
};

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = (payload) => ({type: TOGGLE_TODO, payload});
export const updateTodo = (todo) => (dispatch) => {
    todo = {...todo, isDone: !todo.isDone};
    todoService.put('/' + todo.id, todo).then(dispatch(toggleTodo(todo)))
};
