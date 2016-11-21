angular.module('pokeApp')
    .config(function($stateProvider, $urlRouterProvider) {

        //This is a catch all for our routes

        $urlRouterProvider.otherwise("/");

          $stateProvider
            .state('home', {
              url: "/",
              templateUrl: 'views/home.html'
            })
            .state('pokeArena', {
              url:"/pokeArena",
              templateUrl: "views/pokeArena.html"
            })
            .state('pokedex', {
              url:"/pokedex",
              templateUrl: "views/pokedex.html",
              controller: "mainCtrl"
            })
            .state('pokeCard', {
              url:"/pokeCard/:url",
              templateUrl: "views/pokeCard.html",
              controller: "mainCtrl"
            })
            .state('pricing', {
              url:"/pricing",
              templateUrl: "views/pricing.html"
            })
//       We need to configure our routes here


});
