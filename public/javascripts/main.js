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
 	})

 	app.factory("SoftDrink",function(Tea){
	 	var SoftDrink = function(name,description,price,caffeine, size){
	 		Tea.apply(this,arguments);
	 		this.category = "soft drinks";
	 	}
	 	SoftDrink.prototype = new Tea();

	 	return SoftDrink;
	 })

 	app.factory("DrinkList",function(Tea){
 	
	 	// var beverageList = {
	 	// 	drinkLibrary: []
	 	// };
	 	
	 	// beverageList.newItem = function(){
	 	// 	beverageList.drinkLibrary.push(new Tea);
	 	// }
	 	// console.log(beverageList);
	 	// return beverageList;

	 	var drinkLibrary = [];
	 	return {

	 		// drinkLibrary: [],
	 		newItem: function() {
	 			drinkLibrary.push(new Tea);
	 			return drinkLibrary;
	 		}
	 	}

	})

 app.controller('myController', function($scope,Tea,SoftDrink,DrinkList ) {
 	// DrinkList.drinkLibrary;
 	// $scope.drinkList = DrinkList.drinkLibrary;
 	$scope.drinkList = DrinkList.newItem();
 	console.log(DrinkList.newItem());
 	var whiteTea = new Tea('white','good',10,'yes','20');
 	var coke = new SoftDrink('coca-cola','sweet',4,'yes','30');
	console.log('connected',whiteTea)
	console.log(coke);
  $scope.greeting = "Hello World!";
});

// app.controller('myController', function($scope) {
// 	console.log('connected')
//   $scope.greeting = "Hello World!";
// });