var Backbone = require('backbone');
var $ = require('jquery');



var Planet = Backbone.Model.extend({
  // getStats: function(){
  //return this.get('name') + this.get('terrain');
//}

});

var PlanetCollection = Backbone.Collection.extend({
  model: Planet,
  url: 'http://swapi.co/api/planets/',
  parse: function(data){ //Do this in order to grab the results from your ajax request.
    return data.results;
  }

});

var planetAttribute = new PlanetCollection()

console.log(planetAttribute.toJSON());

// planetAttribute.fetch().done(function(){ //fetch knows to search for the url within the collection.
//   planetAttribute.each(function(planet){
//     var planetTypes = planet.get('name');//set as variable
//     // console.log(planetTypes);
//   })
//   console.log(planetAttribute.toJSON());
// })


console.log(planetAttribute);




module.exports = {
  'Planet': Planet,
  'PlanetCollection': PlanetCollection
};
