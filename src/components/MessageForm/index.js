import { useState } from "react";
import { AUTHORS } from "../../utils/constants";

export const MessageForm = ({ onAddMessage }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMessage({ text: value, author: AUTHORS.ME });
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <input type="submit" />
    </form>
  );
};
