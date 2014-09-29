var AppTest = TestCase("AppTest");

var App = require("brjstodo/App");

AppTest.prototype.testSomething = function() {
	assertEquals( "hello world!", App.getHello() );
};
