import { useState } from "react"


export const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    const {username, password} = formData;

    fetch("http://localhost:8080/auth/login", {
      
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username, password})
    })
    .then(res => res.json())
    .then(json => {
      const token = json.token;
      console.log(token)
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
    })
  }

  return (
    <div className="w-full max-w-xs">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
          Correo Electronico
          </label>
          <input required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="username" placeholder="Correo Electronico" onChange={e => setFormData({...formData, username:e.target.value})} type="text" name="username" value={formData.username} />

          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Contraseña
          </label>
          <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password" placeholder="Contraseña" onChange={e => setFormData({...formData, password:e.target.value})} type="password" name="password" value={formData.password} />
        </div>
        <div className="flex items-center justify-between">
      
        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Sign In"/>
      </div>
      </form> 
    </div>
  )
}