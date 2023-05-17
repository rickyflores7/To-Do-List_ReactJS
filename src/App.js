import React, { useState } from "react";
import "./App.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [hideDoneTodos, setHideDoneTodos] = useState(false);

  const handleAddTodo = () => {
    if (!newTodo) return;
    setTodos([
      ...todos,
      { id: new Date().getTime(), task: newTodo, checked: false },
    ]);
    setNewTodo("");
  };
  console.log("todos", todos);
  console.log("newtodo", newTodo);

  const checkedTodosCount = todos.filter((t) => t.checked).length;
  const onCheckedChanged = (id, checked) => {
    setTodos((todos) =>
      todos.map((t) => (t.id === id ? { ...t, checked } : t))
    );
  };
  console.log("count", checkedTodosCount);
  console.log("display", hideDoneTodos);

  const handleHide = () => {
    setHideDoneTodos(true);
  };
  const handleShow = () => {
    setHideDoneTodos(false);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {(hideDoneTodos ? todos.filter((t) => t.checked !== true) : todos).map(
          (todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={(e) => {
                  onCheckedChanged(todo.id, !todo.checked);
                }}
              />
              {todo.task}

              {/* Todo delete button */}
              <button
                onClick={() => {
                  setTodos((todos) => todos.filter((t) => t.id !== todo.id));
                }}
              >
                x
              </button>
            </li>
          )
        )}
      </ul>

      <div>
        {/* Input field for todos */}
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        {/* Add to do button */}
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      {/* Clear all todos button */}
      <button
        onClick={() => {
          setTodos([]);
        }}
      >
        Clear Todos
      </button>

      {/* Checked/Done Todos counter */}
      <p>Checked Todos Count: {checkedTodosCount}</p>

      {/* Hide/Show button for done todos */}
      {hideDoneTodos ? (
        <button onClick={handleShow}>Show</button>
      ) : (
        <button onClick={handleHide}>Hide</button>
      )}

      
    </div>
  );
};

export default TodoList;