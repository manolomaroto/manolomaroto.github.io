var myApp = angular.module("myApp", ["ngRoute","ngAnimate"]);

myApp.config(function($routeProvider){
	$routeProvider
		.when("/books", {
			templateUrl: "partials/books-list.html",
			controller: "bookListCtrl"
		})
		.when("/kart", {
			templateUrl: "partials/kart-list.html",
			controller: "kartListCtrl"
		})
	.otherwise({
		redirecTo : "/books"
	})
});

myApp.factory("kartService",function(){
	var kart = [];
	return {
		getKart: function(){
			return kart;
		},
		addToKart: function(book){
			kart.push(book);
		},
		buy: function(book){
			alert("Thanks for buying", book.name);
		}
	}
})

myApp.factory("bookService",function(){
	var books = [
		{
			imgurl:"trece.jpg",
			name: "13 rue del Percebe",
			price: "28.50",
			binding: "Tapa dura",
			publisher: "Ediciones B",
			releaseDate: "2016",
			details: "Por primera vez se reúnen en un solo volumen todas las páginas que realizó Francisco Ibáñez de su mítica serie 13, Rue del Percebe"
		},
		{
			imgurl:"tres.jpg",
			name: "Tres abuelas y un cocinero muerto",
			price: "18.90",
			binding: "Tapa blanda",
			publisher: "Suma",
			releaseDate: "2015",
			details: "Siiri, Irma y Anna-Liisa son tres viudas de noventa años residentes en El Bosque del Crepúsculo, un centro privado de apartamentos para la tercera edad de Helsinki."
		},
		{
			imgurl:"cuerpos.jpg",
			name: "Los cuerpos extraños",
			price: "8.95",
			binding: "Tapa blanda",
			publisher: "Destino",
			releaseDate: "2015",
			details: "Mientras pasa el fin de semana en familia, el brigada Bevilacqua recibe el aviso de que el cadáver de la alcaldesa de una localidad levantina, cuya desaparición había sido previamente denunciada por el marido, ha sido hallado por unos turistas en la playa"
		},
		{
			imgurl:"cumbres.jpg",
			name: "Cumbres borrascosas",
			price: "9.95",
			binding: "Tapa blanda",
			publisher: "Penguin Cl&aacute;sicos",
			releaseDate: "2015",
			details: "Cumbres borrascosas, la épica historia de Catherine y Heathcliff, situada en los sombríos y desolados páramos de Yorkshire, constituye una asombrosa visión metafísica del destino, la obsesión, la pasión y la venganza."
		},
		{
			imgurl:"lector.jpg",
			name: "El lector de Julio Verne",
			price: "19.00",
			binding: "Tapa blanda",
			publisher: "Tusquets Editores",
			releaseDate: "2014",
			details: "Nino, hijo de guardia civil, tiene nueve años, vive en la casa cuartel de un pueblo de la Sierra Sur de Jaén, y nunca podrá olvidar el verano de 1947."
		},
	];

	return {
		getBooks: function(){
			return books;
		},
		addToKart:function(book){

		}
	}
})

myApp.controller("kartListCtrl", function($scope, kartService){
	$scope.kart = kartService.getKart();
	$scope.buy = function(book){
		kartService.buy(book)
	}
});

myApp.controller("headerCtrl", function($scope,$location) {
	$scope.appDetails = {};
	$scope.appDetails.title = "BooKart";
	$scope.appDetails.tagline = "Miles de libros a tu disposicion";

	$scope.nav={};
	$scope.nav.isActive = function(path){
		if (path === $location.path()){
			return true;
		}
		return false;
		
	}
});

myApp.controller("bookListCtrl",function($scope,bookService,kartService){
	$scope.books = bookService.getBooks();

	$scope.addToKart = function(book){
		kartService.addToKart(book);
	}
})

