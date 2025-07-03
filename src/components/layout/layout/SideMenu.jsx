import "./Layout.css";

const SideMenu = () => {
  return (
    <aside className="side-menu">
      <ul>
        <li>Inicio</li>
        <li>Perfil</li>
        <li>Configuración</li>
        {/* en mobile se mostrarán aquí las opciones del NavMenu también */}
      </ul>
    </aside>
  );
};

export default SideMenu;
