function validateForm(){
	
	function name(){
		nombre = document.getElementById("name").value;
		if (nombre == null || nombre.length == 0) {
			var container = document.getElementsByClassName("name-container")[0];
			var spanb = document.createElement("span");
			var mensaje = document.createTextNode("Ingresa nombre");
			spanb.appendChild(mensaje);
			container.appendChild(spanb);
			return false;
}

		soloLetrasNombre = document.getElementById("name").value;
		if (/[0-9]/.test(soloLetrasNombre)) {
			var container = document.getElementsByClassName("name-container")[0];
			var spanb = document.createElement("span");
			var mensaje = document.createTextNode("Ingresa solo letras");
			spanb.appendChild(mensaje);
			container.appendChild(spanb);
			return false;
}

		nombreMayuscula = nombre.charAt(0);
		if (!(/[A-Z]/.test(nombreMayuscula))) {
			var container = document.getElementsByClassName("name-container")[0];
			var spanb = document.createElement("span");
			var mensaje = document.createTextNode("Ingresa mayuscula en la primera letra");
			spanb.appendChild(mensaje);
			container.appendChild(spanb);
			return false;
}

}
	function lastname() {
		apellido = document.getElementById("lastname").value;
		if (apellido == null || apellido.length == 0) {
			var container2 = document.getElementsByClassName("lastname-container")[0];
			var spanb2 = document.createElement("span");
			var mensaje2 = document.createTextNode("Ingrsa apellido");
			spanb2.appendChild(mensaje2);
			container2.appendChild(spanb2);
			return false;
}

		soloLetrasApellido = document.getElementById("lastname").value;
		if (/[0-9]/.test(soloLetrasApellido)) {
			var container = document.getElementsByClassName("lastname-container")[0];
			var spanb = document.createElement("span");
			var mensaje = document.createTextNode("Ingresa solo letras");
			spanb.appendChild(mensaje);
			container.appendChild(spanb);
			return false;
}

		apellidoMayuscula = apellido.charAt(0);
		if (!(/[A-Z]/.test(apellidoMayuscula))) {
			var container = document.getElementsByClassName("lastname-container")[0];
			var spanb = document.createElement("span");
			var mensaje = document.createTextNode("Ingresa mayuscula en la primera letra");
			spanb.appendChild(mensaje);
			container.appendChild(spanb);
			return false;
}

}

	function mail() {
		email = document.getElementById("input-email").value;
		if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))) {
			var container = document.getElementsByClassName("email-container")[0];
			var spanb = document.createElement("span");
			var mensaje = document.createTextNode("Ingresa email valido");
			spanb.appendChild(mensaje);
			container.appendChild(spanb);
			return false;
}

}

	function contraseña() {
		password = document.getElementById("input-password").value;
		if (password.length<6 || password=123456 || password="password") {
			var container3 = document.getElementsByClassName("form-group")[0];
			var spanb3 = document.createElement("span");
			var mensaje3 = document.createTextNode("Ingresa contraseña valida");
			spanb3.appendChild(mensaje3);
			container3.appendChild(spanb3);
			return false;
}

}

	function bike() {
		bicicleta = document.querySelector("select").value;
		if (bicicleta = 0) {
			
			return false;
}

}


}