import "./App.css";
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([ //  aqui temos um array de objetos, cada objeto é um todo que está sendo exibido na tela
    { complete: false, task: "Read about MongoDb" },
    { complete: false, task: "Create a React ToDo App" },
    { complete: false, task: "Find my key" },
  ]);
  return (
    <div className="App">
      <TodoForm addTodo={(todo)=>{
        if(todo.task.trim().length > 0) { // aqui temos um trim para remover os espaços em branco
          setTodos([...todos, todo]); // aqui estamos adicionando o todo novo ao array de todos
        }
      }} 
      />
      <TodoList todos={todos} updateTodos={(list)=>{setTodos(list)}} 
      ></TodoList>
    </div>
  );
}

export default App;


//useState:
// serve para criar um estado
// o primeiro parametro é o valor inicial do estado
// o segundo parametro é uma função que recebe o valor atual do estado
// serve para criar um estado e atualizar o estado
