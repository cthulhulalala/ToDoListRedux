import { useSelector } from "react-redux";
import TodoItem from "../ToDoItem";

export default function TodoList() {
  const { todoList } = useSelector((state) => state.todo);

  return (
    <ul className="list">
      {todoList.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </ul>
  );
}
