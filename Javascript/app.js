(function () {

	var app = angular.module('depict', ["ngRoute", "satellizer"]);

	app.config(function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "Index.html",
				controller: "HomeController"
			})
			.when("/Categories", {
				templateUrl: "Categories.html",
				controller: "CategoriesController"
			})
			.when("/Category/:category", {
				templateUrl: "Category.html",
				controller: "CategoryController"
			})
			.when("/Login", {
				templateUrl: "Login.html",
				controller: "LoginController"
			})
			.otherwise({
				redirectTo: "/404",
				templateUrl: "404.html"
			})
	});

	app.config(function($authProvider) {

    $authProvider.facebook({
      clientId: '624059410963642'
    });

    $authProvider.google({
      clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com'
    });

    $authProvider.github({
      clientId: '0ba2600b1dbdb756688b'
    });

    $authProvider.linkedin({
      clientId: '77cw786yignpzj'
    });

    $authProvider.yahoo({
      clientId: 'dj0yJmk9dkNGM0RTOHpOM0ZsJmQ9WVdrOVlVTm9hVk0wTkRRbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0wMA--'
    });

    $authProvider.live({
      clientId: '000000004C12E68D'
    });

    $authProvider.twitter({
      url: '/auth/twitter'
    });

    $authProvider.oauth2({
      name: 'foursquare',
      url: '/auth/foursquare',
      redirectUri: window.location.origin,
      clientId: 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
      authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
    });

  });

	function hideShowLogin(user) {
  		if (user != null && user.id != null && user.id != "undefined") {
    		$(".loginDiv").hide();
 		}
	  	else {
	    	$(".loginDiv").show();
	  	}
}

}());
