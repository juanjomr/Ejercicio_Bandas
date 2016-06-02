(function(){

	var app = angular.module('bandsmodule',[]);
	app.directive('bandDirective', function(){

		return{
			
			restrict: "E",
			templateUrl: "components/cards.html"
			
		}
	})

	app.controller('Bandscontroller',['$scope','$http',function($scope,$http){
		var url = "data/bands.json"; //Es un ENDPOINT
		$scope.bands=[];
		$http.get(url).then(function(response){
			$scope.bands = response.data

		})

	}]);

})();