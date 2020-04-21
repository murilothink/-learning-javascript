var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){

    event.preventDefault();

    var form = document.querySelector("#form-adiciona")
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nometd = document.createElement("td");
    var pesotd = document.createElement("td");
    var alturatd = document.createElement("td");
    var gorduratd = document.createElement("td");
    var imctd = document.createElement("td");

    nometd.textContent = nome;
    pesotd.textContent = peso;
    alturatd.textContent = altura;
    gorduratd.textContent = gordura;
    imctd.textContent = peso / (altura * altura);


    pacienteTr.appendChild(nometd);
    pacienteTr.appendChild(pesotd);
    pacienteTr.appendChild(alturatd);
    pacienteTr.appendChild(gorduratd);
    pacienteTr.appendChild(imctd);


    var tabela = document.querySelector("#tabela-pacientes");

    var PesoValido = true;
    var AlturaValida = true;

    if(peso < 0 || peso > 1000){
      console.log("Peso invalida");
      PesoValido = false;
      alert(peso.textContent = ("Peso Invalido"));  
    }

    if(altura > 3.00 || altura < 0){
      console.log("Altura invalida");
      AlturaValida = false;
      alert(altura.textContent = ("Alura Invalida"));
    }
    if(PesoValido && AlturaValida){
      console.log(imc)
      AlturaValida = true;
      tabela.appendChild(pacienteTr);
    }

  });