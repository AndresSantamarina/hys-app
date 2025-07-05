import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "./Form.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Aquí iría tu lógica de autenticación (fetch, axios, etc.)
    console.log("Login data:", data);

    Swal.fire({
      icon: "success",
      title: "¡Bienvenido!",
      text: `Has iniciado sesión correctamente.`,
    });
  };

  return (
    <div className="form-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <button type="submit">Entrar</button>

        <div className="form-footer">
          <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
            ¿Olvidaste tu contraseña?{" "}
            <a href="#" className="text-secundario">
              Recuperar
            </a>
          </p>
          <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
            ¿No tienes cuenta?{" "}
            <Link to="/register" className="text-secundario">
              Regístrate
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
