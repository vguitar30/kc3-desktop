QUnit.test( "Chrome", function( assert ) {
	assert.ok(chrome, "OK chrome");
});

QUnit.test( "Chrome App API", function( assert ) {
	assert.ok(chrome.accessibilityFeatures, "OK chrome.accessibilityFeatures");
});

QUnit.test( "Chrome Extension API", function( assert ) {
	assert.ok(chrome.cookies, "OK chrome.cookies");
});
/*
try { console.log("chrome.accessibilityFeatures", chrome.accessibilityFeatures); }catch(e){  }
try { console.log("chrome.alarms", chrome.alarms); }catch(e){  }
try { console.log("chrome.app.runtime", chrome.app.runtime); }catch(e){  }
try { console.log("chrome.app.window", chrome.app.window); }catch(e){  }
try { console.log("chrome.bluetooth", chrome.bluetooth); }catch(e){  }
try { console.log("chrome.bluetoothLowEnergy", chrome.bluetoothLowEnergy); }catch(e){  }
try { console.log("chrome.bluetoothSocket", chrome.bluetoothSocket); }catch(e){  }
try { console.log("chrome.browser", chrome.browser); }catch(e){  }
try { console.log("chrome.commands", chrome.commands); }catch(e){  }
try { console.log("chrome.contextMenus", chrome.contextMenus); }catch(e){  }
try { console.log("chrome.documentScan", chrome.documentScan); }catch(e){  }
try { console.log("chrome.events", chrome.events); }catch(e){  }
try { console.log("chrome.extensionTypes", chrome.extensionTypes); }catch(e){  }
try { console.log("chrome.fileSystem", chrome.fileSystem); }catch(e){  }
try { console.log("chrome.fileSystemProvider", chrome.fileSystemProvider); }catch(e){  }
try { console.log("chrome.gcm", chrome.gcm); }catch(e){  }
try { console.log("chrome.hid", chrome.hid); }catch(e){  }
try { console.log("chrome.i18n", chrome.i18n); }catch(e){  }
try { console.log("chrome.identity", chrome.identity); }catch(e){  }
try { console.log("chrome.idle", chrome.idle); }catch(e){  }
try { console.log("chrome.instanceID", chrome.instanceID); }catch(e){  }
try { console.log("chrome.mdns", chrome.mdns); }catch(e){  }
try { console.log("chrome.mediaGalleries", chrome.mediaGalleries); }catch(e){  }
try { console.log("chrome.notifications", chrome.notifications); }catch(e){  }
try { console.log("chrome.permissions", chrome.permissions); }catch(e){  }
try { console.log("chrome.power", chrome.power); }catch(e){  }
try { console.log("chrome.printerProvider", chrome.printerProvider); }catch(e){  }
try { console.log("chrome.runtime", chrome.runtime); }catch(e){  }
try { console.log("chrome.serial", chrome.serial); }catch(e){  }
try { console.log("chrome.socket", chrome.socket); }catch(e){  }
try { console.log("chrome.sockets.tcp", chrome.sockets.tcp); }catch(e){  }
try { console.log("chrome.sockets.tcpServer", chrome.sockets.tcpServer); }catch(e){  }
try { console.log("chrome.sockets.udp", chrome.sockets.udp); }catch(e){  }
try { console.log("chrome.storage", chrome.storage); }catch(e){  }
try { console.log("chrome.syncFileSystem", chrome.syncFileSystem); }catch(e){  }
try { console.log("chrome.system.cpu", chrome.system.cpu); }catch(e){  }
try { console.log("chrome.system.display", chrome.system.display); }catch(e){  }
try { console.log("chrome.system.memory", chrome.system.memory); }catch(e){  }
try { console.log("chrome.system.network", chrome.system.network); }catch(e){  }
try { console.log("chrome.system.storage", chrome.system.storage); }catch(e){  }
try { console.log("chrome.tts", chrome.bluetooth); }catch(e){  }
try { console.log("chrome.types", chrome.bluetooth); }catch(e){  }
try { console.log("chrome.usb", chrome.bluetooth); }catch(e){  }
try { console.log("chrome.vpnProvider", chrome.bluetooth); }catch(e){  }
try { console.log("chrome.wallpaper", chrome.bluetooth); }catch(e){  }

try { console.log("chrome.cookies", chrome.bluetooth); }catch(e){  }
try { console.log("chrome.webRequest", chrome.bluetooth); }catch(e){  }
try { console.log("chrome.devtools.network", chrome.bluetooth); }catch(e){  }
try { console.log("chrome.devtools.panels", chrome.bluetooth); }catch(e){  }
try { console.log("chrome.desktopCapture", chrome.bluetooth); }catch(e){  }
try { console.log("chrome.debugger", chrome.bluetooth); }catch(e){  }
*/
