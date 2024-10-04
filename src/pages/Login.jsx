import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";

export const Login = () => {
  // Datos iniciales
  const initialData = {
    username: "",
    password: ""
  }
  // Redireccionar al user
  const navigate = useNavigate();

  // Validacion de inputs
  const onValidate = (form) => {
    let errors = {};
    // regexp
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*.,]).{8,}$/;

    // que no esten vacios
    if (!form.username.trim()) {
      errors.username = "El campo 'correo' no debe ser vacio"
    } 
    else if (!regexEmail.test(form.username)){
      errors.username = "El 'correo' ingresado no es valido"
    }

    if (!form.password.trim()) {
      errors.password = "El campo 'contraseña' no debe ser vacio"
    } 
    else if (!regexPassword.test(form.password)){
      errors.password = "La 'contraseña' ingresado no es valido"
    }

    return errors;
  }

  // funcion de navegacion exitosa
  const onSuccess = () => {
    navigate("/user");
  };

  // custom hook
  const { form, errors, loading, handleChange, handleSubmit} = useForm(initialData, onValidate, onSuccess, "/auth/login")
  
  // Podemos poner el required  y patterns en el input
  return (
    <div className="w-full max-w-xs">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Correo Electronico
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="username" onChange={handleChange} placeholder="Correo Electronico" type="text" name="username" value={form.username} />
            {errors.username &&  <div className="flex items-center bg-red-400 text-white text-sm font-bold px-4 py-3" role="alert">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
            <p>{errors.username}</p>
          </div>}

          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Contraseña
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" onChange={handleChange} placeholder="Contraseña"  type="password" name="password" value={form.password} />
            {errors.password &&  <div className="flex items-center bg-red-400 text-white text-sm font-bold px-4 py-3" role="alert">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
            <p>{errors.password}</p>
          </div>}

        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={loading}>{loading ? -"Ingresando..." : "Ingresar"}</button>
        </div>
      </form> 
    </div>
  )
}
