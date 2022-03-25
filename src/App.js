import "./styles.css";
import TodoList from "./Components/ToDoList"
import TodoForm from "./Components/ToDoForm";

export default function App() {
  return (
    <div className="App">
      <div className="todoBox">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}