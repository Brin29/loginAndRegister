
export const User = () => {
  const token = localStorage.getItem('token');

    const handleClick = () => {

      fetch("http://localhost:8080/api/demo", {
        headers: {
          "Content-Type": "text/plain",
          "Authorization": `Bearer ${token}`
        }
      })
      .then(res => {
        console.log(res)
      }) 
    }
  return (
    <div onClick={handleClick}>Hola Mundo</div>
  )
}
