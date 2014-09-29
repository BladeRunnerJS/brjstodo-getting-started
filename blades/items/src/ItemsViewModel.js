'use strict';

var ko = require( 'ko' );

/*** New code ***/
var ServiceRegistry = require( 'br/ServiceRegistry' );
/*** End of new code ***/

function ItemsViewModel() {
	this.todos = ko.observableArray( [
		{ title: 'foo' },
		{ title: 'bar' }
	] );

	/*** new code ***/
	this._eventHub = ServiceRegistry.getService( 'br.event-hub' );

	// register to recieve events
	this._eventHub.channel( 'todo-list' ).on( 'todo-added', this._todoAdded, this );
	/*** end of new code ***/
}

/*** new code ***/
ItemsViewModel.prototype._todoAdded = function( added ) {
	this.todos.push( added );
};
/*** end of new code ***/

module.exports = ItemsViewModel;
