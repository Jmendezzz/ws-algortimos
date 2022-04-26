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
    alert("Usted ya canjeó su descuento!");
    
}
let numDesc;

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

function comprarHuevos(arrayProductos,arrayPrecios){
    if(arrayProductos[0]>0){
        arrayProductos[0]=arrayProductos[0]-1;
        totPagar=totPagar+arrayPrecios[0];
        contCompras++;
        countCarro.innerHTML=`:${contCompras}`;
        cantidadHuevos.innerHTML=arrayProductos[0];
    }else cantidadHuevos.innerHTML="Producto agotado";
}
function comprarLeche(arrayProductos,arrayPrecios){
    if(arrayProductos[1]>0){
        arrayProductos[1]=arrayProductos[1]-1;
        totPagar=totPagar+arrayPrecios[1];
        contCompras++;
        countCarro.innerHTML=`:${contCompras}`;
        cantidadLeche.innerHTML=arrayProductos[1];
    }else cantidadLeche.innerHTML="Producto agotado";
}

function comprarPan(arrayProductos,arrayPrecios){
    if(arrayProductos[2]>0){
        arrayProductos[2]=arrayProductos[2]-1;
        totPagar=totPagar+arrayPrecios[2];
        contCompras++;
        countCarro.innerHTML=`:${contCompras}`;
        cantidadPan.innerHTML=arrayProductos[2];
    }else cantidadPan.innerHTML="Producto agotado";
}

function comprarFrutas(arrayProductos,arrayPrecios){
    if(arrayProductos[3]>0){
        arrayProductos[3]=arrayProductos[3]-1;
        totPagar=totPagar+arrayPrecios[3];
        contCompras++;
        countCarro.innerHTML=`:${contCompras}`;
        cantidadFrutas.innerHTML=arrayProductos[3];
    }else cantidadFrutas.innerHTML="Producto agotado";
}

botonHuevos.onclick=function(){
    comprarHuevos(arrayProductos,arrayPrecios);
}
botonLeche.onclick=function(){
    comprarLeche(arrayProductos,arrayPrecios);
}
botonPan.onclick=function(){
    comprarPan(arrayProductos,arrayPrecios);
}
botonFrutas.onclick=function(){
    comprarFrutas(arrayProductos,arrayPrecios);
}

botonPagar.onclick=function(){
    if(totPagar>0){
        let descuentoTotal=totPagar*numDesc;
        totPagar=totPagar-descuentoTotal;
        totPagar=Math.round(totPagar);
        alert(`Gracias al descuento del ${descuentoTotal} solo tendras que pagar ${totPagar}`);
    }else alert("Usted no ha comprado nada!");
}


