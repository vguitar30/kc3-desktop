var gui = require("nw.gui");
require("jquery");

function openUrl(){
	var newTab = $(".factory .tab").clone().appendTo(".tabs");
	newTab.html("1");
}

window.onload = function() {
	//var win = gui.Window.get();
	
	/*var DebugConnect = require('chrome-remote-interface')({
		port: 9227
	});

	DebugConnect.on("connect", function(chrome){
		with (chrome) {
			Network.responseReceived(function (params) {
				Network.getResponseBody({
					requestId: params.requestId
				}, function(error, response){
					document.getElementById("logs").innerHTML = response.body;
				});
			});
			Network.enable();
		}
	});

	DebugConnect.on("error", function(err){
		console.log(err);
	});*/
	
	//gui.Window.get().show();
};
