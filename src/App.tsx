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

  const onRemoveTodo = (id: string) => {
    setTodos((prev) => {
      return prev.filter(todo => todo.id !== id)
    })
  }
  return (
    <div>
      <NewTodo onAddTodo={onAddTodo} />
      <Todos items={todos} onRemoveTodo={onRemoveTodo} />
    </div>
  );
}

export default App;
