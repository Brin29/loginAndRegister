import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Login, Register, User } from "./pages"
import { NavBar } from "./components/NavBar"
import { ProtectedRoute } from "./protected/ProtectedRoute"

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

        <Route element={<ProtectedRoute/>}>
          <Route path="/user" element={<User/>}/>
        </Route>  
      </Routes>
    </BrowserRouter>
  )
}

export default App