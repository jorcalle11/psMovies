(function() {
  'use strict';

  angular
    .module('psMovies')
    .component('movieRating',{
      template: template(),
      controller: controller,
      bindings: {
        value: '<',
        max: '<',
        setRating: '&'
      }
    })

  function template() {
    return `
      <span ng-repeat="start in $ctrl.starts track by $index">
        <i class="material-icons" style="cursor:pointer;color: {{start}}" ng-click="$ctrl.setRating({value: $index + 1})">grade</i>
      </span>
    `
  }

  function controller() {
    var vm = this;
    vm.starts = [];
    vm.$onInit = $onInit;
    vm.$onChanges = $onChanges;

    function $onInit() {
      vm.starts = buildRating(vm.value, vm.max);
    }

    function $onChanges() {
      vm.starts = buildRating(vm.value, vm.max);
    }
  }

  function buildRating(value, max) {
    var entries = [];
    for (var i = 1; i <= max; i++) {
      var yellow = (i <= value) ? '#ffd600': '#bdbdbd';
      entries.push(yellow);
    }
    return entries;
  }

}());
