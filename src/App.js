'use strict';

/*** new code ***/
var InputViewModel = require( 'brjstodo/input/InputViewModel' );
var ItemsViewModel = require( 'brjstodo/items/ItemsViewModel' );

var KnockoutComponent = require( 'br/knockout/KnockoutComponent' );
/*** end of new code ***/

var App = function() {
	/*** new code ***/
	var inputViewModel = new InputViewModel();
	var inputComponent =
		new KnockoutComponent( 'brjstodo.input.view-template', inputViewModel );

	var itemsViewModel = new ItemsViewModel();
	var itemsComponent =
		new KnockoutComponent( 'brjstodo.items.view-template', itemsViewModel );
	/*** end of new code ***/

  var todoAppEl = document.getElementById( 'todoapp' );
	todoAppEl.appendChild( inputComponent.getElement() );
	todoAppEl.appendChild( itemsComponent.getElement() );
};

module.exports = App;
