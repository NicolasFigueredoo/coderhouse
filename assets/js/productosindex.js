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
    "id": 1,
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
    "id": 2,
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
    "id": 3,
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
    "id": 4,
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
    "id": 5,
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
    "id": 6,
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
    "id": 1,
    "categoria": "women",
    "edicion": "",
    "nombre": "Nike Sportswear",
    "precio": 28,
    "genero": "Women's Bucket Hat",
    "img": "sportswearwomens.jpg"
  },
  {
    "producto": "Accesories",
    "id": 2,
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
    "id": 3,
    "categoria": "men",
    "edicion": "",
    "nombre": "Nike AeroBill Classic 99",
    "precio": 28,
    "genero": "Hat",
    "img": "aerobillclassic99.jpg"
  },
  {
    "producto": "Accesories",
    "id": 4,
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
    "id": 5,
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
    "id": 6,
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
    "id": 1,
    "categoria": "men",
    "edicion": "",
    "nombre": "Nike Sportswear Swoosh",
    "precio": 80,
    "genero": "Men's Semi-Brushed Back Pants",
    "img": "sportswearswoosh.jpg"
  },
  {
    "producto": "Pants",
    "id": 2,
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
    "id": 3,
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
    "id": 4,
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
    "id": 5,
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
    "id": 6,
    "categoria": "men",
    "edicion": "",
    "nombre": "Jordan Dri-FIT Air",
    "precio": 90,
    "genero": "Men's Pants",
    "img": "jordan-dri-fit-air.jpg"
  }
]




const funcionproductos = (productos) => {
  productos.forEach(dato => {
    producto(dato)
  }
  )
  animacion()
}
const animacion = () => {
  $("#contenido").animate({
    marginLeft: "10px",
    transition: "5s"
  })
}

const producto = (elemento) => {
  $("#contenido").append(`
<div class="item">
<img id="productos" src="./assets/img/${elemento.img} " alt="#">
      <div>
      <h5 class="card-title">${elemento.edicion} </h5>

      </div>
    <div class="articleinfo">
      <h5 class="itemtitle">${elemento.nombre}</h5>
      <h5 class="itemprecio">$${elemento.precio}</h5>
    </div>  
    
      <p class="articlegenero">${elemento.genero}</p>
            <button class="buybtn">Buy</button>

  </div>
`)



}

funcionproductos(data)