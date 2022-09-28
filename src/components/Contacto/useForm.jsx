import { useState } from "react";
import { helpHttp } from "../helpHttp";

export const useForm = (initialform, validateForm) => {
  const [form, setform] = useState(initialform);
  const [errors, seterrors] = useState({});
  const [loading, setloading] = useState(false);
  const [response, setresponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    handleChange(e);
    seterrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    seterrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      alert("Enviando formulario");
      setloading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/lautiatencio@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
            setloading(false);
            setresponse(true);
            setform(initialform);
            setTimeout(() => {
                setresponse(false)
            }, 3000);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
