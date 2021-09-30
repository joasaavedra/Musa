const stock = [
    {
        nombre: "SMALL TALK MINI",
        cantidadML: 125,
        precio: 2023,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/257/575/products/minismall1-c5e71914a72c37e23d15937448543686-320-0.jpg"
    },
    {
        nombre: "CONTROL FREAK",
        cantidadML: 250,
        precio: 3.225,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/257/575/products/cf1-52b536c2d2b482939015937452577994-320-0.jpg"
    },
    {
        nombre: "BEACH BOUND PROTECTIONS",
        cantidadML: 100,
        precio: 3.514,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/257/575/products/beachbound1-51700cbd440b0fd6e715937455280062-320-0.jpg"
    },
    {
        nombre: "BEACH FREAK DETANGLER",
        cantidadML: 100,
        precio: 3.511,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/257/575/products/beachfreak1-9dd4b5f03dcd30dbe815937454322161-320-0.jpg"
    },
    {
        nombre: "ELASTICATE ACONDICIONADOR",
        cantidadML: 200,
        precio: 2.425,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/257/575/products/elasticateac1-e189ad6feb37c588dd15937438267037-320-0.jpg"
    },
    {
        nombre: "FOXY CURLS",
        cantidadML: 200,
        precio: 3.225,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/257/575/products/foxy1-54556f9fe10078a84015937453749231-320-0.jpg"
    },
    {
        nombre: "RECHARGE ACONDICIONADOR",
        cantidadML: 200,
        precio: 2.425,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/257/575/products/rechargeac1-37daabd0c97f7844b215937436283525-320-0.jpg"
    },
    {
        nombre: "AFTER PARTY",
        cantidadML: 100,
        precio: 3.812,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/257/575/products/after-party1-0dcc0aac81c0c3f50215937443155331-320-0.jpg"
    },
    {
        nombre: "HEADRUSH",
        cantidadML: 200,
        precio: 3.386,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/257/575/products/headrush1-3ea2fa37ba8f40b0f815937445074186-320-0.jpg"
    }
]

const catalogo = document.getElementById("product-container")

stock.forEach((producto, indice) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
                      <img src="${producto.img}"/>
                      <p>${producto.nombre} ${producto.cantidadML}ML</p>
                      <p>$${producto.precio}</p>
                      <button class="buy-btn" onClick="addToCart(${indice})" >Agregar al carrito</button>
                      `;
    catalogo.appendChild(div);
  });
  
  let cart = [];
  
  addToCart = (indiceDelProducto) => {
    cart.push(stock[indiceDelProducto]);
    console.log(cart);
  };