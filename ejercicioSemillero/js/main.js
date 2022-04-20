
function getName(){
    let name = prompt("Digite su nombre:");
    return name;
}

function getCiudad(name){
    let ciudad = prompt(`Hola, ${name} ¿vives en Armenia?`);
    return ciudad;
}

function getGrado(){
    let grado = prompt("¿Estas en grado 10 o grado 11? Si o No.");
    return grado;
}
function stop(option){
    
    if(option=="si" || option=="Si"){

        onOff=1;

    }else{

        onOff=2;

        alert("Sistema finalizado");
    }
    return onOff;

}
let name = getName();

let ciudad = getCiudad(name);

let grado = getGrado();

let free=true;

let option;

let onOff=1;

while (onOff==1){

    if(free==false){
        name = getName();
        ciudad = getCiudad(name);
        grado = getGrado();
    }

    if((ciudad=="si"||ciudad=="Si") && (grado=="si" || grado=="Si")){
        if(free==true){

            alert(`Felicidades ${name}, por ser el usuario #1 su inscripcion sera realizada de manera gratuita.`);
            option=prompt("¿Desea registrar otro usuario? Si o No")
            onOff=stop(option);

            free=false;

        }else{

            alert(`${name} su inscripcion se ha realizado de manera exitosa debera pagar $100.000`);
            option=prompt("¿Desea registrar otro usuario? Si o No")
            onOff=stop(option);

        }


    }else{
        alert("No cumple las condiciones.")

        option=prompt("¿Desea registrar otro usuario? Si o No")
        onOff=stop(option);
    }
    
}

