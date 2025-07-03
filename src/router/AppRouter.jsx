import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/home/HomePage";
import Error404 from "../components/pages/error/Error404";
import Layout from "../components/layout/layout/Layout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas que usan el Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* Podés agregar más rutas aquí dentro */}
        </Route>

        {/* Ruta para errores */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
