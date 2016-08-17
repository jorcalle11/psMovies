(() => {
  'use strict';

  angular
    .module('psMovies',['ngComponentRouter'])
    .value('$routerRootComponent','movieApp')

  // function config($routeProvider) {
  //   $routeProvider
  //     .when('/movies',{
  //       template: '<movie-list></movie-list>'
  //     })
  //     .when('/about',{
  //       template: '<about-me></about-me>'
  //     })
  //     .otherwise({
  //       redirectTo: '/movies'
  //     });
  // }

})();
