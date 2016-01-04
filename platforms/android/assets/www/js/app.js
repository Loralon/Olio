angular.module('olio', ['ionic'])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html",
    	controller: "tabCtrl"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
        }
      }
    })
	
    .state('tabs.page2', {
      url: "/page2",
      views: {
        'home-tab': {
          templateUrl: "templates/page2.html"
        }
      }
    })
	
	.state('tabs.page3', {
      url: "/page3",
      views: {
        'home-tab': {
          templateUrl: "templates/page3.html"
        }
      }
    })
	
	.state('tabs.page4', {
      url: "/page4",
      views: {
        'home-tab': {
          templateUrl: "templates/page4.html"
        }
      }
    })
	
	.state('tabs.page5', {
      url: "/page5",
      views: {
        'home-tab': {
          templateUrl: "templates/page5.html"
        }
      }
    })
	
	.state('tabs.page6', {
      url: "/page6",
      views: {
        'home-tab': {
          templateUrl: "templates/page6.html"
        }
      }
    })
	
	.state('tabs.page7', {
      url: "/page7",
      views: {
        'home-tab': {
          templateUrl: "templates/page7.html"
        }
      }
    })
   
;
   $urlRouterProvider.otherwise("/tab/home");
   $ionicConfigProvider.backButton.previousTitleText(false).text('');
   
   
})



.controller('tabCtrl', function($scope) {
  $scope.page = function (index) {
    location.href = "#/tab/page" + index;
  };
  
  $scope.settaZona = function (zona) {
   
   $scope.Zonaa=zona;
   
 /* $scope.items = [{zonaSelected: zona }];*/
   
   
  };
  $scope.items = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 },
    { id: 21 },
    { id: 22 },
    { id: 23 },
    { id: 24 },
    { id: 25 },
    { id: 26 },
    { id: 27 },
    { id: 28 },
    { id: 29 },
    { id: 30 },
    { id: 31 },
    { id: 32 },
    { id: 33 },
    { id: 34 },
    { id: 35 },
    { id: 36 },
    { id: 37 },
    { id: 38 },
    { id: 39 },
    { id: 40 },
    { id: 41 },
    { id: 42 },
    { id: 43 },
    { id: 44 },
    { id: 45 },
    { id: 46 },
    { id: 47 },
    { id: 48 },
    { id: 49 },
    { id: 50 }
  ];
});

