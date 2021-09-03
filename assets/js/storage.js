
function obtenerUsuariosDeStorage() {
  let listadeusuariosstorage = [];
  if (localStorage.getItem("usuarios") != null) {
    listadeusuariosstorage = JSON.parse(localStorage.getItem("usuarios"));
  }

  return listadeusuariosstorage;
}