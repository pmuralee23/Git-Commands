

'use strict';

define(['angular',
        'controllers-module',
		'underscore'
        ], function(angular, controllers,underscore) {  
	
	// Controller definition
controllers.controller("DashboardCtrl", ["$scope", "$rootScope","FilterData",function($scope, $rootScope,FilterData) {
       //current using $scope later change controler as syntax approach....   
	FilterData.get().then(function(data){
		$scope.myData=data;
	},function(){})
	   
   
	}]);
});