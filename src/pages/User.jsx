import { useEffect, useState } from "react";

export const User = () => {
  const [information, setInformation] = useState("Nothing");
  const token = localStorage.getItem('token');

  useEffect(() => {

    const api = async () => {

      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }

      const data = await fetch("http://localhost:8080/api/demo" , headers)
      console.log(data)
      // const jsonData = await data.json();
      // setInformation(jsonData["content"]);
    }

    api();
  }, [token])  

  return (
    <div>{information}</div>
  )
}
