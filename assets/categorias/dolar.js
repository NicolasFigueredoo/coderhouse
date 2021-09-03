$(document).ready(() => {


  const URLDOLAR = "./datos.json";




  const imprimir = (dato) => {
    $(".secciones").append(`
    <ul class="secciondolar">
    <li id="nombredolar">${dato.nombre}</li>
     <li id="compradolar">Compra ${dato.compra}</li>
      <li id="ventadolar">venta ${dato.venta}</li>
    </ul>
       

  
          `)
  }

  $.getJSON(URLDOLAR, (datos) => {


    const filtrardolar = datos.filter((dato) => {


      if (dato.ventaCero == "TRUE") {
        return true
      }

      return false
    }

    )

    filtrardolar.forEach(dato => {
      imprimir(dato)
    });




  })


}

)