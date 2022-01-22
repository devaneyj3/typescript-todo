import { useRef } from 'react'

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = ({ onAddTodo }) => {

  const todoTextInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      return
    }
    onAddTodo(enteredText)
  }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo