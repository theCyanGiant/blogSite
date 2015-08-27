$(function() {

    Parse.$ = jQuery;

    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("pIt3SBZJ7g2eQrNtJXc7LpkHAWHpJ0d1REpPgD9C", "4j8T2wcY7Y2aCOVDB8W3axJdTZDPLXRhz18gu0X7");

    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });

});
