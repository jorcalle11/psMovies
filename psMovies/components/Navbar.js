(function() {
  'use strict';

  angular
    .module('psMovies')
    .component('navbar',{
      template: template()
    })

  function template() {
    return `
    <nav class="nav-wrapper grey darken-4">
      <a href="#" class="brand-logo">Logo</a>
      <ul class="right hide-on-med-and-down">
        <li><a ng-link="['Movies']">Peliculas</a></li>
        <li><a ng-link="['About']">About Me</a></li>
      </ul>
    </nav>
    `
  }

}());
