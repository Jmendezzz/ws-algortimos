
const botonAñadirNombres = document.getElementById("envio-nombres");
const spanContador = document.getElementById("nota-span");
const botonNotas = document.getElementById("boton-notas");
const botonNotaAlta=document.getElementById("nota-alta");
let arrayEstudiantes=[];

let arrayNotas=[];

let cont=0;
botonAñadirNombres.onclick=function(){
    const inputNombres = document.getElementById("nombres-estudiantes").value;
    arrayEstudiantes[cont]=inputNombres;
    cont++;
    console.log(arrayEstudiantes)
}
let cont2=0;
spanContador.innerHTML=cont2;
botonNotas.onclick=function(){
    const inputNotas = document.getElementById("input-notas").value;
    parseInt(inputNotas);
    arrayNotas[cont2]=inputNotas;
    console.log(arrayNotas)
    cont2++;
    spanContador.innerHTML=cont2;


} 
botonNotaAlta.onclick=function(){
    let notaAlta=0;
    let contadorNotas=0;
    let long=0;
for(let i of arrayNotas){
    if(i>=notaAlta){
        
        if(i==notaAlta){
            let posicion= arrayNotas.indexOf(i);
            console.log (posicion);
            var estudiantes=[];
            estudiantes[contadorNotas]=arrayEstudiantes[posicion];
            long=estudiantes.length;
           contadorNotas++; 
        }else contadorNotas=0;
        notaAlta=i;
        console.log(notaAlta);
        console.log(contadorNotas);
    }    
}
    alert(`La nota mas alta fue ${notaAlta}, la nota fue obtenida ${contadorNotas} veces, por los estudiantes:${estudiantes}`);
}

const botonBusqueda = document.getElementById("buscar-estudiante");
botonBusqueda.onclick=function(){
    const nombreEstudiante = document.getElementById("nombre-estudiante").value;
    let disp = arrayEstudiantes.indexOf(nombreEstudiante);
    console.log(disp);
    if(disp!=-1){
        alert(`Encontrado, nombre del estudiante es: ${nombreEstudiante}`)
    }

}
const botonPromedio = document.getElementById("boton-promedio");
botonPromedio.onclick=function(){
    let total=0;
    let datos=arrayNotas.length;
    let promedio=0;
    for(let i in arrayNotas){
        total=arrayNotas[i]+total;
        promedio=total/datos;
        alert(`El promedio de las notas fue de: ${promedio}`)

    }
}











