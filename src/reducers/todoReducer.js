import { ADD_TODO, EDIT_TODO, DELETE_TODO, SORT_TODOS } from '../actions/todoActions';

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, ...action.payload.updatedTodo };
          }
          return todo;
        })
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    case SORT_TODOS:
      const sortedTodos = [...state.todos].sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        if (action.payload === 'asc') {
          return titleA.localeCompare(titleB);
        } else if (action.payload === 'desc') {
          return titleB.localeCompare(titleA);
        }
        return 0;
      });

      return {
        ...state,
        todos: sortedTodos
      };

    default:
      return state;
  }
};

export default todoReducer;
