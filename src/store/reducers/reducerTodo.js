import {
    ADD_TODO,
    DELETE_TODO,
    GET_TODOS,
    TOGGLE_TODO
} from '../actions/todoActions';

const initialState = {
    todoListItems: []
};

export default function todoReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ADD_TODO: return {...state, todoListItems: [...state.todoListItems, payload]};
        case DELETE_TODO: return {...state,
            todoListItems: state.todoListItems.filter((item) => item.id !== payload)};
        case TOGGLE_TODO: return {...state, todoListItems: state.todoListItems.map((item) => item.id !== payload.id ? item : payload)};
        case GET_TODOS: return {...state, todoListItems: payload};
        default: return state;
    }
}
