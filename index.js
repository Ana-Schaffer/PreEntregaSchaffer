// LISTA DE PRODUCTOS
const productos = [
    {nombre: "proteina", precio: 3000 },
    {nombre: "creatina", precio: 2000 },
    {nombre: "barrita", precio: 300 },
    {nombre: "energizante", precio: 500 },
    {nombre: "vitaminas", precio: 3000 },
];

let carrito =[]

let seleccion = prompt("hola desea comprar algun producto si o no") //variable global

while(seleccion != "si" && seleccion != "no") {
    alert("por favor ingresa si o no")
    seleccion = prompt("hola desea comprar algo si o no")
}

if(seleccion == "si"){
    alert("a continuación nuestra lista de productos")
    let todoslosProductos = productos.map((producto) => producto.nombre + "  " + producto.precio + "$")
    alert(todoslosProductos.join(" _ "))
} else if (seleccion == "no") {
    alert("gracias por visitarnos, hasta pronto!")
}

while(seleccion != "no") {
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0

    if(producto == "proteina" || producto == "creatina" || producto == "barrita" || producto == "energizante" || producto == "vitaminas"){
        switch (producto) {
            case "proteina":
                precio = 3000;
                break;
            case "creatina":
                precio = 2000;
                break;
            case "barrita":
                precio = 300;
                break;
            case "energizante":
                precio = 500;
                break;
            case "vitaminas":
                precio = 3000;
                break;
            default:
            break;
        }
        let unidades = parseInt(prompt("cuantas unidades desea comprar"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else {
        alert("no tenemos ese producto")
    }
    
        seleccion = prompt("desea seguir comprando?")

        while(seleccion === "no"){
        alert("gracias por su compra!")
        carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

//TOTAL A PAGAR INFO POR CONSOLA
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`)