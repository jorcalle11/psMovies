(function() {
  'use strict';

  angular
    .module('psMovies')
    .component('aboutMe',{
      template: template()
    })

  function template() {
    return `
      <h1 class="center">Esta es la vista de About Me</h1>
    `
  }
}());
