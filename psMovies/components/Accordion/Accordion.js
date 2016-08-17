(function() {
  'use strict';

  angular
    .module('psMovies')
    .component('accordion',{
      transclude: true,
      template: templateAccordion(),
      controller: controllerAccordion
    })

  function templateAccordion() {
    return `
      <ul class="collapsible" data-collapsible="accordion">
        <ng-transclude></ng-transclude>
      </ul>
    `
  }

  function controllerAccordion() {
    var vm = this;
    var panels = [];
    vm.addPanel = addPanel;
    vm.selectPanel = selectPanel;

    function addPanel(panel) {
      panels.push(panel);

      if (panels.length > 0) {
        panels[0].turnOn();
      }
      console.log(panels);
    }

    function selectPanel(panel) {
      for (var i in panels) {
        if (panel === panels[i]) {
          panels[i].turnOn();
        } else {
          panels[i].turnOff();
        }
      }
    }
  }
}());
