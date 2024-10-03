import { useState } from "react";

export const User = () => {
  const [information, setInformation] = useState("Nothing");
  const token = localStorage.getItem('token');


  const api = async () => {
    const headers = {
      "Content-Type": "text/plain",
      "Authorization": `Bearer ${token}`
    }

    try {
      const response = await fetch("/api/demo", { // URL relativa
        method: "GET",
        headers: headers
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud protegida");
      }

      const jsonData = await response.text();
      setInformation(jsonData)
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div onClick={api}>{information}</div>
  )
}
