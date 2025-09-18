import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a TodoList app', completed: false },
    { id: 3, text: 'Practice React Router', completed: false },
    { id: 4, text: 'Create responsive design', completed: true },
    { id: 5, text: 'Deploy the project', completed: false }
  ]);

  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed

  // Add new todo
  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo.trim(),
          completed: false
        }
      ]);
      setNewTodo('');
    }
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filter todos
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Statistics
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  return (
    <div className="todo-container">
      <div className="todo-header">
        <h1>My Todo List</h1>
        <p>Keep track of your tasks and stay organized</p>
      </div>

      {/* Statistics */}
      <div className="todo-stats">
        <div className="stat-card">
          <div className="stat-number">{totalTodos}</div>
          <div className="stat-label">Total Tasks</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{activeTodos}</div>
          <div className="stat-label">Active</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{completedTodos}</div>
          <div className="stat-label">Completed</div>
        </div>
      </div>

      {/* Add Todo Form */}
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          className="todo-input"
        />
        <button type="submit" className="btn btn-primary add-todo-btn">
          Add Todo
        </button>
      </form>

      {/* Filter Buttons */}
      <div className="todo-filters">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({totalTodos})
        </button>
        <button
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active ({activeTodos})
        </button>
        <button
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed ({completedTodos})
        </button>
      </div>

      {/* Todo List */}
      <div className="todo-list">
        {filteredTodos.length === 0 ? (
          <div className="empty-state">
            <p>No todos found. {filter === 'all' ? 'Add your first todo above!' : `No ${filter} todos.`}</p>
          </div>
        ) : (
          filteredTodos.map(todo => (
            <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <div className="todo-content">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="todo-checkbox"
                />
                <span className="todo-text">{todo.text}</span>
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="delete-btn"
                aria-label="Delete todo"
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>

      {/* Progress Bar */}
      {totalTodos > 0 && (
        <div className="progress-section">
          <div className="progress-header">
            <span>Progress: {Math.round((completedTodos / totalTodos) * 100)}%</span>
            <span>{completedTodos} of {totalTodos} completed</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(completedTodos / totalTodos) * 100}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}