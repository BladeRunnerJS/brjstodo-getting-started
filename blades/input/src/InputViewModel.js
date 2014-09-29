'use strict';

var ko = require( 'ko' );
var ServiceRegistry = require( 'br/ServiceRegistry' );

var ENTER_KEY_CODE = 13;

function InputViewModel() {
	this.todoText = ko.observable( '' );

	this._eventHub = ServiceRegistry.getService( 'br.event-hub' );
}

InputViewModel.prototype.keyPressed = function( item, event ) {
	if( event.keyCode === ENTER_KEY_CODE ) {
		var todoTextValue = this.todoText();
		/*** new code ***/
		var eventData = { title: todoTextValue };
		this._eventHub.channel( 'todo-list' ).trigger( 'todo-added', eventData );

		this.todoText( '' );
		/*** end of new code ***/
	}

	return true;
};

module.exports = InputViewModel;
