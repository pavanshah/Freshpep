var app = angular.module('freshpep', []);

app.controller('freshpep', function($scope, $http) {

	$scope.trial = 50;
	$scope.productdata = [];
	
	var fetchProducts = function()
	{	
		$http({
			method : "POST",
			url : '/fetchProducts',
			data : {

			}
		}).success(function(data) {
			if (data.statusCode == 401) {
				alert("Unable to fetch products");
			}
			else
			{
				console.log("success");
				console.log(data.ProductData);
				productdata = data.ProductData;
				console.log(productdata);
			}
		}).error(function(error) {
			alert("Unable to fetch products");
		});
		
	};
	
	fetchProducts();
	
});
