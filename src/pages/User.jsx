import { useEffect } from "react";

export const User = () => {
  const token = localStorage.getItem('token');

  useEffect(() => {
      fetch("http://localhost:8080/api/demo", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      .then(res => console.log(res))

  }, [])
  return (
    <div>Hola Mundo</div>
  )
}
