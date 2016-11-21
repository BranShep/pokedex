angular.module('pokeApp').controller('mainCtrl', function($scope, mainService, $filter){


  $scope.getPokemonSpecies = function() {
    mainService.getPokemonSpecies().then(function(response){
      $scope.pokemonSpecies = response;
      console.log($scope.pokemonSpecies);
    });
  }

$scope.getPokemonSpecies();

$scope.getPokemon = function() {
  mainService.getPokemon().then(function(response){
    $scope.pokemon = response;
    console.log(response);
  });
}

$scope.getPokemon();

$scope.getRandomNumbers = function() {
  $scope.randomNumberLeft = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  $scope.randomNumberRight = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

$scope.getRandomPokemon = function() {
  $scope.randomLeft = $scope.pokemon[Math.floor(Math.random() * $scope.pokemon.length)];
  $scope.randomRight = $scope.pokemon[Math.floor(Math.random() * $scope.pokemon.length)];
  console.log($scope.randomLeft);
  console.log($scope.randomRight);
}

$scope.getWinner = function(left, right){
  $scope.winner;
  if(left > right){
    $scope.winner = "Left";
  }else if(right > left){
    $scope.winner = "Right";
  }
}


$scope.getType = function(id) {
  mainService.getType(id).then(function(response){
    $scope.types = response.data;
    $scope.types.height = Math.round(($scope.types.height/10) * 3.28);
    $scope.types.weight = Math.round(($scope.types.weight/10) * 2.2);
    console.log($scope.types);
    $scope.fire = {'background-image': 'url(../images/fire.png)'};
    $scope.fireSymbol = "../images/fire_symbol.png";
    $scope.grassSymbol = "../images/grass_symbol.png";
    $scope.waterSymbol = "../images/water_symbol.png";
    $scope.electricSymbol = "../images/electric_symbol.png";
    $scope.psychicSymbol = "../images/psychic_symbol.png";
    $scope.fightingSymbol = "../images/fighting_symbol.png";
    $scope.ghostSymbol = "../images/ghost_symbol.png";
    $scope.normalSymbol = "../images/normal_symbol.png";
    $scope.pokeSymbol;
    $scope.water = {'background-image': 'url(../images/water.png)'};
    $scope.grass = {'background-image': 'url(../images/grass.png)'};
    $scope.electric = {'background-image': 'url(../images/electric.png)'};
    $scope.psychic = {'background-image': 'url(../images/psychic.jpg)'};
    $scope.pokeBackground;

    if($scope.types.types.length > 1) {
      if($scope.types.types[0].type.name === 'fire' || $scope.types.types[1].type.name === 'fire'){
            $scope.pokeBackground = $scope.fire;
            $scope.pokeSymbol = $scope.fireSymbol;
          }
      else if($scope.types.types[0].type.name === 'water' || $scope.types.types[1].type.name === 'water'){
            $scope.pokeBackground = $scope.water;
            $scope.pokeSymbol = $scope.waterSymbol;
          }
      else if($scope.types.types[0].type.name === 'grass' || $scope.types.types[1].type.name === 'grass'){
            $scope.pokeBackground = $scope.grass;
           $scope.pokeSymbol = $scope.grassSymbol;
          }
      else if($scope.types.types[0].type.name === 'electric' || $scope.types.types[1].type.name === 'electric'){
                $scope.pokeBackground = $scope.electric;
                $scope.pokeSymbol = $scope.electricSymbol;
          }
      else if($scope.types.types[0].type.name === 'bug' || $scope.types.types[1].type.name === 'bug'){
                $scope.pokeBackground = $scope.grass;
                $scope.pokeSymbol = $scope.grassSymbol;
          }
      else if($scope.types.types[0].type.name === 'psychic' || $scope.types.types[1].type.name === 'psychic'){
                    $scope.pokeBackground = $scope.psychic;
                    $scope.pokeSymbol = $scope.psychicSymbol;
          }
      else if($scope.types.types[0].type.name === 'fighting' || $scope.types.types[1].type.name === 'fighting'){
                        $scope.pokeBackground = $scope.psychic;
                        $scope.pokeSymbol = $scope.fightingSymbol;
          }
      else if($scope.types.types[0].type.name === 'ghost' || $scope.types.types[1].type.name === 'ghost'){
                            $scope.pokeBackground = $scope.psychic;
                            $scope.pokeSymbol = $scope.psychicSymbol;
            }
      else{
            $scope.pokeBackground = {'background': 'grey'};
            $scope.pokeSymbol = $scope.normalSymbol;
          }
    }else {
      if($scope.types.types[0].type.name === 'fire'){
            $scope.pokeBackground = $scope.fire;
            $scope.pokeSymbol = $scope.fireSymbol;
          }
      else if($scope.types.types[0].type.name === 'water'){
            $scope.pokeBackground = $scope.water;
            $scope.pokeSymbol = $scope.waterSymbol;
          }
      else if($scope.types.types[0].type.name === 'grass'){
            $scope.pokeBackground = $scope.grass;
            $scope.pokeSymbol = $scope.grassSymbol;
          }
      else if($scope.types.types[0].type.name === 'bug'){
                $scope.pokeBackground = $scope.grass;
                $scope.pokeSymbol = $scope.grassSymbol;
          }
      else if($scope.types.types[0].type.name === 'electric'){
                $scope.pokeBackground = $scope.electric;
                $scope.pokeSymbol = $scope.electricSymbol;
              }
      else if($scope.types.types[0].type.name === 'psychic'){
                $scope.pokeBackground = $scope.psychic;
                $scope.pokeSymbol = $scope.psychicSymbol;
              }
      else if($scope.types.types[0].type.name === 'fighting'){
                                $scope.pokeBackground = $scope.psychic;
                                $scope.pokeSymbol = $scope.fightingSymbol;
              }
      else if($scope.types.types[0].type.name === 'ghost'){
                                $scope.pokeBackground = $scope.psychic;
                                $scope.pokeSymbol = $scope.psychicSymbol;
              }
      else{
            $scope.pokeBackground = {'background': 'grey'};
            $scope.pokeSymbol = $scope.normalSymbol;
          }
        }
  })
}
  $scope.getSpecificPokemon = function(poke) {
    mainService.getSpecificPokemon(poke).then(function(response){
      $scope.specificPokemon = response;
      console.log($scope.specificPokemon);
      console.log(response[0].evoUrl);

      $scope.getEvolutions(response[0].evoUrl);
    })
  }

  $scope.getPokeAttacks = function(randomPoke) {
    mainService.getPokeAttacks(randomPoke).then(function(response){
      $scope.pokeAttacks = response;
      console.log(response);

    })
  }

  $scope.getFlavorText = function(id) {
    mainService.getEvolvesFrom(id).then(function(response){
      $scope.flavorText = response.data.flavor_text_entries[1].flavor_text;
      console.log(response.data.evolves_from_species);
      if(response.data.evolves_from_species !== null){
        $scope.evolvesFrom = response.data.evolves_from_species.name;
              $scope.showing = false;
      }else {
        $scope.showing = true;
      }

      console.log($scope.showing);
    })
  }


  $scope.getEvolutions = function(url) {
    mainService.getEvolutions(url).then(function(response){
      $scope.evoArr = [];
      if(typeof response.data.chain.evolves_to[0] === 'undefined'){
        $scope.poo = "No Evolutions";
        $scope.evoArr.push($scope.poo);
      }else if(typeof response.data.chain.evolves_to[0].evolves_to[0] === 'undefined'){
        $scope.evolution = response.data.chain.species.name;
        $scope.evolutionTwo = response.data.chain.evolves_to[0].species.name;
        $scope.evoArr.push($scope.evolution);
        $scope.evoArr.push($scope.evolutionTwo);
      }else if(typeof response.data.chain.evolves_to[0].evolves_to[0].evolves_to[0] === 'undefined'){
        $scope.evolution = response.data.chain.species.name;
        $scope.evolutionTwo = response.data.chain.evolves_to[0].species.name;
        $scope.evolutionThree = response.data.chain.evolves_to[0].evolves_to[0].species.name;
        $scope.evoArr.push($scope.evolution);
        $scope.evoArr.push($scope.evolutionTwo);
        $scope.evoArr.push($scope.evolutionThree);
      }
        // if(response.data.chain.evolves_to[0].evolves_to[0] !== undefined){
          // $scope.evolution = response.data.chain.species.name;
          // $scope.evolutionTwo = response.data.chain.evolves_to[0].species.name;
          // $scope.evolutionThree = response.data.chain.evolves_to[0].evolves_to[0].species.name;
          // $scope.evoArr.push($scope.evolution);
          // $scope.evoArr.push($scope.evolutionTwo);
          // $scope.evoArr.push($scope.evolutionThree);
        // }else if(response.data.chain.evolves_to[0] !== undefined){
          // $scope.evolution = response.data.chain.species.name;
          // $scope.evolutionTwo = response.data.chain.evolves_to[0].species.name;
          // $scope.evoArr.push($scope.evolution);
          // $scope.evoArr.push($scope.evolutionTwo);
        // }else {
        //   $scope.poo = "No Evolutions";
        //   $scope.evoArr.push($scope.poo);
        // }


      console.log($scope.evoArr);
      console.log(response.data);
      console.log(response.data.chain.evolves_to)
      console.log($scope.evolution);
      console.log($scope.evolutionTwo);
      console.log($scope.evolutionThree);
    })
  }



  $scope.reverse = true;

  $scope.sortBy = function(propertyName, pokemon) {
    $scope.reverse = !$scope.reverse;
    $scope.propertyName = propertyName;
    $scope.pokemonSpecies = $filter('orderBy')(pokemon, $scope.propertyName);
  };



});
