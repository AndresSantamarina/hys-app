import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const RecoverPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Recuperar contraseña:", data);

    Swal.fire({
      icon: "success",
      title: "¡Correo enviado!",
      text: "Te hemos enviado un email con instrucciones para recuperar tu contraseña.",
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="form-container">
      <h2>Recuperar contraseña</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
        <input
          type="email"
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Formato de email inválido",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <button type="submit">Enviar instrucciones</button>
      </form>
    </div>
  );
};

export default RecoverPassword;
