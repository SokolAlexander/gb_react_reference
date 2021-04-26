import "./styles.css";
import { AUTHORS } from "../../utils/constants";

export const Message = ({ text, author }) => (
  <div
    className={`message ${
      author === AUTHORS.ME ? "messageHuman" : "messageBot"
    }`}
  >
    <span>{text}</span>
  </div>
);
