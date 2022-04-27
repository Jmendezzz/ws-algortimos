"use strict";
const botonHuevos= document.getElementById("boton-huevos");
const botonLeche= document.getElementById("boton-leche");
const botonPan= document.getElementById("boton-pan");
const botonFrutas= document.getElementById("boton-frutas");
const cantidadHuevos=document.getElementById("cantidad-huevos");
const cantidadLeche=document.getElementById("cantidad-leche");
const cantidadPan=document.getElementById("cantidad-pan");
const cantidadFrutas=document.getElementById("cantidad-frutas");
const  botonPagar=document.getElementById("boton-pagar");
const descuentoBoton = document.querySelector(".button__bono");
const countCarro = document.getElementById("carro-count")

let intento=true;
function descuento(){
    if(intento==true){
        let desc=Math.random()*100;
        desc=Math.round(desc);
        alert(`Felicidades tienes un descuento del ${desc}%`)
        intento=false;
        desc=desc/100;
        return desc;
    }else
    alert("Usted ya canjeó su descuento! O intento pagar sin aplicar el descuento");
}

let numDesc=0;

descuentoBoton.addEventListener("click",()=>{

    numDesc=descuento();

});

let arrayPrecios=[15000,35000,2000,5000];
let arrayProductos=[30,20,50,50];
cantidadHuevos.innerHTML=arrayProductos[0];
cantidadLeche.innerHTML=arrayProductos[1];
cantidadPan.innerHTML=arrayProductos[2];
cantidadFrutas.innerHTML=arrayProductos[3];
let totPagar=0;
let contCompras=0;
countCarro.innerHTML=`:${contCompras}`;
console.log(totPagar);

function getValues(num,arrayProductos,arrayPrecios){
    arrayProductos[num]=arrayProductos[num]-1;
    totPagar=totPagar+arrayPrecios[num];
    contCompras++;
}
function pushHTML(num){
    switch(num){
        case 0:
            countCarro.innerHTML=`:${contCompras}`;
            cantidadHuevos.innerHTML=arrayProductos[0];
            break;
        case 1:
            countCarro.innerHTML=`:${contCompras}`;
            cantidadLeche.innerHTML=arrayProductos[1];
            break;
        case 2:
            countCarro.innerHTML=`:${contCompras}`;
            cantidadPan.innerHTML=arrayProductos[2];
            break;
        case 3:
            countCarro.innerHTML=`:${contCompras}`;
            cantidadFrutas.innerHTML=arrayProductos[3];
            break;
    }
        
}
function comprarProducto(num,arrayProductos,arrayPrecios){
    if(num==0){

        if(arrayProductos[0]>0){
            getValues(num,arrayProductos,arrayPrecios);
            pushHTML(num);
        }else cantidadHuevos.innerHTML="Producto Agotado"}
        
    else if(num==1){
        if(arrayProductos[1]>0){
            getValues(num,arrayProductos,arrayPrecios);
            pushHTML(num);
        }else cantidadLeche.innerHTML="Producto Agotado"}
        
    else if(num==2){
        if(arrayProductos[2]>0){
            getValues(num,arrayProductos,arrayPrecios);
            pushHTML(num);
        }else cantidadPan.innerHTML="Porducto Agotado"}
 
    else if(num==3){
        if(arrayProductos[3]>0){
            getValues(num,arrayProductos,arrayPrecios);
            pushHTML(num);
        }else cantidadFrutas.innerHTML="Producto Agotado"}
    }


botonHuevos.onclick=function(){
    comprarProducto(0,arrayProductos,arrayPrecios);
}
botonLeche.onclick=function(){
    comprarProducto(1,arrayProductos,arrayPrecios);
}
botonPan.onclick=function(){
    comprarProducto(2,arrayProductos,arrayPrecios);
}
botonFrutas.onclick=function(){
    comprarProducto(3,arrayProductos,arrayPrecios);
}

botonPagar.onclick=function(){
    if(numDesc==0 && totPagar>0){
        alert(`Usted no canjeó el descuento por lo tanto tendra que pagar ${totPagar}`)
        intento=false;
    }else if (numDesc>0 && totPagar>0){
        let descuentoTotal=totPagar*numDesc;
        totPagar=totPagar-descuentoTotal;
        totPagar=Math.round(totPagar);
        alert(`Gracias al descuento del ${descuentoTotal} solo tendras que pagar ${totPagar}`);
    }else alert("Usted no ha comprado nada!");
}


