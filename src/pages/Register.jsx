import { useState } from "react"

export const Register = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: ""
  })

  const handleSubmit = e => {
    e.preventDefault()
    const {username, password, firstName, lastName} = formData;

    fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username, password, firstName, lastName})
    })
  }

  return (
    <div className="w-full max-w-xs">
      <h2>Registrarse</h2>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
          Correo Electronico
          </label> 
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="username" placeholder="Correo Electronico" onChange={e => setFormData({...formData, username: e.target.value})} type="text" name="username" value={formData.username}/>

          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Contraseña
          </label>
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" placeholder="Contraseña" onChange={e => setFormData({...formData, password: e.target.value})} type="password" name="password"  value={formData.password}/>

          <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
          Primer Nombre
          </label>
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName" placeholder="Nombre" onChange={e => setFormData({...formData, firstName: e.target.value})} type="text" name="firstName" value={formData.firstName}/>

          <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
            Apellido
          </label>
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName" placeholder="Apellido" onChange={e => setFormData({...formData, lastName: e.target.value})} type="text" name="lastName" value={formData.lastName} />
        </div>
        <div className="flex items-center justify-between">
      
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Register
        </button>
            
      </div>
        
      </form>
    </div>
  )
}
