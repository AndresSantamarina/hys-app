import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import "./Layout.css";

const SideMenu = ({ menuOpen, setMenuOpen }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Solo mostramos el botón hamburguesa en mobile */}
      {isMobile && (
        <div className="mobile-toggle">
          <FaBars onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      )}

      {isMobile ? (
        <motion.aside
          className={`side-menu ${menuOpen ? "open" : ""}`}
          initial={false}
          animate={{ x: menuOpen ? 0 : "-100%" }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <ul>
            <li onClick={() => setMenuOpen(false)}>Inicio</li>
            <li onClick={() => setMenuOpen(false)}>Perfil</li>
            <li onClick={() => setMenuOpen(false)}>Configuración</li>
            <li onClick={() => setMenuOpen(false)}>Operarios</li>
            <li onClick={() => setMenuOpen(false)}>Sectores</li>
            <li onClick={() => setMenuOpen(false)}>Información</li>
            <li onClick={() => setMenuOpen(false)}>Opción</li>
          </ul>
        </motion.aside>
      ) : (
        <aside className="side-menu">
          <ul>
            <li>Inicio</li>
            <li>Perfil</li>
            <li>Configuración</li>
            <li>Operarios</li>
            <li>Sectores</li>
            <li>Información</li>
            <li>Opción</li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default SideMenu;
