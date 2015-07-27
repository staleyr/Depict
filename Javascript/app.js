(function () {
	
	var app = angular.module('depict', ["ngRoute"]);
	
	app.config(function($routeProvider) {
		$routeProvider
			.when("/Categories", {
				templateUrl: "Categories.html",
				controller: "CategoriesController"
			})
			.when("/Category/:category", {
				templateUrl: "Category.html",
				controller: "CategoryController"
			})
			.otherwise({redirectTo: "/Index"})
	});
	
	function hideShowLogin(user) {
  		if (user != null && user.id != null && user.id != "undefined")
  		{
    		$(".loginDiv").hide();
 		 }
	  else {
	    $(".loginDiv").show();
	  }
}
	 
}());