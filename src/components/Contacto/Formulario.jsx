import React from "react";
import { useForm } from "./useForm";

const initialForm = {
  name:"",
  email:"",
  subject:"",
  comment:"",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName =  /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
   let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
   let regexComment = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "el campo Nombre es requerido"
  } else if(!regexName.test(form.name.trim())) {
    errors.name = 'El campo nombre solo acepta letras y espacios vacios'
  }

  if (!form.email.trim()) {
    errors.email = "el campo email es requerido"
  } else if(!regexEmail.test(form.email.trim())) {
    errors.email = 'El campo email es incorrecto'
  }

  if (!form.comment.trim()) {
    errors.comment = "el campo comment es requerido"
  }

  if (!form.subject.trim()) {
    errors.subject = "el campo subject es requerido"
  } else if(!regexComment.test(form.comment.trim())) {
    errors.comment = 'El campo acepta hasta 255 caracteres'
  }



  return errors;
};

let styles = {
  fontWeight:"bold",
  color:"#dc3545"
}

export const Formulario = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true">
        <input type="text" name="name" placeholder="nombre" onChange={handleChange} onBlur={handleBlur} value={form.name} required />
        {errors.name && <small style={styles}>{errors.name}</small>}
        <input type="email" name="email" placeholder="email" onChange={handleChange} onBlur={handleBlur} value={form.email} required />
        {errors.email && <small style={styles}>{errors.email}</small>}
        <input type="text" name="subject" placeholder="asunto" onChange={handleChange} onBlur={handleBlur} value={form.subject} required />
        {errors.subject && <small style={styles}>{errors.subject}</small>}
        <textarea name="comment"  cols="50" rows="5" placeholder="escribe" onChange={handleChange} onBlur={handleBlur} value={form.comment} required></textarea>
        {errors.comment && <small style={styles}>{errors.comment}</small>}
        <input type="submit" value="ENVIAR" />
        <button type="submit">Send</button>
      </form>
      {loading && <p>Cargando...</p>}
      {response && <h3>Mensaje enviado con exito!</h3>}
    </div>
  );
};
