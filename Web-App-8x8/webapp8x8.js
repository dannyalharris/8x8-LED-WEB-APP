// JavaScript Document



function ToTapToLightPage(){
	window.location.replace("TapToLight.html");
}

function ToTapToTextGenerator(){
	window.location.replace("TapToTextGenerator.html");
}

function ToTapToLaunchpad(){
	window.location.replace("TapToLaunchpad.html");
}

function ToTapToSettings(){
	window.location.replace("TapToSettings.html");
}

function ToTapToHome(){
	window.location.replace("WebApp8x8.html");
}

var Paho;
var client = new Paho.MQTT.Client();

function startConnect() {
	
	client.connect("mqtt.eclipse.org", 1883, 60);
	
	message = f'{{"Pattern": "{pt}", "Brightness": {br}, "Color": [{r}, {g}, {b}], "Param" : "{prm}"}}'
        print(message)
        client.publish("led88/8x8LED", message)
}
