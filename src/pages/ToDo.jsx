import { useState } from 'react';

export default function ToDo() {
  // State for all todos
  const [allTodos, setAllTodos] = useState([
    {
      id: 1,
      task: "Complete React project",
      priority: "high",
      completed: false
    },
    {
      id: 2,
      task: "Review code for bugs",
      priority: "medium",
      completed: true
    },
    {
      id: 3,
      task: "Update documentation",
      priority: "low",
      completed: false
    }
  ]);

  // State for form inputs
  const [todo, setTodo] = useState({
    task: '',
    priority: 'medium',
    completed: false
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTodo(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Add new todo (3-step pattern)
  const addTodo = (e) => {
    e.preventDefault();
    
    if (!todo.task.trim()) return;

    // Step 1: Create a copy of the array
    const todosCopy = [...allTodos];
    
    // Step 2: Modify the copy (add new todo)
    const newTodo = {
      id: Date.now(), // Simple ID generation
      task: todo.task.trim(),
      priority: todo.priority,
      completed: todo.completed
    };
    todosCopy.push(newTodo);
    
    // Step 3: Set the copy back to state
    setAllTodos(todosCopy);
    
    // Clear form
    setTodo({
      task: '',
      priority: 'medium',
      completed: false
    });
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    const todosCopy = [...allTodos];
    const todoIndex = todosCopy.findIndex(t => t.id === id);
    if (todoIndex !== -1) {
      todosCopy[todoIndex].completed = !todosCopy[todoIndex].completed;
      setAllTodos(todosCopy);
    }
  };

  // Delete todo
  const deleteTodo = (id) => {
    const todosCopy = allTodos.filter(t => t.id !== id);
    setAllTodos(todosCopy);
  };

  // Filter todos
  const pendingTodos = allTodos.filter(t => !t.completed);
  const completedTodos = allTodos.filter(t => t.completed);
  const highPriorityTodos = allTodos.filter(t => t.priority === 'high' && !t.completed);

  return (
    <div className="todo-page">
      <div className="container">
        <h1>Task Manager</h1>
        <p>Stay organized and manage your tasks efficiently</p>

        {/* Statistics Dashboard */}
        <div className="todo-stats">
          <div className="stat-card">
            <div className="stat-number">{allTodos.length}</div>
            <div className="stat-label">Total Tasks</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{pendingTodos.length}</div>
            <div className="stat-label">Pending</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{completedTodos.length}</div>
            <div className="stat-label">Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{highPriorityTodos.length}</div>
            <div className="stat-label">High Priority</div>
          </div>
        </div>

        {/* Add Todo Form */}
        <div className="todo-form-container">
          <h2>Add New Task</h2>
          <form onSubmit={addTodo} className="todo-form">
            <div className="form-group">
              <label htmlFor="task">Task Description</label>
              <input
                type="text"
                id="task"
                name="task"
                value={todo.task}
                onChange={handleInputChange}
                placeholder="Enter your task..."
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="priority">Priority Level</label>
              <select
                id="priority"
                name="priority"
                value={todo.priority}
                onChange={handleInputChange}
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
            </div>
            
            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="completed"
                  checked={todo.completed}
                  onChange={handleInputChange}
                />
                Mark as completed
              </label>
            </div>
            
            <button type="submit" className="add-todo-btn">
              Add Task
            </button>
          </form>
        </div>

        {/* Todo Lists */}
        <div className="todo-lists">
          {/* Pending Tasks */}
          <div className="pending-section">
            <h2>Pending Tasks ({pendingTodos.length})</h2>
            <div className="list">
              {pendingTodos.map(todoItem => (
                <div key={todoItem.id} className={`todo-item priority-${todoItem.priority}`}>
                  <div className="todo-content">
                    <input
                      type="checkbox"
                      checked={todoItem.completed}
                      onChange={() => toggleTodo(todoItem.id)}
                      className="todo-checkbox"
                    />
                    <div className="todo-info">
                      <div className="todo-task">{todoItem.task}</div>
                      <span className={`priority-badge priority-${todoItem.priority}`}>
                        {todoItem.priority} priority
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteTodo(todoItem.id)}
                    className="delete-btn"
                    title="Delete task"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Completed Tasks */}
          <div className="completed-section">
            <h2>Completed Tasks ({completedTodos.length})</h2>
            <div className="list">
              {completedTodos.map(todoItem => (
                <div key={todoItem.id} className={`todo-item completed priority-${todoItem.priority}`}>
                  <div className="todo-content">
                    <input
                      type="checkbox"
                      checked={todoItem.completed}
                      onChange={() => toggleTodo(todoItem.id)}
                      className="todo-checkbox"
                    />
                    <div className="todo-info">
                      <div className="todo-task">{todoItem.task}</div>
                      <span className={`priority-badge priority-${todoItem.priority}`}>
                        {todoItem.priority} priority
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteTodo(todoItem.id)}
                    className="delete-btn"
                    title="Delete task"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}