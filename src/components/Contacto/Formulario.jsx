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
      <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
    </div>
  );
};
