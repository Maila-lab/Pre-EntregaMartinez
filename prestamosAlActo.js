
function calcular_pretamo(monto, cuotas){
    monto = parseFloat(monto);
    cuotas= parseInt(cuotas);
    let prestamo_final = 0;

    if (cuotas ==1 && monto >0){
        prestamo_final=monto
    }
    else if(cuotas == 3 && monto >0){
        prestamo_final = monto + (monto *0.25)
    }
    else if(cuotas == 6 && monto >0){
        prestamo_final = monto + (monto *0.60)
    }
    else if(cuotas == 12 && monto >0){
        prestamo_final = monto + (monto *1)
    }
    return prestamo_final
}

function descuento (prestamo, es_socio){
    let descuento_socio=0;
    if (es_socio == "SI" || es_socio == "si"){
        descuento_socio = prestamo - (prestamo *0.20)
    }
    return descuento_socio;
}


console.log("Bienvenido/a a Prestamos Al Acto");
let opc;
let monto =0;
console.log("____________________________________________________________________________________");
opc = prompt("desea realizar solicitar otro prestamo? SI O NO ");
while(opc == "SI" ){
    monto= prompt("Ingrese el monto que desea solicitar: ");
    monto = parseFloat(monto);
   if (opc != "NO"){
    let cuotas = prompt("Ingrese la cantidad de cuotas: 1-3-6-12");
    let estado_usuario = prompt("Es socio: SI o NO");
    let resultado_del_prestamo = calcular_pretamo(monto,cuotas);

    let resultado_del_descuento = descuento(resultado_del_prestamo, estado_usuario);

    console.log("Pediste: ", monto);
    console.log("Cuotas: ",cuotas);

    if (resultado_del_descuento != 0){
        console.log("Por ser socio vas a tener un descuento del 20%, por lo tanto debes pagar: ",resultado_del_descuento);
        console.log("------------------------------------------------------------------------------------");
    }else{
        console.log("Debes pagar: ",resultado_del_prestamo);
        console.log("------------------------------------");
    }
    opc = prompt("desea realizar solicitar otro prestamo? SI o para salir presione cualquier boton ");

    }

}
console.log("____________________________________________________________________________________");
console.log("Gracias por visitar Prestamos Al Acto");
