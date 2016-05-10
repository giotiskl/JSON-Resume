myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

   $urlRouterProvider.otherwise('/');

   $stateProvider
       .state('base', {
           url: '/',
           templateUrl: 'partials/home.html'
       });
}]);
