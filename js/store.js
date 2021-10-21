const catalogo = document.getElementById("product-container")

$.get('../stock.json', (res) => {
    stock = res
    stock.forEach((producto, indice) => {
        const div = document.createElement("div")
        div.className = "product"
        div.innerHTML = `
                          <img src="${producto.img}"/>
                          <p>${producto.nombre} ${producto.cantidadML}ML</p>
                          <p>$${producto.precio}</p>
                          <button class="buy-btn" onClick="addToCart(${indice})" >Agregar al carrito</button>
                          `
        catalogo.appendChild(div)
    })
}) 

let cart = []

const addToCart = (indiceDelProducto) => {
    cart.push(stock[indiceDelProducto])
    actualizarCarrito()
    carritoStorage()
};

const abrirCarrito = document.getElementById("open-cart");
const cerrarCarrito = document.getElementById("close-cart");
const carritoContainer = document.getElementsByClassName("cart-container")[0]

abrirCarrito.addEventListener("click", () => {
    carritoContainer.classList.add("cart-opened")
})

cerrarCarrito.addEventListener("click", () => {
    carritoContainer.classList.remove("cart-opened")
})

const selectedProducts = document.getElementById("cartProducts")

const actualizarCarrito = () => {
    selectedProducts.innerHTML = "";
    cart.forEach((product, index) => {
        const div = document.createElement("div");
        div.className = "selected-product"
        div.innerHTML = `
                          <img src="${product.img}"/>
                          <div class="product-details">
                            <p>${product.nombre} ${product.cantidadML}ML</p>
                            <p>$${product.precio}</p>
                          </div>
                          <button id="remove-product" onClick="removeProduct(${index})">Eliminar producto</button>
                          `
        selectedProducts.appendChild(div)
    })
    carritoStorage()
}

const removeProduct = (i) => {
    cart.splice(i, 1)
    actualizarCarrito()
}

const carritoStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(cart))
}

const loadStorage = () => {
    if (localStorage.getItem("carrito")) {
      cart = JSON.parse(localStorage.getItem("carrito"))
      actualizarCarrito()
    }
}

loadStorage()

$('#buy').click(() => {
    $('.cart-container').removeClass("cart-opened")
    $('.detallesCompraContainer').addClass("detallesCompraAbierto")
})

$('#cerrarDetalles').click(() => {
    $('.detallesCompraContainer').removeClass("detallesCompraAbierto")
})