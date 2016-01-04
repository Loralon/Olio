var olio = angular.module('olio', ['ionic', 'ngCordova']);

var db = null;


olio.run(function($ionicPlatform, $cordovaSQLite, $rootScope) {
    $ionicPlatform.ready(function() {
        
       db = window.sqlitePlugin.openDatabase( {name: "terreolio", createFromLocation: 1} );
	
    });
});


olio.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

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




.controller('ListCtrl', function($scope, $cordovaSQLite) {
	
$scope.itinerari = [];	
	
var query = "SELECT nome_it FROM CANINO";
        $cordovaSQLite.execute(db, query, []).then(function(res) {
            if(res.rows.length > 0) {
                for(var i = 0; i < res.rows.length; i++) {
                    console.log("SELECTED -> " + res.rows.item(i).nome_it);
					$scope.itinerari.push({
          			nome_it: res.rows.item(i).nome_it,
          			nome_en: res.rows.item(i).nome_en,
          			telefono: res.rows.item(i).telefono
        });
			$scope.$apply();
                }
            } else {
                console.log("No results found");
            }
        }, function (err) {
            console.error(err);
        });	
  
  
  
})










.controller('tabCtrl', function($scope, $cordovaSQLite) {
  $scope.page = function (index) {
    location.href = "#/tab/page" + index;
  };
  
  $scope.settaZona = function (zona) {
   console.log("CLICCATO");
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
    { id: 10 }
  ];
  
  
   $scope.selectAll = function() {
	   console.log("CLICCATO2");
        var query = "SELECT nome_it FROM sabina";
        $cordovaSQLite.execute(db, query, []).then(function(res) {
            if(res.rows.length > 0) {
                for(var i = 0; i < res.rows.length; i++) {
                    console.log("SELECTED -> " + res.rows.item(i).nome_it);
                }
            } else {
                console.log("No results found");
            }
        }, function (err) {
            console.error(err);
        });
    }
  
});

