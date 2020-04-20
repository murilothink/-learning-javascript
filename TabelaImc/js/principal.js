
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Norte";


var PesoValido = true;
var AlturaValida = true;

var paciente = document.querySelector("#primeiro");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
var imc = peso / (altura * altura);

if(altura > 3.00 || altura < 0){
    console.log("Altura invalida")
    AlturaValida = false;
}

if(peso < 0 || peso > 1000){
    console.log("Peso invalida");
    falso = confirmação;
}

if(PesoValido && AlturaValida){
    console.log("Esta tudo OK!");
}


tdImc.textContent = imc;


var pacienteTres = document.querySelector("#segundo");

var tdPesoTres = pacienteTres.querySelector(".info-peso");
var pesoTres = tdPesoTres.textContent;

var tdAlturaTres = pacienteTres.querySelector(".info-altura");
var alturaTres = tdAlturaTres.textContent;

var tdImcTres = pacienteTres.querySelector(".info-imc");
var imcTres = pesoTres / (alturaTres * alturaTres);

tdImcTres.textContent = imcTres;


var pacienteTres = document.querySelector("#terceiro");

var tdPesoTres = pacienteTres.querySelector(".info-peso");
var pesoTres = tdPesoTres.textContent;

var tdAlturaTres = pacienteTres.querySelector(".info-altura");
var alturaTres = tdAlturaTres.textContent;

var tdImcTres = pacienteTres.querySelector(".info-imc");
var imcTres = pesoTres / (alturaTres * alturaTres);

tdImcTres.textContent = imcTres;


