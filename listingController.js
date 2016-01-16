angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = 'Click an entry for details.';
    $scope.newCode = ''; 
    $scope.newName = ''; 
    $scope.newAddress = ''; 
    $scope.newLongitude = 0; 
    $scope.newLatitude = 0; 
    $scope.filter = ''; 

    $scope.addListing = function() {
	var newListing = 
	{
	    "code": $scope.newCode,
	    "name": $scope.newName, 
	    "coordinates": {
		"latitude": $scope.newLatitude, 
		"longitude": $scope.newLongitude }, 
	    "address": $scope.newAddress
	}; 
	$scope.listings.push(newListing); 
    };
    $scope.deleteListing = function(entry) {
	$scope.listings.splice($scope.listings.indexOf(entry), 1); 
    };
    $scope.showDetails = function(entry) {
	var index = $scope.listings.indexOf(entry); 
	if ($scope.listings[index].address == null || $scope.listings[index].address == '') 
		$scope.detailedInfo = 'No additional data available.';
	else  
		$scope.detailedInfo = $scope.listings[index].code + ' : ' + $scope.listings[index].name + 
		'\n' + entry.address + '\nCoordinates:\n\tLatitude: ' + 
		$scope.listings[index].coordinates.latitude + '\n\tLongitude: ' + 
		$scope.listings[index].coordinates.longitude; // work in progress 
    };
  }
]);
