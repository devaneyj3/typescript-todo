import React, { useContext } from "react";
import { TodosContext } from "../store/context";

import classes from './Todos.module.css'

const Todos: React.FC = () => {

  const todosContext = useContext(TodosContext)
  return (
    <ul className={classes.todos}>
      {todosContext.items.map((item) => (
        <li className={classes.item} key={item.id} onClick={() => todosContext.removeTodo(item.id)}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
