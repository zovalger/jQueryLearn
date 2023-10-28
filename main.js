import controles from "./controles.js";

$(document).ready(function () {
	// $("button:fir").html("hola mundo");

	$("#BIHPThkBvs0OEvtFFmqPF")
		.html("cambio de clases")
		.addClass("btn-danger")
		.removeClass("btn-primary");

	$("#contanedor button").html("hola mundo");

	$("#estiloEditado").html("tamaño editado").css("scale", "50%");

	$("#contanedorDinamico").append(
		`<button class="btn btn-primary">boton creado dinamico</button>`
	);

	$("#eliminado").remove();

	$("#oculto").hide();

	$("#imagendinamica").attr({
		src: "https://orig00.deviantart.net/398e/f/2017/296/0/9/goku_ultra_instinct_form_dbs_by_ronniegfx-dbrgz18.png",
		width: "200px",
	});

  controles()
});
