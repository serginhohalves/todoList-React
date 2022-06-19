import React from "react";

function TodoList({ todos, updateTodos }) {
  const removeTask = (index) => {
    const updatedList = todos.filter((task, taskIndex) => {
      return taskIndex !== index;
    });
    updateTodos(updatedList);
  };
  const markComplete = (id) => {
    const updatedList = todos.map((item, index) => {
      if (id !== index) return item;
      return { ...item, complete: !item.complete };
    });
    updateTodos(updatedList);
  };
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div key={index}>
          <div
            className={`todo ${todo.complete ? "taskDone" : ""}`}
            onClick={() => markComplete(index)}
          >
            Item{index + 1}: {todo.task}
          </div>

          <div>
            <button className="button" onClick={() => removeTask(index)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
//todos é um array de objetos, cada objeto é um todo que está sendo exibido na tela
// todas as vezes que um elemento está entre chaves, é um elemento que é um objeto, só assim ele podera ser manipulado
