import "./Layout.css";
import { motion } from "framer-motion";
import { MdLogin } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NavMenu = ({ setMenuOpen }) => {
  const navigate = useNavigate();

  return (
    <nav className="nav-bar">
      <div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/")}
          className="logo"
        >
          Higiene y Seguridad
        </motion.button>
      </div>

      <div className="right-nav-items">
        <div className="nav-options">
          <motion.button whileHover={{ scale: 1.1 }} className="nav-item">
            Opción 1
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="nav-item">
            Opción 2
          </motion.button>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="nav-item"
          onClick={() => navigate("/login")}
        >
          <MdLogin size={28} />
        </motion.button>

        <div className="profile-picture">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="nav-item"
            onClick={() => navigate("/profile")}
          >
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
