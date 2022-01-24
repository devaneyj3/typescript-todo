import React, { useState } from "react";

import Todo from "../models/todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}
export const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: () => { },
  removeTodo: (id: string) => { },
})



const TodosContextProvider: React.FC = ({ children }) => {
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

  const context: TodoContextObj = {
    items: todos,
    addTodo: onAddTodo,
    removeTodo: onRemoveTodo
  }

  return <TodosContext.Provider value={context}>{children}</TodosContext.Provider>
}

export default TodosContextProvider