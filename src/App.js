'use strict';

var InputViewModel = require( 'brjstodo/input/InputViewModel' );
var ItemsViewModel = require( 'brjstodo/items/ItemsViewModel' );

var KnockoutComponent = require( 'br/knockout/KnockoutComponent' );

var App = function() {
	var inputViewModel = new InputViewModel();
	var inputComponent =
		new KnockoutComponent( 'brjstodo.input.view-template', inputViewModel );

	var itemsViewModel = new ItemsViewModel();
	var itemsComponent =
		new KnockoutComponent( 'brjstodo.items.view-template', itemsViewModel );

  var todoAppEl = document.getElementById( 'todoapp' );
	todoAppEl.appendChild( inputComponent.getElement() );
	todoAppEl.appendChild( itemsComponent.getElement() );
};

module.exports = App;
