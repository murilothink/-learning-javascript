
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Norte";

var PesoValido = true;
var AlturaValida = true;

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");
    var imc = peso / (altura * altura);

    if(altura > 3.00 || altura < 0){
        console.log("Altura invalida")
        AlturaValida = false;
        var altura = paciente.querySelector(".info-altura");
        altura.textContent = ("Alura Invalida");
    }

    if(peso < 0 || peso > 1000){
        console.log("Peso invalida");
        PesoValido = false;
        var peso = paciente.querySelector(".info-peso");
        peso.textContent = ("Peso Invalido");  
    }

    if(PesoValido && AlturaValida){
        console.log(imc)
        AlturaValida = true;
        tdImc.textContent = imc;
    }
    
    
}

