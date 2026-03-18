import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ItemDetailPage from "./ItemDetailPage";
import InputCreateTask from "./components/InputCreate";
import InputDelete from "./components/InputDelete";
import "./App.css";
import { fetchData } from "./services/fetch";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setData(data);
    };
    getData();
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <Link to={"/"}>Inicio</Link>
          <Link to={"/create"}>Creat tarea</Link>
          <Link to={"/delete"}>Eliminar tarea</Link>
        </nav>
        {data === null ? (
          <div>Cargando...</div>
        ) : (
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route
              path="/create"
              element={<InputCreateTask fetchData={fetchData} />}
            />
            <Route path="/delete" element={<InputDelete />} />
            {data.map((item) => (
              <Route
                key={item._id}
                path={`/${item._id}`}
                element={<ItemDetailPage item={item} />}
              />
            ))}
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
