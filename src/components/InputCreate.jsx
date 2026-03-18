import { useState } from "react";
import { createTask } from "../services/fetch";

export default function InputCreateTask() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    await createTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Ingresa tu nueva tarea"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
