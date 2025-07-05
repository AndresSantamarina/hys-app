import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/home/HomePage";
import Error404 from "../components/pages/error/Error404";
import Layout from "../components/layout/layout/Layout";
import Register from "../components/pages/login-register/Register";
import Login from "../components/pages/login-register/Login";
import RecoverPassword from "../components/pages/login-register/RecoverPassword";
import Profile from "../components/pages/profile/Profile";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="recover" element={<RecoverPassword />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
