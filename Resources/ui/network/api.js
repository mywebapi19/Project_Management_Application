var BASE_URL = "http://192.168.43.61/pma/";

function api(url, params, successCallback, failCallback) {

	url = BASE_URL + "send";

	Ti.API.info(JSON.stringify(params));

	var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {

			var response = this.responseText;
			successCallback(response);

		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {

			var errorResponse = e.error;
			failCallback();

		},
		timeout : 5000 // in milliseconds
	});

	// Prepare the connection.
	client.open("POST", url);

	// Send the request.
	client.send(params);

}

module.exports = api;
