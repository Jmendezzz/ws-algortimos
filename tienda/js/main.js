class Producto {
    constructor(categoria, nombre, cantidad, precio) {
        this.categoria = categoria;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

//!BOTONES
const agregarP = document.querySelectorAll(".botones")[0]; const agregar = document.querySelectorAll(".botones")[1]; const agregarF = document.querySelectorAll(".botones")[2];

const getValues = () => {
    let categoria = document.querySelectorAll(".form-item")[0].value;
    let productoName = document.querySelectorAll(".form-item")[1].value;
    let cantidad = document.querySelectorAll(".form-item")[2].value;
    cantidad= parseInt(cantidad);
    let precio = document.querySelectorAll(".form-item")[3].value;
    precio=parseInt(precio);
    let producto = new Producto(categoria, productoName, cantidad, precio);
    return producto;
}
const clearInputs = () => {
    document.querySelectorAll(".form-item")[0].value = document.querySelectorAll("option")[0].value;
    document.querySelectorAll(".form-item")[1].value = "";
    document.querySelectorAll(".form-item")[2].value = "";
    document.querySelectorAll(".form-item")[3].value = "";

}
let cont = 0;
const contProductos = () => {

    cont++;
    document.getElementById("contador").innerHTML = cont;

}
const precioTotal = ()=>{
    const span = document.getElementById("valor-total");
    let total=0;
    arrayInfo.forEach(object=>{

        total = object.precio+total;

    })
    span.innerHTML=total;
}
//! ARREGLO
let arrayInfo = [];
//!EVENTO EN BOTON DE AGREGAR PRIMERO ITEM AL INICIO
agregarP.addEventListener("click", () => {
    if (document.querySelectorAll(".form-item")[0].value != document.querySelectorAll("option")[0].value && document.querySelectorAll(".form-item")[1].value != null && document.querySelectorAll(".form-item")[2].value != null && document.querySelectorAll(".form-item")[3].value != null) {
        let producto = getValues();

        arrayInfo.unshift(producto);

        clearInputs();

        contProductos();

        

        precioTotal();

        mostrarInventario();

    } else alert("Complete todos los campos!")

})

//!EVENTO DE AGREGAR ITEM
agregar.addEventListener("click", () => {
    if (document.querySelectorAll(".form-item")[0].value != document.querySelectorAll("option")[0].value && document.querySelectorAll(".form-item")[1].value != null && document.querySelectorAll(".form-item")[2].value != null && document.querySelectorAll(".form-item")[3].value != null) {
        let producto = getValues();

        arrayInfo.push(producto);

        clearInputs();

        contProductos();

       

        precioTotal();

        

        mostrarInventario();

    } else alert("Complete todos los campos!")

})
//! AGREGAR AL FINAL
agregarF.addEventListener("click", () => {
    if (document.querySelectorAll(".form-item")[0].value != document.querySelectorAll("option")[0].value && document.querySelectorAll(".form-item")[1].value != null && document.querySelectorAll(".form-item")[2].value != null && document.querySelectorAll(".form-item")[3].value != null) {
        let producto = getValues();

        arrayInfo.push(producto);

        clearInputs();

        contProductos();

        precioTotal();

        

        mostrarInventario();

    } else alert("Complete todos los campos!");

})

//!BUSCADOR

const buscador = document.getElementById("buscador");

buscador.addEventListener("click", () => {

    let elementoBuscado = document.getElementById("encontrar").value;

    let band=true;
    arrayInfo.forEach((element) => {
        if (element.nombre == elementoBuscado) {

            alert(`El producto "${elementoBuscado}" se encontró exitosamente`);
            
            band=false;
        }

    });
    if(band==true){

        alert(`El producto "${elementoBuscado}" no se encontró`);
    }

});


//!PRODUCTOS POR CATEGORÍA

const botonCategoria = document.getElementById("boton-informe-categorias");

botonCategoria.addEventListener("click",()=>{

    const categoria=document.getElementById("productos-categoria").value;
    if(categoria==document.querySelectorAll(".form-item")[0].value){

        alert("Seleccione una categoría válida")
    }else{
        let cont=0;
    arrayInfo.forEach(object=>{

        if(object.categoria==categoria){
            cont++;
        }    
    })
    cont >0 ? alert(`La categoría ${categoria} tiene ${cont} productos`) : alert(`La categoría ${categoria} no dispone de productos!`);
    }
    
});

//!INVENTARIO


const container = document.getElementById("inventario-container");
let contador=0;
const mostrarInventario = () => {
    let div = document.createElement("DIV");
    div.classList.add("test");
    
    for (let i of arrayInfo) {

        div.innerHTML = "";

        let li = document.createElement("LI");
        li.innerHTML = `Categoria: ${i.categoria}`;
        div.appendChild(li);

        let li2 = document.createElement("LI");
        li2.innerHTML = `Nombre: ${i.nombre}`;
        div.appendChild(li2);

        let li3 = document.createElement("LI");
        li3.innerHTML = `Cantidad: ${i.cantidad}`;
        div.appendChild(li3);

        let li4 = document.createElement("LI");
        li4.innerHTML = `Precio: ${i.precio}`;
        div.appendChild(li4);

        let divButtons = document.createElement("DIV");

        divButtons.classList.add("row-container");
        

        //!BOTON AÑADIR
        let buttonAdd =  document.createElement("IMG");
        buttonAdd.addEventListener("click",()=>{

            i.cantidad+=1;
            alert("Agregado correctamente!");
            li3.innerHTML=`Cantidad: ${i.cantidad}`;
        });

        buttonAdd.setAttribute("src","images/add.png");
        buttonAdd.setAttribute("class","add-buttons");
        
        buttonAdd.id=`add-${contador}`;
        
        //!BOTON REDUCIR
        let buttonDel = document.createElement("IMG");
        buttonDel.addEventListener("click",()=>{

            i.cantidad-=1;
            alert("Eliminado correctamente!");
            li3.innerHTML=`Cantidad: ${i.cantidad}`;
        });
        buttonDel.setAttribute("src","images/del.png");
        buttonDel.setAttribute("class","img-buttons");
        buttonDel.id=`del-${contador}`;

        //!BOTON REMOVER
        let pos=0;
        let buttonRemove = document.createElement("IMG");
        buttonRemove.addEventListener("click",()=>{
            let opcion = window.confirm("¿Esta seguro de eliminar este producto?");
            if (opcion==true){
                arrayInfo.splice(pos,pos+1);
                alert("Producto eliminado correctamente!");
                pos++;
                container.removeChild(div);
            }
           
        });
        buttonRemove.setAttribute("src","images/remove.png")
        buttonRemove.setAttribute("class","img-buttons")
        buttonRemove.id=`rem-${contador}`;
        contador++;
        
    
        divButtons.appendChild(buttonAdd);
        divButtons.appendChild(buttonDel);
        divButtons.appendChild(buttonRemove);
        container.appendChild(div);
        div.appendChild(divButtons);
    }
    
}

const ordenarBoton = document.getElementById("ordenar-boton");

ordenarBoton.addEventListener("click",()=>{

    arrayInfo.forEach(object=>{

        object.nombre.sort();
    })

})

if(localStorage.getItem("usuario")!=null){
    document.getElementById("p-bienvenida").innerHTML=`Bienvenid@ de nuevo ${localStorage.getItem("usuario")}`;
  }
  else{
    let nombre= prompt("Bienvenid@ ingrese nombre");
    localStorage.setItem("usuario",nombre);
  }

