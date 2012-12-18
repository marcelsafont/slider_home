// definición de la función
$.fn.slider = function(options){
	// puede recibir un array de parámetros nombrados
	// invocamos a una función genérica que hace el merge 
	// entre los recibidos y los de por defecto 
	var opts = $.extend({}, $.fn.slider.defaults, options);

	// para cada componente que puede contener el objeto jQuery que invoca a esta función
	this.each(function(){
		// asignamos a la asignación del foco la invocación a una función
		
			$(this).css({"background" : "white"});
		
	});

};

// definimos los parámetros junto con los valores por defecto de la función
$.fn.slider.defaults = {
    // para el fondo un color por defecto
    background: '#a6cdec'
};

