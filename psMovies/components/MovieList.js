(() => {
  'us strict';

  angular
    .module('psMovies')
    .component('movieList', {
      template: template(),
      controller: ['$http',miController],
      bindings: {
        '$router':'<'
      }
    });



  function template() {
    return `
      <div class="container">
        <h1 class="center">{{$ctrl.title}}</h1>
        <ul class="collection">
          <li class="collection-item avatar" ng-repeat="movie in $ctrl.movies">
            <img ng-src="{{movie.photo}}" class="circle"/>
            <span class="title">{{movie.name}}</span>
            <p>{{movie.producer}}</p>
            <movie-rating value="movie.rating" max="5" set-rating="$ctrl.setRating(movie,value)"></movie-rating>
            <div class="secondary-content">
              <a ng-link="['Detail',{id:movie.id},'Overview']"><i class="material-icons">trending_up</i></a>
              <i class="material-icons" style="cursor:pointer" ng-click="$ctrl.moreRating(movie)">add</i>
              <i class="material-icons" style="cursor:pointer" ng-click="$ctrl.lessRating(movie)">remove</i>
              <button ng-click="$ctrl.goTo(movie.id)" class="btn waves-effect waves-light">ir a {{movie.id}}</button>
            </div>
          </li>
        </ul>
        <accordion>
          <accordion-panel header="Primero" icon="whatshot" body="este es el primer panel">
            este es el primer panel
          </accordion-panel>
          <accordion-panel header="Segundo" icon="filter_drama" body="este es el segundo panel">
            este es el segundo panel
          </accordion-panel>
        </acordion>
      </div>
    `
  }

  function miController($http) {
    var vm = this;
    vm.title   = `Lista de Peliculas`;
    vm.movies  = [];
    vm.setRating = setRating;
    vm.moreRating = moreRating;
    vm.lessRating = lessRating;
    vm.goTo = goTo;
    vm.$onInit = onInit;

    function onInit() {
      fetchMovies($http).then((data) => {
        vm.movies = data;
      });
    };

    function setRating(movie,newRating) {
      if(newRating > 0 && newRating < 6) {
        movie.rating = newRating;
      }
    }

    function moreRating(movie) {
      if (movie.rating < 5) {
        movie.rating++
      }
    }

    function lessRating(movie) {
      if (movie.rating > 1) {
        movie.rating--
      }
    }

    function goTo(id){
      vm.$router.navigate(['Detail',{id:id},'Overview']);
    }
  }

  function fetchMovies($http) {
    return $http.get('http://localhost:3000/movies.json')
      .then((response) => response.data)
      .catch((err) => err)
  }

})();
