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
let intento=true;
function descuento(){
    if(intento==true){
        let desc=Math.random()*100;
        desc=Math.round(desc);
        alert(`Felicidades tienes un descuento del ${desc}%`)
        intento=false;
        return desc;
    }else
    alert("Usted ya canjeó su descuento!")
    
}
let numDesc=descuento();
descuentoBoton.addEventListener("click",descuento);
let arrayPrecios=[15000,35000,2000,5000]
let arrayProductos=[30,20,50,50];
cantidadHuevos.innerHTML=arrayProductos[0];
cantidadLeche.innerHTML=arrayProductos[1];
cantidadPan.innerHTML=arrayProductos[2];
cantidadFrutas.innerHTML=arrayProductos[3];
let totPagar=0;

function comprarHuevos(arrayProductos,arrayPrecios){
    if(arrayProductos[0]>0){
        arrayProductos[0]=arrayProductos[0]-1;
        totPagar=totPagar+arrayPrecios[0];
        cantidadHuevos.innerHTML=arrayProductos[0];
    }else cantidadHuevos.innerHTML="Producto agotado";
   
}
function comprarLeche(arrayProductos,arrayPrecios){
    if(arrayProductos[1]>0){
        arrayProductos[1]=arrayProductos[1]-1;
        totPagar=totPagar+arrayPrecios[1];
        cantidadLeche.innerHTML=arrayProductos[1];
    }else cantidadLeche.innerHTML="Producto agotado";
 
    
}


// botonHuevos.addEventListener("click",comprarHuevos(arrayProductos,arrayPrecios,totPagar));
botonHuevos.onclick=function(){
    comprarHuevos(arrayProductos,arrayPrecios,totPagar);
}
botonLeche.onclick=function(){
    comprarLeche(arrayProductos,arrayPrecios);
}
botonPagar.onclick=function(){
    alert(`total a pagar ${totPagar}`);
}
