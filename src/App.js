import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const url = "http://localhost:8080/personas/listar";
  const [todos, setTodos] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="App">
      <ul>
        {!todos
          ? "Cargando..."
          : todos.map((todo, index) => {
              return <li key={index}>{todo.nombre}</li>;
            })}
      </ul>
    </div>
  );
}

export default App;
