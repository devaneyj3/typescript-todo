import React from "react";
import Todo from "../models/todo";

import classes from './Todos.module.css'

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = ({ items, onRemoveTodo }) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <li className={classes.item} key={item.id} onClick={() => onRemoveTodo(item.id)}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
