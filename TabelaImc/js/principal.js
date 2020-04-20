
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Norte";


var paciente = document.querySelector("#primeiro");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
var imc = peso / (altura * altura);

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


