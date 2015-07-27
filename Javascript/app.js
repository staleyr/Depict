(function () {
	
	var app = angular.module('depict', ["ngRoute"]);
	
	app.config(function($routeProvider) {
		$routeProvider
			.when("/Categories", {
				templateUrl: "Categories.html",
				controller: "CategoriesController"
			})
			.when("/Category", {
				templateUrl: "Category.html",
				controller: "CategoryController"
			})
			.otherwise({redirectTo: "/Index"})
	});
	 
}());