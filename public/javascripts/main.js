// var app = angular.module('myApp', []);

 var app = angular.module('myApp', [], function ($interpolateProvider) {
            $interpolateProvider.startSymbol('[[');
            $interpolateProvider.endSymbol(']]');
        });
 app.factory('Tea',function(){

 	var Tea = function(name,description,price,caffeine, size ) {
 		this.name = name;
 		this.description = description;
 		this.price = price;
 		this.caffeine = caffeine;
 		this.size = size;
 	}

 	Tea.prototype.toString = function(){
 		var returnString='' ;
    	returnString += "name" + this.name + "\n" +
    	"description: " + this.description + "\n" +
    	"price: " + this.price + "\n" + "caffeine: " + this.caffeine + "\n" + "size: " + this.size;

    return returnString
 	}
 	return Tea;
 	// why does the factory and constructor name need to be the same?
 })

 // app.factory

 app.controller('myController', function($scope,Tea ) {
 	var whiteTea = new Tea('white','good',10,'yes','20');
	console.log('connected',whiteTea)
  $scope.greeting = "Hello World!";
});

// app.controller('myController', function($scope) {
// 	console.log('connected')
//   $scope.greeting = "Hello World!";
// });