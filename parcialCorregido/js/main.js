//!Boton nombres
const botonNombres = document.getElementById("boton-nombres");
//!Boton Notas
const botonNotas = document.getElementById("boton-notas");
//!Busqueda Estudiante
const botonBusqueda = document.getElementById("boton-busqueda");
//!Boton Promedio
const botonPromedio = document.getElementById("boton-promedio");
//!LISTA MODIFICABLE
const botonInformeTotal= document.getElementById("informe-total");
const contenedorLista = document.getElementById("contenedor-lista");

let arrayNames = [];
let arrayNotas = [];

//!EVENTO DE CLICK EN EL BOTON DE añadir
botonNombres.onclick=function(){
    const nombres = document.getElementById("input-nombres").value;
    arrayNames.push(nombres);
    //!PUSH arrayNames ["N"]
    document.getElementById("input-nombres").value = "";
    //!NOTAS
    let notas= document.getElementById("input-notas").value;
    notas = parseInt(notas);
    arrayNotas.push(notas);
    document.getElementById("input-notas").value = "";
  
}

//!EVENTO BOTON INFORME
const botonInforme = document.getElementById("boton-informe");
let mejorNota=0;
let contador=0;
let estudiantes=[];
botonInforme.onclick=function(){

    for(let i in arrayNotas){

        if (arrayNotas[i]>mejorNota){
            
            mejorNota=arrayNotas[i];
            
        }
    }

    for(let i in arrayNotas){

        if(arrayNotas[i]==mejorNota){
            contador++;
            estudiantes.push(arrayNames[i]);
        }
    }
    alert(`La mejor nota fue: ${mejorNota}, se obtuvo ${contador} veces por los estudiantes: ${estudiantes}`);
}
//!BOTON BUSQUEDA DE ESTUDIANTE

botonBusqueda.onclick=function(){

    const nombreEstudiante = document.getElementById("nombre-estudiante").value;
    
    let indice = arrayNames.indexOf(nombreEstudiante);

    if(indice!=-1){

        alert(`Se encontró el estudiante ${arrayNames[indice]} su nota fue: ${arrayNotas[indice]}`);

    }else alert(`No se encontró el estudiante "${nombreEstudiante}"!`)
}

//!BOTON PROMEDIO

botonPromedio.onclick=function(){

    let numDatos= arrayNotas.length;
    
    let sumatoria=0;
    
    for(let i of arrayNotas){

        sumatoria = sumatoria+i;
        
    }
    let promedio=sumatoria/numDatos;

    alert(`El promedio de la notas de los estudiantes fue: ${promedio}`)
}

//!BOTON INFOME TOTAL

botonInformeTotal.onclick=function(){
    
    const container = document.getElementById("contenedor-lista")

    container.innerHTML = "";

    for(i in arrayNames){
        
        const li = document.createElement("LI");

        li.innerHTML=`La nota de ${arrayNames[i]} es: ${arrayNotas[i]}`;

        container.appendChild(li);
    }
}