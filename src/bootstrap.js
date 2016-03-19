var gui = require("nw.gui");

/*------------------------------
TRAY MENU
------------------------------*/
var trayMenu = new gui.Menu();
trayMenu.append(new gui.MenuItem({
	label: "Exit KC3改 Desktop",
	type: 'normal',
	click: function(){ gui.App.quit(); }
}));

var tray = new gui.Tray({
	title: 'KC3改 Desktop',
	icon: BROWSER_PATH+'/assets/img/logo/32.png',
	menu: trayMenu
});

/*------------------------------
MAIN BROWSER
------------------------------*/
gui.Window.open(BROWSER_PATH+"/browser.html", {
	title : "KC3改 Desktop",
	position: "center",
	frame: true,
	min_width: 800,
	min_height: 480,
	focus: true
}, function(win){
	win.maximize();
	win.on('new-win-policy', function(frame, url, policy) {
		policy.ignore();
		win.eval(null, "openUrl(\"" + url + "\");");
	});
});
