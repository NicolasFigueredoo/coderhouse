$(document).ready(() => {

  const imprimirproductos = (producto) => {
    $("#content").append(`
<div class="col">
      <div class="card h-100">
        <img src="../img/${producto.img} " class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.edicion} </h5>
          <p class="card-text-producto"> ${producto.nombre} </p>
          <div class="card-text-genero">${producto.genero} </div>
          <p class="card-text-precio"> $${producto.precio}</p>
                      <button ${producto.id}  class="buybtn">Buy</button>

        </div>
      </div>
    </div>
`)
  }

  const animacioncontenido = () => {
    $("#content").animate({
      width: "2500px",
      transition: "0.5s"

    })
  }

  const imprimirproductosfiltrados = (misproductos, categoria) => {

    const cardsId = $("#content");
    cardsId.html("");

    if (categoria == "INICIO") {
      for (let producto of misproductos) {
        imprimirproductos(producto);
      }


    } else {
      const productosfiltrados = misproductos.filter(dato => dato.producto === categoria);
      productosfiltrados.forEach(dato => {
        imprimirproductos(dato);
      });
    }

    $(".compra").css("height", "1070px")
    animacioncontenido()
  }

  const imprimirnuevosproductos = (misproductos) => {
    const cardsId = $("#content");
    cardsId.html("");

    const productonew = misproductos.filter((dato) => {
      if (dato.clase == "new") {
        return true
      }

      else {
        return false
      }
    })


    productonew.forEach((dato) => {
      imprimirproductos(dato)
    })

    $(".compra").css("height", "3800px")
    animacioncontenido()

  }

  const imprimirnuevosproductosmen = (misproductos, buscador) => {
    const cardsId = $("#content");
    cardsId.html("");

    const productonew = misproductos.filter((dato) => {
      if (dato.categoria == buscador) {
        return true
      }

      else {
        return false
      }
    })


    productonew.forEach((dato) => {
      imprimirproductos(dato)
    })

    $(".compra").css("height", "2700px")
    if (buscador == "women") {
      $(".compra").css("height", "1600px")

    }
    animacioncontenido()

  }

  const data = [
    {
      "producto": "Tshirt",
      "id": 1,
      "categoria": "men",
      "clase": "new",
      "edicion": "Sustainable Materials",
      "nombre": "Nike Sportswear Sport Essentials+",
      "precio": 130,
      "genero": "Men's Semi-Brushed Crew",
      "img": "NikeSportswearSportEssentials.jpg"
    },
    {
      "producto": "Tshirt",
      "id": 2,
      "categoria": "women",
      "clase": "new",
      "edicion": "Just In",
      "nombre": "Nike Sportswear Essential",
      "precio": 65,
      "genero": "Women's Fleece Pullover",
      "img": "NikeSportswearEssential.jpg"
    },
    {
      "producto": "Tshirt",
      "id": 3,
      "clase": "new",
      "categoria": "men",
      "edicion": "Just In",
      "nombre": "Giannis 'Freak'",
      "precio": 85,
      "genero": "Men's French Terry Pullover",
      "img": "sportswearclubmenspulloverhoodie.jpg"
    },
    {
      "producto": "Tshirt",
      "id": 4,
      "clase": "new",
      "categoria": "men",
      "edicion": "Just In",
      "nombre": "Nike Sportswear Club",
      "precio": 40,
      "genero": "Men's Premium Basketball",
      "img": "GiannisFreak.jpg"
    },
    {
      "producto": "Tshirt",
      "id": 5,
      "clase": "new",
      "categoria": "men",
      "edicion": "Just In",
      "nombre": "Nike ACG",
      "precio": 40,
      "genero": "Men's Short-Sleeve T-Shirt",
      "img": "NikeAcg.jpg"
    },
    {
      "producto": "Tshirt",
      "id": 6,
      "clase": "new",
      "categoria": "women",
      "edicion": "Sustainable Materials",
      "nombre": "Nike Dri-FIT One Luxe",
      "precio": 45,
      "genero": "Women's Standard Fit Tank",
      "img": "driwomensstandard.jpg"
    },
    {
      "producto": "Shoes",
      "id": 7,
      "clase": "new",
      "categoria": "men",
      "edicion": "Sustainable Materials",
      "nombre": "Nike air max 90",
      "precio": 130,
      "genero": "Men's Shoes",
      "img": "nikearimax90.jpg"
    },
    {
      "producto": "Shoes",
      "id": 8,
      "clase": "new",
      "categoria": "men",
      "edicion": "Just In",
      "nombre": "Nike AF 1/1",
      "precio": 140,
      "genero": "Men's Shoes",
      "img": "NikeAf.jpg"
    },
    {
      "producto": "Shoes",
      "id": 9,
      "clase": "new",
      "categoria": "women",
      "edicion": "Just In",
      "nombre": "Air Jordan 1 Mid",
      "precio": 120,
      "genero": "Women's Shoes",
      "img": "Airjordan1mid.jpg"
    },
    {
      "producto": "Shoes",
      "id": 10,
      "clase": "new",
      "categoria": "men",
      "edicion": "Sustainable Materials",
      "nombre": "Nike Air Vapormax 2021 FK",
      "precio": 200,
      "genero": "Men's Shoes",
      "img": "airvapormax2021.jpg"
    },
    {
      "producto": "Shoes",
      "id": 11,
      "clase": "new",
      "categoria": "men",
      "edicion": "Exclusively on SNKRS",
      "nombre": "Nike Space Hippie 01",
      "precio": 130,
      "genero": "Men's Shoes",
      "img": "nikespace.jpg"
    },
    {
      "producto": "Shoes",
      "id": 12,
      "clase": "new",
      "categoria": "women",
      "edicion": "Coming Soon",
      "nombre": "Nike Air Force 1 '07 LX",
      "precio": 110,
      "genero": "Women's Shoes",
      "img": "nikeairforce.jpg"
    },
    {
      "producto": "Accesories",
      "id": 13,
      "categoria": "women",
      "edicion": "",
      "nombre": "Nike Sportswear",
      "precio": 28,
      "genero": "Women's Bucket Hat",
      "img": "sportswearwomens.jpg"
    },
    {
      "producto": "Accesories",
      "id": 14,
      "categoria": "women",
      "clase": "new",
      "edicion": "Just In",
      "nombre": "Nike Elemental",
      "precio": 40,
      "genero": "Backpack",
      "img": "nikelement.jpg"
    },
    {
      "producto": "Accesories",
      "id": 15,
      "categoria": "men",
      "edicion": "",
      "nombre": "Nike AeroBill Classic 99",
      "precio": 28,
      "genero": "Hat",
      "img": "aerobillclassic99.jpg"
    },
    {
      "producto": "Accesories",
      "id": 16,
      "categoria": "women",
      "clase": "new",
      "edicion": "Just In",
      "nombre": "KD",
      "precio": 90,
      "genero": "Basketball Backpack",
      "img": "kd-basketballbackpack.jpg"
    },
    {
      "producto": "Accesories",
      "id": 17,
      "categoria": "men",
      "clase": "new",
      "edicion": "Sold Out",
      "nombre": "Nike Classic",
      "precio": 30,
      "genero": "Backpack",
      "img": "classicbackpack.jpg"
    },
    {
      "producto": "Accesories",
      "id": 18,
      "categoria": "women",
      "clase": "new",
      "edicion": "Sustainable Materials",
      "nombre": "Nike One Club",
      "precio": 65,
      "genero": "Women's Training Duffel Bag",
      "img": "oneclub.jpg"
    },
    {
      "producto": "Pants",
      "id": 19,
      "categoria": "men",
      "edicion": "",
      "nombre": "Nike Sportswear Swoosh",
      "precio": 80,
      "genero": "Men's Semi-Brushed Back Pants",
      "img": "sportswearswoosh.jpg"
    },
    {
      "producto": "Pants",
      "id": 20,
      "categoria": "women",
      "clase": "new",
      "edicion": "Sustainable Materials",
      "nombre": "Nike Sportswear KP",
      "precio": 40,
      "genero": "Men's (Boys') Pants",
      "img": "sportswearbigboys.jpg"
    },
    {
      "producto": "Pants",
      "id": 21,
      "categoria": "Women",
      "clase": "new",
      "edicion": "Sustainable Materials",
      "nombre": "Nike Pro Dri-FIT",
      "precio": 32,
      "genero": "Women's 3/4 Tights",
      "img": "pro-dri-fit-women.jpg"
    },
    {
      "producto": "Pants",
      "id": 22,
      "categoria": "Women",
      "clase": "new",
      "edicion": "Just In",
      "nombre": "Nike Sportswear",
      "precio": 85,
      "genero": "Women's Easy Woven Pants",
      "img": "sportswearwomens-easy.jpg"
    },
    {
      "producto": "Pants",
      "id": 23,
      "categoria": "men",
      "clase": "new",
      "edicion": "Sustainable Materials",
      "nombre": "NikeCourt",
      "precio": 70,
      "genero": "Men's Tennis Pants",
      "img": "nikecourt.jpg"
    },
    {
      "producto": "Pants",
      "id": 24,
      "categoria": "men",
      "edicion": "",
      "nombre": "Jordan Dri-FIT Air",
      "precio": 90,
      "genero": "Men's Pants",
      "img": "jordan-dri-fit-air.jpg"
    }
  ]

  const botonwomen = $("#women")
  botonwomen.click(() => { imprimirnuevosproductosmen(data, "women") })

  const botonmen = $("#men");
  botonmen.click(() => { imprimirnuevosproductosmen(data, "men") })

  const seccionNewReleases = $("#seccionNewReleases")
  seccionNewReleases.click(() => { imprimirnuevosproductos(data) })

  const botonNewReleases = $("#newproductos");
  botonNewReleases.click(() => { imprimirnuevosproductos(data) })

  const botonshoesseccion = $("#shoesseccion");
  botonshoesseccion.click(() => { imprimirproductosfiltrados(data, "Shoes") },);

  const botonshirt = $("#shirt");
  botonshirt.click(() => { imprimirproductosfiltrados(data, "Tshirt") },);

  const botonshoes = $("#shoes");
  botonshoes.click(() => { imprimirproductosfiltrados(data, "Shoes") });

  const botonpants = $("#pants");
  botonpants.click(() => { imprimirproductosfiltrados(data, "Pants") });

  const botonAccessories = $("#Accessories");
  botonAccessories.click(() => { imprimirproductosfiltrados(data, "Accesories") });

  imprimirnuevosproductos(data)

  //CARRITO




  const agregarAlCarrito = (producto) => {


    let html = `
<div class="col">
      <div class="card h-100">
        <img src="../img/${producto.img} " class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.edicion} </h5>
          <p class="card-text-producto"> ${producto.nombre} </p>
          <div class="card-text-genero">${producto.genero} </div>
          <p class="card-text-precio"> $${producto.precio}</p>

        </div>
      </div>
    </div>
`;

    $("#carrito").append(html)
  }


  $(".buybtn").click((event) => {
    const nodoPadre = $(event.target).parent()
    const nodoHijos = nodoPadre.children()
    agregarAlCarrito({
      id: nodoHijos[3].id,
      edicion: nodoHijos[0].innerHTML,
      nombre: nodoHijos[1].innerHTML,
      precio: nodoHijos[2].innerHTML,
      genero: nodoHijos[3].innerHTML,
    })
  })


})


