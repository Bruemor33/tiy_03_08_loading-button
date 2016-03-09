var $ = require('jquery');
var Handlebars = require('handlebars');
var Planet = require('./models/load'); //My collection is tied to my model
var planetAttribute = new Planet.PlanetCollection();



console.log("Hello World!");

$('.submission').click(function(){
$('.submission').html('Loading...');
this.disabled = true;

  planetAttribute.fetch().done(function(){
    planetAttribute.each(function(planet){
      console.log(planet);
    var planetTypes = (planet.get('name'));//set as variable
    var source   = $("#profile-page").html();
    var template = Handlebars.compile(source);
    var html = template(planet.toJSON());
    $('.content-container').append(html);
    })
    $('.submission').html('Submit');
    console.log(planetAttribute);
    this.disabled = false;

  })

  console.log('hello world');
});
