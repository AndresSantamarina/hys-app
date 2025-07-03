import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "./NavMenu";
import SideMenu from "./SideMenu";
import { motion } from "framer-motion";
import "./Layout.css";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="layout-container">
      <NavMenu setMenuOpen={setMenuOpen} />
      <div className="main-content">
        <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <motion.div
          className="page-content"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
};

export default Layout;
