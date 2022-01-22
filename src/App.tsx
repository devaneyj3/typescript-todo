import { useState } from 'react'
import Todos from "./components/Todos";
import Todo from './models/todo'
import "./App.css";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (text: string) => {

    const newTodo = new Todo(text);
    setTodos((prev) => {
      return [...prev, newTodo]
    });

  }
  return (
    <div>
      <NewTodo onAddTodo={onAddTodo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
