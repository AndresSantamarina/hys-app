import { useState } from "react";
import { motion } from "framer-motion";
import { FaEdit } from "react-icons/fa";

const Profile = () => {
  // Simulación de datos de usuario
  const [user, setUser] = useState({
    name: "Andrés Santamarina",
    email: "andres@example.com",
    phone: "+54 11 1234 5678",
    photo:
      "https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg",
  });

  const handleEdit = () => {
    // Acá podrías abrir un modal para editar los datos
    alert("Editar perfil (próximamente)");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-8 px-4 max-w-xl mx-auto bg-white/10 backdrop-blur-md rounded-xl shadow-lg">
      <img
        src={user.photo}
        alt="Foto de perfil"
        className="w-32 h-32 rounded-full border-4 border-secundario object-cover shadow-md"
      />
      <h2 className="text-2xl font-semibold text-principal font-[var(--fuente-titulo)]">
        {user.name}
      </h2>

      <div className="w-full space-y-2 text-center text-[var(--color-fuente-principal)] font-[var(--fuente-interactiva)]">
        <p>
          <span className="font-semibold text-secundario">Email:</span>{" "}
          {user.email}
        </p>
        <p>
          <span className="font-semibold text-secundario">Teléfono:</span>{" "}
          {user.phone}
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleEdit}
        className="mt-4 flex items-center gap-2 bg-[var(--color-secundario)] text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-[var(--color-terciario)] transition-colors"
      >
        <FaEdit /> Editar perfil
      </motion.button>
    </div>
  );
};

export default Profile;
