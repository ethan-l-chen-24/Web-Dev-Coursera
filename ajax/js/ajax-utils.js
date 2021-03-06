// IIFE
(function(global) {

    // sets up a fake namespace
    var ajaxUtils = {};

    // returns a HTTP request object
    function getRequestObject() {
        if(window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        } else if(window.ActiveXObject) {
            // for very old browsers
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        } else {
            global.alert("Ajax is not supported!");
            return null;
        }
    }

    ajaxUtils.sendGetRequest = 
        function(requestUrl, responseHandler, isJsonResponse) {
            var request = getRequestObject();
            request.onreadystatechange = 
                function() {
                    handleResponse(request, responseHandler, isJsonResponse);
                };
            request.open("GET", requestUrl, true); // true denotes asynchronous
            request.send(null);
        };

    function handleResponse(request, responseHandler, isJsonResponse) {
        // default to true
        if(isJsonResponse == undefined) {
            isJsonResponse = true;
        }

        if(isJsonResponse) {
            responseHandler(JSON.parse(request.responseText));
        }
        if((request.readyState == 4) && (request.status == 200)) {
            responseHandler(request);
        }
    }

    // expose to global
    global.$ajaxUtils = ajaxUtils;

})(window);