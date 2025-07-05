import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./Form.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Register data:", data);

    Swal.fire({
      icon: "success",
      title: "¡Registro exitoso!",
      text: `Bienvenido/a, ${data.name}.`,
    });
  };

  return (
    <div className="form-container">
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre:</label>
        <input
          type="text"
          {...register("name", { required: "El nombre es obligatorio" })}
        />
        {errors.name && <span>{errors.name.message}</span>}

        <label>Email:</label>
        <input
          type="email"
          {...register("email", { required: "El email es obligatorio" })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label>Contraseña:</label>
        <input
          type="password"
          {...register("password", {
            required: "La contraseña es obligatoria",
          })}
          className="text-secundario"
        />
        {errors.password && <span>{errors.password.message}</span>}

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
