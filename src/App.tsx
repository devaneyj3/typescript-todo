
import TodosContextProvider from './store/context';
import Todos from "./components/Todos";
import "./App.css";
import NewTodo from "./components/NewTodo";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
