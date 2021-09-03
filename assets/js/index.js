$(document).ready(() => {

  let myModal = new bootstrap.Modal($("#modal"))
  const boton = $("#user")
  boton.click(() => {
    myModal.toggle()
  })


  function validarusuario() {

    if (email.val().length == 0 || password.val().length == 0) {
      mensaje.text("El email o la contraseña son incorrectos");
      mensaje.addClass("mensaje_incorrecto");
      email.addClass("is-invalid");
      password.addClass("is-invalid");

    } else {

      if (!existeUsuario(email.val(), password.val())) {
        mensaje.text("El email o la contraseña son incorrectos");
        mensaje.addClass("mensaje_incorrecto");
        email.addClass("is-invalid");
        password.addClass("is-invalid");
      }

      else {
        mensaje.text("sus datos son correctos");
        mensaje.addClass("mensaje_correcto");
        email.addClass("is-valid");
        password.addClass("is-valid");
      }
    }

  }


  function existeUsuario(email, contraseña) {
    const usuarios = obtenerUsuariosDeStorage();
    let existe = false;
    for (const usuario of usuarios) {
      const emailactual = usuario.email;
      const contraseñaactual = usuario.password;
      if (emailactual == email && contraseñaactual == contraseña) {
        existe = true;
        break;
      }
    }
    return existe;
  }


  const email = $("#emaillogin");
  const password = $("#passwordlogin");
  const mensaje = $("#mensaje");
  const botoningresar = $("#botonlogin");

  botoningresar.click(validarusuario);




})





