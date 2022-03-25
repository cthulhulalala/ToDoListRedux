import Moment from "react-moment";
import "moment-timezone";

export default function TodoItem({ item }) {
  return (
    <li className="item">
      {item.text}
      <div className="date">
        <Moment date={item.dateTime} format="h:mm A, Do MMM, YY" />
      </div>
    </li>
  );
}
