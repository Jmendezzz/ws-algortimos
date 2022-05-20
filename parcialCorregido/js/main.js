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

let matriz = [];

//!EVENTO DE CLICK EN EL BOTON DE añadir
botonNombres.onclick=function(){
    let arreglo= [];
    const nombres = document.getElementById("input-nombres").value;
    arreglo.unshift(nombres);
    //!PUSH arrayNames ["N"]
    document.getElementById("input-nombres").value = "";
    //!NOTAS
    let notas= document.getElementById("input-notas").value;
    notas = parseInt(notas);
    arreglo.push(notas);
    matriz.push(arreglo);
    document.getElementById("input-notas").value = "";
  
}

//!EVENTO BOTON INFORME
const botonInforme = document.getElementById("boton-informe");
let mejorNota=0;
let contador=0;

botonInforme.onclick=function(){

    for(let i in matriz){

        for(let j in matriz[i]){

            if (matriz[i][1]>mejorNota){
            
                mejorNota=matriz[i][1];
                
            }
        }
        
    }
    let estudiantes=[];
    for(let i in matriz){

        if(matriz[i][1]==mejorNota){
            contador++;
            estudiantes.push(matriz[i][0]);
        }
    }
    alert(`La mejor nota fue: ${mejorNota}, se obtuvo ${contador} veces por los estudiantes: ${estudiantes}`);
}
//!BOTON BUSQUEDA DE ESTUDIANTE

botonBusqueda.onclick=function(){

    const nombreEstudiante = document.getElementById("nombre-estudiante").value;
    
    let indice;
    for (let i in matriz){
        for(let j in matriz[i]){
            let arreglo=matriz[i][0]
            indice=arreglo.indexOf(nombreEstudiante);
        }
    }

    if(indice!=-1){

        alert(`Se encontró el estudiante ${matriz[indice][0]} su nota fue: ${matriz[indice][1]}`);

    }else alert(`No se encontró el estudiante "${nombreEstudiante}"!`)
}

//!BOTON PROMEDIO

botonPromedio.onclick=function(){

    let numDatos=0;
    
    let sumatoria=0;
    
    for(let i in matriz){

        for(let j in matriz[i]){
            
            sumatoria = sumatoria+matriz[i][1];
            numDatos++;
        } //!aca
         
    } //!sube
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