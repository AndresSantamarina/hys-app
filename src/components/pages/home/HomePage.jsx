import { motion } from "framer-motion";
import "./HomePage.css";

const HomePage = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="home-title">Higiene y Seguridad</h1>
      <p className="home-welcome">Bienvenido/a a la aplicación</p>
      <span className="home-version">Versión 0.1.0</span>
    </motion.div>
  );
};

export default HomePage;
