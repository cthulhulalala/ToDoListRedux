import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../Redux/todoslice";

export default function TodoFrom() {
  const [inputText, setInputText] = useState("");
  const [inputDateTime, setInputDateTime] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText || !inputDateTime) return;
    const newItem = {
      text: inputText,
      dateTime: inputDateTime,
      id: Math.random()
    };
    dispatch(add(newItem));
    setInputText("");
    setInputDateTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo item"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <input
        type="datetime-local"
        onChange={(e) => setInputDateTime(e.target.value)}
        value={inputDateTime}
      />
      <input type="submit" value="+ ADD" />
    </form>
  );
}
