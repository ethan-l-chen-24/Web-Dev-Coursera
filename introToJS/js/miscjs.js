// IIFE
(function(window) {

    // fake namespace
    var ethanGreeter = {};
    ethanGreeter.name = "ethan";
    ethanGreeter.sayHi = function(name) {
        console.log("hi " + ethanGreeter.name);
    }

    window.ethanGreeter = ethanGreeter;
    
})(window);