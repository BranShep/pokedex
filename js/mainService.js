angular.module('pokeApp').service('mainService', function($http){
  this.getPokemonSpecies = function(){
    return $http.get("https://pokeapi.co/api/v2/pokemon-species/?limit=721").then(function(response){
      console.log(response.data);

      var poo = [];
      for(i = 0; i < response.data.results.length; i++){
        var pokemon = {name: response.data.results[i].name,
                       id: i + 1,
                       url: response.data.results[i].url,
                      }

                      poo.push(pokemon);
      }
      //poo.push({name: 'Dan Wood', id: 696969, img: 'images/dan.jpg'})

      return poo;
    });
  };

  this.getPokemon = function(){
    return $http.get("https://pokeapi.co/api/v2/pokemon/?limit=721").then(function(response){
      var poo = [];
      for(i = 0; i < response.data.results.length; i++){
        var pokemon = {name: response.data.results[i].name,
                       id: i + 1,
                       url: response.data.results[i].url
                      }

                      poo.push(pokemon);
      }
      //poo.push({name: 'Dan Wood', id: 696969, img: 'images/dan.jpg'})

      return poo;
    });
  };

  this.getType = function(id){
    return $http.get("https://pokeapi.co/api/v2/pokemon/" + id);
  }

  this.getEvolutions = function(url){
    return $http.get(url);
  }
  this.getSpecificPokemon = function(url){
    return $http.get(url).then(function(response){
      var poo = [];
      console.log(response);
        var pokemon = {name: response.data.name,
                       id: response.data.id,
                       evoUrl: response.data.evolution_chain.url,
                       genus: response.data.genera[0].genus,
                       height: response.data.height,
                       weight: response.data.weight
                      }

                      poo.push(pokemon);

      return poo;
    })
  }

  this.getPokeAttacks = function(url){
    return $http.get(url).then(function(response){
      var poo = [];
      console.log(response);
        var pokemon = {types: response.data.types,
                       stats: response.data.stats,
                       sprites: response.data.sprites,
                       moves: response.data.moves
                      }

                      poo.push(pokemon);

      return poo;
    })
  }

  this.getEvolvesFrom = function(id){
    return $http.get("http://pokeapi.co/api/v2/pokemon-species/" + id);
  }
});
