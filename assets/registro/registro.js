/* quiero guardar los datos del usuario en el storage
key usuarios
value objetousuarios */

$(document).ready(() => {


  function ExtisteListaUsuarioEnElStorage() {
    let existe = false;

    if (localStorage.getItem("usuarios") != null) {
      {
        existe = true;
      }
    }

    return existe
  }

  function crearListaDeUsuario() {
    localStorage.setItem("usuarios", JSON.stringify([]));
  }

  function obtenerUsuariosDeStorage() {
    return JSON.parse(localStorage.getItem("usuarios"));
  }

  function guardarUsuariosEnStorage(usuario) {
    localStorage.setItem("usuarios", JSON.stringify(usuario));
  }

  class Usuario {
    constructor(nuevousuario) {
      this.nombre = nuevousuario.nombre;
      this.apellido = nuevousuario.apellido;
      this.email = nuevousuario.email;
      this.password = nuevousuario.password;
    }
  }

  function cargarNuevoUsuario(usuarioACargar) {

    const arrayDeStorage = obtenerUsuariosDeStorage();
    arrayDeStorage.push(usuarioACargar);
    guardarUsuariosEnStorage(arrayDeStorage);
  }

  function presionaboton() {


    if (!ExtisteListaUsuarioEnElStorage()) {
      crearListaDeUsuario()
    }



    let nuevousuario = new Usuario({
      nombre: nombre.value,
      apellido: apellido.value,
      email: email.value,
      password: contraseña.value
    });




    cargarNuevoUsuario(nuevousuario);


  }

  function validardatos() {
    if (nombre.val().length == 0 || apellido.val().length == 0 || email.val().length == 0 || contraseña.val().length == 0) {
      mensaje.text("Falto rellenar un campo");
      mensaje.addClass("mensaje_incorrecto");

      nombre.addClass("is-invalid");
      apellido.addClass("is-invalid");
      email.addClass("is-invalid");
      contraseña.addClass("is-invalid");
    }
    else {

      mensaje.text("Sus datos se guardaron con exito");
      mensaje.addClass("mensaje_correcto");
      nombre.addClass("is-valid");
      apellido.addClass("is-valid");
      email.addClass("is-valid");
      contraseña.addClass("is-valid");



    }
  }



  const nombre = $("#nombre");
  const apellido = $("#apellido")
  const email = $("#email");
  const contraseña = $("#password");
  const mensaje = $("#mensajeregistro")
  const botoncargar = $("#botonregistro");


  botoncargar.click(presionaboton);
  botoncargar.click(validardatos)



})