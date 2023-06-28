// Action Types
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SORT_TODOS = 'SORT_TODOS';

// Action Creators
export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
});

export const editTodo = (id, updatedTodo) => ({
  type: EDIT_TODO,
  payload: { id, updatedTodo }
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id
});

export const sortTodos = sortOrder => ({
  type: SORT_TODOS,
  payload: sortOrder
});
