(function() {
 'use strict';

 angular
  .module('psMovies')
  .component('accordionPanel',{
    require: {
      parent: '^accordion'
    },
    bindings: {
      icon:'@',
      header: '@',
      body: '@'
    },
    transclude: true,
    template: templatePanel(),
    controller: controllerPanel
  })

  function templatePanel() {
    return `
    <li>
      <div class="collapsible-header" ng-click="$ctrl.select()">
        <i class="material-icons">{{$ctrl.icon}}</i>
        {{$ctrl.header}}
      </div>
      <div class="collapsible-body animated" ng-class="{'click fadeIn':$ctrl.selected}">
      <p>
        <ng-transclude></ng-transclude>
      </p>
      </div>
    </li>
    `
  }

  function controllerPanel() {
    var vm = this;
    vm.$onInit = $onInit;
    vm.selected = false;
    vm.select = select;
    vm.turnOn = turnOn;
    vm.turnOff = turnOff;

    function $onInit() {
      vm.parent.addPanel(vm);
    }

    function select() {
      vm.parent.selectPanel(vm);
    }

    function turnOn() {
      vm.selected = true;
    }

    function turnOff() {
      vm.selected = false;
    }
  }
}());
