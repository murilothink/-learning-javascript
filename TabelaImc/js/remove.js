var paciente = document.querySelectorAll(".paciente");

paciente.forEach(function(paciente){
	paciente.addEventListener("dblclick", function(){
		this.remove();
	});
});