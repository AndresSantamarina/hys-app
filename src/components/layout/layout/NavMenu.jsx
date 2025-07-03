import "./Layout.css";

const NavMenu = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-options">
        <span className="nav-item">Opción 1</span>
        <span className="nav-item">Opción 2</span>
      </div>
      <div className="profile-picture">
        <img
          src="https://via.placeholder.com/40"
          alt="Perfil"
          className="profile-img"
        />
      </div>
    </nav>
  );
};

export default NavMenu;
