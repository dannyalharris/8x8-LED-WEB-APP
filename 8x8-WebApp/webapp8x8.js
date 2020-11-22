// JavaScript Document

/*------------------------------------------------
 * Created by:
 * Kai Li, Ong
 * Danial Hawari
 *
 * Winter Semester 2020
 *
 * 8x8 WepApp Project
 *
 * More informations: http://www.hit-karlsruhe.de/hit-info/info-ws20/8x8-App
 *
 ************************************************/

// Create a client instance: Broker, Port, Websocket Path, Client ID
client = new Paho.MQTT.Client("mqtt.eclipse.org", Number(80), "/mqtt", "clientId");

// set callback handlers
client.onConnectionLost = function (responseObject) {
    console.log("Connection Lost: "+responseObject.errorMessage);
}

client.onMessageArrived = function (message) {
  console.log("Message Arrived: "+message.payloadString);
}

// Called when the connection is made
function onConnect(){
	console.log("Connected!");
}

// Connect the client, providing an onConnect callback
client.connect({
	onSuccess: onConnect
});
	
/*------------------------------------------------
 * Tap the button to home
 ************************************************/
function ToTapToHome(){
	window.location.replace("WebApp8x8.html");
}

/*------------------------------------------------
 * Tap the button to text generator
 ************************************************/

function openColorPicker(){	document.getElementById("colorPicker_Modal").style.display = "block";	
}

function closeColorPicker(){
	document.getElementById("colorPicker_Modal").style.display = "none";
}

window.onclick = function(event){
	if(event.target == document.getElementById("colorPicker_Modal")){
		document.getElementById("colorPicker_Modal").style.display = "none";
	}
}

var color_Hex = "#f0f0f0";

var colorPicker = new iro.ColorPicker("#picker", {
  // Set the size of the color picker
  width: 200,
  // Set the initial color to pure red
  color: "#f00"
});
// listen to a color picker's color:change event
// color:change callbacks receive the current color
colorPicker.on('color:change', function(color) {
  // log the current color as a HEX string
  console.log(color.hexString);
	color_Hex = color.hexString;
});

var red,green,blue;
var result;
function setColorPicker(){
	document.getElementById("colorPicker_Modal").style.display = "none";
	document.getElementById("btnColorPicker").style.backgroundColor = color_Hex;
	
	color_Hex = color_Hex.replace('#','');
    red = parseInt(color_Hex.substring(0,2), 16);
    green = parseInt(color_Hex.substring(2,4), 16);
    blue = parseInt(color_Hex.substring(4,6), 16);

    result = 'rgba('+red+','+green+','+blue+')';
	
	console.log(result);
	//console.log("rgb("+ +r + "," + +g + "," + +b + ")");
}

function startConnect() {

// Publish a Message
var messagepayloadjson = new Object();
	
messagepayloadjson.pt= document.getElementById('txtbox_Text').value;
messagepayloadjson.br= document.getElementById('range_Brightness').value;
messagepayloadjson.r= red;
messagepayloadjson.g= green;
messagepayloadjson.b= blue

var messagepayloadstring = JSON.stringify(messagepayloadjson);
var message = new Paho.MQTT.Message(messagepayloadstring);
message.destinationName = "8x8-WebApp/TextErzeugung";
message.qos = 0;
client.send(message);
	
}

function range_Brightness_txtChange(){
	document.getElementById('range_Brightness_txt').value = document.getElementById('range_Brightness').value
}

/*------------------------------------------------
 * Tap the button to Tap-To-Light
 ************************************************/

function ToTapToLight(){
	window.location.replace("Tap-To-Light.html");
}

function ToTapToTextGenerator(){
	window.location.replace("TextGenerator.html");
}

function ToTapToLaunchpad(){
	window.location.replace("TapToLaunchpad.html");
}

function ToTapToSettings(){
	window.location.replace("TapToSettings.html");
}

