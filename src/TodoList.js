import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, editTodo, deleteTodo, sortTodos } from './actions/todoActions';
import './TodoList.css'; // Import the CSS file for styling

const TodoList = ({ todos, addTodo, editTodo, deleteTodo, sortTodos }) => {
  const [title, setTitle] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);

  useEffect(() => {
    
  }, []);

  const handleAddTodo = e => {
    e.preventDefault(); 

    if (title.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        title: title.trim()
      };

      addTodo(newTodo);
      setTitle('');
    }
  };

  const handleEditTodo = e => {
    e.preventDefault(); 
    if (title.trim() !== '' && editTodoId) {
      const updatedTodo = {
        title: title.trim()
      };

      editTodo(editTodoId, updatedTodo);
      setTitle('');
      setEditMode(false);
      setEditTodoId(null);
    }
  };

  const handleDeleteTodo = id => {
    deleteTodo(id);
  };

  const handleSortTodos = sortOrder => {
    sortTodos(sortOrder);
  };

  const handleEditClick = (id, title) => {
    setEditMode(true);
    setEditTodoId(id);
    setTitle(title);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditTodoId(null);
    setTitle('');
  };

  return (
    <div className="todo-list-container">
      <h2>To-Do List</h2>

      <form onSubmit={editMode ? handleEditTodo : handleAddTodo}>
        <input
          type="text"
          placeholder="Enter todo title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button type="submit">{editMode ? 'Save' : 'Add'}</button>
        {editMode && (
          <button type="button" onClick={handleCancelEdit} className="cancel-button">
            Cancel
          </button>
        )}
      </form>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <div className="button-group">
              <button type="button" onClick={() => handleEditClick(todo.id, todo.title)} className="edit-button">
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDeleteTodo(todo.id)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="sort-buttons">
        <button type="button" onClick={() => handleSortTodos('asc')}>
          Sort A-Z
        </button>
        <button type="button" onClick={() => handleSortTodos('desc')}>
          Sort Z-A
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, { addTodo, editTodo, deleteTodo, sortTodos })(TodoList);
