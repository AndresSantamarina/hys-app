import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import "./Layout.css";

const menuItems = [
  { label: "Inicio", path: "/" },
  { label: "Configuración", path: "/config" },
  { label: "Operarios", path: "/workers" },
  { label: "Sectores", path: "/sectors" },
  { label: "Información", path: "/info" },
  { label: "Opción", path: "/opcion" },
];

const SideMenu = ({ menuOpen, setMenuOpen }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (path) => {
    navigate(path);
    if (isMobile) setMenuOpen(false);
  };

  return (
    <>
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
            {menuItems.map((item) => (
              <li key={item.label} onClick={() => handleClick(item.path)}>
                {item.label}
              </li>
            ))}
            <li
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleClick("/login")}
              style={{
                paddingTop: "1rem",
                borderTop: "1px solid var(--color-secundario)",
              }}
            >
              <MdLogin size={20} />
              <span>Iniciar sesión</span>
            </li>
            <li
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleClick("/profile")}
              style={{ marginTop: "1rem" }}
            >
              <img
                src="https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg"
                alt="Perfil"
                style={{ width: 30, height: 30, borderRadius: "50%" }}
              />
              <span>Perfil</span>
            </li>
          </ul>
        </motion.aside>
      ) : (
        <aside className="side-menu">
          <ul>
            {menuItems.map((item) => (
              <li key={item.label} onClick={() => handleClick(item.path)}>
                {item.label}
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
};

export default SideMenu;
