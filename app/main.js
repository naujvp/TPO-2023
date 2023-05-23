const productos = [
    {
        id: "indumentaria-1",
        titulo: "Alpargata",
        imagen: "../assets/indumentaria/alpargata.jpg",
        precio: 1000,
        catnombre: "Indumentaria",
        catid: "indumentaria"
        
    },
    {
        id: "indumentaria-2",
        titulo: "Alpargata 2",
        imagen: "../assets/indumentaria/alpargata2.jpg",
        precio: 1000,
        catnombr: "Indumentaria",
        catid: "indumentaria"
    },
    {
        id: "indumentaria-3",
        titulo: "Bombacha",
        imagen: "../assets/indumentaria/bombacha.jpg",
        precio: 1000,
        catnombre: "Indumentaria",
        catid: "indumentaria"
    },
    {
        id: "indumentaria-4",
        titulo: "Bombacha 2",
        imagen: "../assets/indumentaria/bombacha2.jpg",
        precio: 1000,
        catnombre: "Indumentaria",
        catid: "indumentaria"
    },
    {
        id: "indumentaria-5",
        titulo: "Poncho",
        imagen: "../assets/indumentaria/poncho.jpg",
        precio: 1000,
        catnombre: "Indumentaria",
        catid: "indumentaria"
    },
    {
        id: "indumentaria-6",
        titulo: "Poncho 2",
        imagen: "../assets/indumentaria/poncho2.jpg",
        precio: 1000,
        catnombre: "Indumentaria",
        catid: "indumentaria"
    },


    {
        id: "gastronomia-1",
        titulo: "Alfajor de maicena",
        imagen: "../assets/gastronomia/alfajor-maicena.png",
        precio: 2000,
        catnombre: "Gastronomia",
        catid: "gastronomia"
    }
    ,
    
    {
        id: "gastronomia-2",
        titulo: "Alfajor negro",
        imagen: "../assets/gastronomia/alfajor-chocolate.jpg",
        precio: 2000,
        catnombre: "Gastronomia",
        catid: "gastronomia"
    }
    ,
    {
        id: "gastronomia-3",
        titulo: "Aceitunas",
        imagen: "../assets/gastronomia/aceitunas.jpg",
        precio: 2000,
        catnombre: "Gastronomia",
        catid: "gastronomia"
    },
    {
        id: "gastronomia-4",
        titulo: "Mermelada Frutilla",
        imagen: "../assets/gastronomia/mermelada-frutilla.jpg",
        precio: 2000,
        catnombre: "Gastronomia",
        catid: "gastronomia"
    },
    {
        id: "gastronomia-5",
        titulo: "Mermelada Naranja",
        imagen: "../assets/gastronomia/mermelada-naranja.jpg",
        precio: 2000,
        catnombre: "Gastronomia",
        catid: "gastronomia"
    },
    {
        id: "gastronomia-6",
        titulo: "Yerba",
        imagen: "../assets/gastronomia/yerba.jpg",
        precio: 2000,
        catnombre: "Gastronomia",
        catid: "gastronomia"
    },

    {
        id: "instrumento-1",
        titulo: "Guitarra",
        imagen: "../assets/instrumentos/guitarra1.jpg",
        precio: 3000,
        catnombre: "Instrumentos",
        catid: "instrumentos"
    },

    {
        id: "instrumento-2",
        titulo: "Guitarra",
        imagen: "../assets/instrumentos/guitarra2.jpg",
        precio: 3000,
        catnombre: "Instrumentos",
        catid: "instrumentos"
    },
    {
        id: "instrumento-3",
        titulo: "Acordeon",
        imagen: "../assets/instrumentos/acordeon.jpg",
        precio: 3000,
        catnombre: "Instrumentos",
        catid: "instrumentos"
    },
    {
        id: "instrumento-4",
        titulo: "Acordeon rojo",
        imagen: "../assets/instrumentos/acordeon2.jpg",
        precio: 3000,
        catnombre: "Instrumentos",
        catid: "instrumentos"
    },
    {
        id: "instrumento-5",
        titulo: "Flauta",
        imagen: "../assets/instrumentos/flauta.jpg",
        precio: 3000,
        catnombre: "Instrumentos",
        catid: "instrumentos"
    },
    {
        id: "instrumento-6",
        titulo: "Bombo",
        imagen: "../assets/instrumentos/bombo.jpg",
        precio: 3000,
        catnombre: "Instrumentos",
        catid: "instrumentos"
    }
];

console.log(productos);


function mostrarProductos(productoCategorizado) {
     
    productoCategorizado.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        
        contenedorProductos.append(div);
        actualizarBotonesAgregar();
      
    })

    
}


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".nav-sombreado");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

const boton1= document.getElementById("#indumentaria");
console.log(boton1)
localStorage.setItem("boton", JSON.stringify(boton1));


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
      
        const productoCategoria = productos.filter( producto => producto.catid === e.currentTarget.id );
          console.log(productoCategoria);
        localStorage.setItem("productos-categorizados", JSON.stringify(productoCategoria));
        
    })
    
});

let productoCat = localStorage.getItem("productos-categorizados");
        productoCat = JSON.parse(productoCat);  
        console.log(productoCat);


mostrarProductos(productoCat);    
 
function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
   

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}


