import { useState } from "react";

const useForm = (intialData, onValidate, api) => {

    const [form, setForm] = useState(intialData);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null); 

    const handleChange = e => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value})
    }

    console.log(form)

    const handleSubmit = async e => {

        e.preventDefault();
    
        try {
          const response = await fetch("/auth/register", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
          });
    
          if (!response.ok) {
            throw new Error("Error en la solicitud de registro");
          }
    
          const json = await response.json();
          console.log("Registro exitoso:", json);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      return {form, errors, loading, handleChange, handleSubmit }
}

export default useForm;