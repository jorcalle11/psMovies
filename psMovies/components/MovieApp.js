(function() {
  'use strict';

  angular
    .module('psMovies')
    .component('movieApp',{
      template: template(),
      $routeConfig: [
        {path:'/movies', component: 'movieList', name:'Movies'},
        {path:'/about', component: 'aboutMe', name:'About'},
        {path:'/movies/:id/...', component: 'movieDetail', name: 'Detail'},
        {path: '/**', redirectTo: ['Movies']}
      ]
    })

  function template() {
    return `
      <navbar></navbar>
      <main>
        <ng-outlet></ng-outlet>
      </main>
    `
  }
}());
