import React from "react";



let styles = {
  fontWeight:"bold",
  color:"#dc3545"
}

export const Formulario = () => {
  
  return (
    <div>
      <form name="contact" method="post" data-netlify="true" onSubmit="submit" netlify>
 
  <input type="hidden" name="form-name" value="contact" />
  <div>
    <label>First Name <br/>
    <input type="text" name="first-name"/>
    </label>
  </div>

  <div>
    <label htmlFor="email">Email <br/>
    <input id="email" type="email" name="email"/>
    </label>
  </div>

  <div>
    <label >Mensaje <br/>
    <textarea name="comments" id="" cols="30" rows="10"></textarea>
    </label>
  </div>


    <button type="submit">Send</button>
  
</form>
    </div>
  );
};
