// import React from "react";
// import TodoItem from "./TodoItem";

// function TodoList({ todos, deleteTodo, toggleComplete }) {
//   return (
//     <ul id="todo-list">
//       {todos.map((todo) => (
//         <TodoItem
//           key={todo.id}
//           todo={todo}
//           deleteTodo={deleteTodo}
//           toggleComplete={toggleComplete}
//         />
//       ))}
//     </ul>
//   );
// }

// export default TodoList;
import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleComplete, updateTodo }) {
  return (
    <ul id="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          updateTodo={updateTodo} // Pass updateTodo function
        />
      ))}
    </ul>
  );
}

export default TodoList;
