import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="w-full bg-[#f87171] ">
      <ul className="flex flex-row justify-end gap-x-5 p-5">
        <li><Link to="/login" className="text-white">Ingresar</Link></li>
        <li><Link to="/register" className="text-white">Registrarse</Link></li>
      </ul>
    </nav>
  )
}
