import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Error404.css";

const Error404 = () => {
  return (
    <motion.div
      className="error-container"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="error-title">404</h1>
      <p className="error-message">Página no encontrada</p>
      <Link to="/" className="error-button">
        Volver al inicio
      </Link>
    </motion.div>
  );
};

export default Error404;
