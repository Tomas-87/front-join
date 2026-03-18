import { useState } from "react";
import { deleteTask } from "../services/fetch";

const InputDelete = () => {
  const [dataDelete, setDataDelete] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!dataDelete.trim()) return;

    await deleteTask(dataDelete);
    setDataDelete("");
  };

  const handleChange = (e) => {
    setDataDelete(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={dataDelete}
          onChange={handleChange}
          placeholder="Ingresa el id de la tarea a eliminar"
        />
        <button type="submit">Eliminar</button>
      </form>
    </>
  );
};

export default InputDelete;
