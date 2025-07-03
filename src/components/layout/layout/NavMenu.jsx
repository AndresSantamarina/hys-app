import "./Layout.css";
import { motion } from "framer-motion";

const NavMenu = ({ setMenuOpen }) => {
  return (
    <nav className="nav-bar">
      <div className="logo">Higiene y Seguridad</div>
      <div className="right-nav-items">
        <div className="nav-options">
          <motion.button whileHover={{ scale: 1.1 }} className="nav-item">
            Opción 1
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="nav-item">
            Opción 2
          </motion.button>
        </div>
        <div className="profile-picture">
          <motion.button whileHover={{ scale: 1.1 }} className="nav-item">
            <img
              src="https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg"
              alt="Perfil"
              className="profile-img"
            />
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
