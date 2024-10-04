import { useState } from "react";

const useForm = (intialData, onValidate, api) => {

    const [form, setForm] = useState(intialData);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]); 

    const handleChange = e => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value})
    }


    const handleSubmit = async e => {
        e.preventDefault();
        const err = onValidate(form);
        setErrors(err)

        if (Object.keys(err).length === 0){
          setLoading(true);
        }
 
    
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
          setLoading(false);
        } catch (error) {
          console.error("Error:", error);
          setLoading(false);
        }
      };

      return {form, errors, loading, handleChange, handleSubmit }
}

export default useForm;