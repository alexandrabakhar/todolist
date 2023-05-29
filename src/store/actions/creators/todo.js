import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SHOW_COMPLETED } from '../types/todo';

let nextTodoId = 0;

export const addTodo = (content) => ({
	type: ADD_TODO,
	payload: {
		id: ++nextTodoId,
		content,
	},
});

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	payload: { id },
});

export const removeTodo = (id) => ({
	type: REMOVE_TODO,
	payload: { id },
});

export const showCompleted = (id) => ({
  type: SHOW_COMPLETED,
  payload: { id },
})
