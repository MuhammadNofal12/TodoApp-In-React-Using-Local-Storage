// import React, { useState, useEffect } from "react";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";
// import "./App.css"; // Import the CSS file

// function App() {
//   const [todos, setTodos] = useState(getItemsFromLocalStorage("todoItems"));

//   useEffect(() => {
//     setItemsToLocalStorage("todoItems", todos);
//   }, [todos]);

//   const addTodo = (task) => {
//     const newTodo = { id: Date.now(), task, completed: false };
//     setTodos([...todos, newTodo]);
//   };

//   const deleteTodo = (id) => {
//     const updatedTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   const toggleComplete = (id) => {
//     const updatedTodos = todos.map((todo) =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodos(updatedTodos);
//   };

//   return (
//     <div className="container">
//       <h1>To-Do List</h1>
//       <TodoForm addTodo={addTodo} />
//       <TodoList
//         todos={todos}
//         deleteTodo={deleteTodo}
//         toggleComplete={toggleComplete}
//       />
//     </div>
//   );
// }

// export default App;

// function getItemsFromLocalStorage(key) {
//   const items = localStorage.getItem(key);
//   return items ? JSON.parse(items) : [];
// }

// function setItemsToLocalStorage(key, items) {
//   localStorage.setItem(key, JSON.stringify(items));
// }
import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css"; // Import the CSS file

function App() {
  const [todos, setTodos] = useState(getItemsFromLocalStorage("todoItems"));

  useEffect(() => {
    setItemsToLocalStorage("todoItems", todos);
  }, [todos]);

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const updateTodo = (id, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        updateTodo={updateTodo} // Pass the update function
      />
    </div>
  );
}

export default App;

function getItemsFromLocalStorage(key) {
  const items = localStorage.getItem(key);
  return items ? JSON.parse(items) : [];
}

function setItemsToLocalStorage(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}
