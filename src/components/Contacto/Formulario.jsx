import React from "react";



let styles = {
  fontWeight:"bold",
  color:"#dc3545"
}

export const Formulario = () => {
  
  return (
    <form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
  );
};
