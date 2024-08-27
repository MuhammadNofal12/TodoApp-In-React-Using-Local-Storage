// import React from "react";

// function TodoItem({ todo, deleteTodo, toggleComplete }) {
//   return (
//     <li className={todo.completed ? "completed" : ""}>
//       {todo.task}
//       <div className="actions">
//         <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//         <button onClick={() => toggleComplete(todo.id)}>
//           {todo.completed ? "Undo" : "Complete"}
//         </button>
//       </div>
//     </li>
//   );
// }

// export default TodoItem;
import React, { useState } from "react";

function TodoItem({ todo, deleteTodo, toggleComplete, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleUpdate = () => {
    updateTodo(todo.id, newTask);
    setIsEditing(false);
  };

  return (
    <li className={todo.completed ? "completed" : ""}>
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      ) : (
        <span onClick={() => toggleComplete(todo.id)}>{todo.task}</span>
      )}

      <div className="actions">
        {isEditing ? (
          <button onClick={handleUpdate} className="save">
            Save
          </button>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)} className="edit">
              Edit
            </button>
            <button onClick={() => deleteTodo(todo.id)} className="delete">
              Delete
            </button>
            <button
              onClick={() => toggleComplete(todo.id)}
              className={`complete ${todo.completed ? "completed" : ""}`}
            >
              {todo.completed ? "Undo" : "Complete"}
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
