import { useContext, useRef } from 'react'
import { TodosContext } from '../store/context'

import classes from './NewTodo.module.css'

const NewTodo: React.FC = () => {

  const todosContext = useContext(TodosContext)

  const todoTextInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      return
    }
    todosContext.addTodo(enteredText)
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo