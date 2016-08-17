(function() {
  'use strict';

  angular
    .module('psMovies')
    .component('movieDetail',{
      template: template(),
      // $canActivate: $canActivate,
      $routeConfig: [
        {path:'/overview', component: 'movieOverview', name: 'Overview'},
        {path:'/actors', component: 'movieActors', name: 'Actors'},
        {path:'/director', component: 'movieDirector', name: 'Director'}
      ],
      controller: controller
    })
    .component('movieOverview',{
      template: `aqui van la informacion general de la pelicula`
    })
    .component('movieActors',{
      template: `aqui van los actores principales de la pelicula`
    })
    .component('movieDirector',{
      template: `aqui van el productor de la pelicula`
    })
    function template() {
      return `
        <h4 class="center">Detalle de la pelicula con id {{$ctrl.params.id}}</h4>
        <section class="container">
          <ul>
            <li><a ng-link="['Overview']">General</a></li>
            <li><a ng-link="['Actors']">Actores</a></li>
            <li><a ng-link="['Director']">Director</a></li>
          </ul>
          <ng-outlet></ng-outlet>
        </section>
      `
    }

    function $canActivate($timeout) {
      return $timeout(function () {
        return true;
      }, 1000);
    }

    function controller() {
      var vm = this;
      vm.$routerOnActivate = $routerOnActivate;
      vm.params = {};

      function $routerOnActivate(next,previous) {
        vm.params = next.params;
      }
    }
}());
