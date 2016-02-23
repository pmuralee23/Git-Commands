
'use strict';

define(['angular',
        'controllers-module',
		'underscore'
        ], function(angular, controllers,underscore) {  
	
	// Controller definition
controllers.controller("userCtrl", ["$scope", "$rootScope","FilterData",function($scope, $rootScope,FilterData) {
       //current using $scope later change controler as syntax approach....   
	    $scope.userData="User data Test..........";
   
	}]);
});