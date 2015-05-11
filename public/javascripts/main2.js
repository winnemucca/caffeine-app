var app = angular.module('myApp', ['ngRoute'], function ($interpolateProvider) {
            $interpolateProvider.startSymbol('[[');
            $interpolateProvider.endSymbol(']]');
        });
app.config(function($routeProvider,$locationProvider){
	$routeProvider
		.when('/home',{
			templateUrl:'templates/home.html',
			controller:'myController'
		})
		.when('/drinkLibrary',{
			templateUrl:'templates/drinkLibrary.html',
			controller:'DrinkLibraryController'
		})
		.otherwise({
			redirectTo: '/home'
		})
		$locationProvider.hashPrefix('!');
});
app.factory('Drink',function($http) {
	var Drink = function(name,description,caffeineLevel) {
 		this.name = name;
 		this.description = description;
 		this.caffeineLevel = caffeineLevel;

 	}

	return Drink;
})

app.controller('HomeController',function($scope){
	console.log('home');
})

app.controller('DrinkLibraryController',function($scope){
	console.log('drinkLibrary');
})


app.controller('myController', function($scope,Drink,$http  ) {
	var init = function() {
	 	 $scope.defaultForm = {
	 		beverageName: "",
	 		description: "",
	 		caffeine: ""
	 	};
 	}
 	init();
 	// $scope.defaultForm = defaultForm;


 	$scope.allDrinkList = [];
 	$scope.drinkList= function(obj) {
 		var newdrink = new Drink(obj.beverageName,obj.description,obj.caffeine);
 		$scope.allDrinkList.push(newdrink);
 		console.log($scope.allDrinkList);
 		init();

 		$http.post('/api/drinks',obj).
 			success(function(data){
 				console.log(data)
 				$scope.message = 'success';
 			}).
 			error(function(data){
 				console.log('error');
 			})

 	};

});