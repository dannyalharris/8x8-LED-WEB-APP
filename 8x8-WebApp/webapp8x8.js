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
	window.location.replace("TapToHomepage.html");
}

/*------------------------------------------------
 * Tap the button to Specific Tab
 ************************************************/
function ToTapToLight(){
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

function ToTapToAbout(){
	window.location.replace("TapToAbout.html");
}

function ToTapToSettings(){
	window.location.replace("TapToSettings.html");
}

/*------------------------------------------------
 * In the Text Generator
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
var color_Hex_TtL = "f00";

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
	color_Hex_TtL = color.hexString;
	//document.getElementById(cell).style. = color.hexString;
});


var result;
function setColorPicker(){
	document.getElementById("colorPicker_Modal").style.display = "none";
	document.getElementById("btnColorPicker").style.backgroundColor = color_Hex;
	var red,green,blue;
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
	document.getElementById('range_Brightness_txt').value = document.getElementById('range_Brightness').value;
}

function range_Brightness_TtLChange(){
	document.getElementById('range_Brightness_TtLTxt').value = document.getElementById('range_Brightness_TtL').value;
}

//var A1 = document.getElementById('A1');

//var rgbLED = []
var rgbLED = [
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0]
];
//rgbLED[0][0] = A1

messagepayloadjson.br= document.getElementById('range_Brightness_TtL').value;
messagepayloadjson.r= red;
messagepayloadjson.g= green;
messagepayloadjson.b= blue


function openColorPicker_TtL(){	document.getElementById("colorPicker_Modal_TtL").style.display = "block";	
}

function closeColorPicker_TtL(){
	document.getElementById("colorPicker_Modal_TtL").style.display = "none";
}
// listen to a color picker's color:change event
// color:change callbacks receive the current color
var result_TtL;

function setColorPicker_TtL(){
	
	console.log(color_Hex_TtL);
	document.getElementById("colorPicker_Modal_TtL").style.display = "none";
	document.getElementById("btnColorPicker_TtL").style.backgroundColor = color_Hex_TtL;
	var red,green,blue;
	
	color_Hex_TtL = color_Hex_TtL.replace('#','');
    red = parseInt(color_Hex_TtL.substring(0,2), 16);
    green = parseInt(color_Hex_TtL.substring(2,4), 16);
    blue = parseInt(color_Hex_TtL.substring(4,6), 16);

    result_TtL = 'rgba('+red+','+green+','+blue+')';
	
	console.log(result_TtL);
	console.log(color_Hex_TtL);
}

function TapToLightBtn(cell){
	console.log(cell);
	var i;
	
	
	console.log("#" + color_Hex_TtL);
	
	for(i= 0; i < 8 ; i++)
	{
		if(cell == "A" + i)
		{
			if(rgbLED[0][i] == 0)
			{
				rgbLED[0][i] = 1;
				console.log(cell);
				document.getElementById(cell).style.background = "#" + color_Hex_TtL;
			}else if (rgbLED[0][i] == 1)
			{
				rgbLED[0][i] = 0;
				console.log(cell);
				document.getElementById(cell).style.background = "#f8f8ff";
			}
			
		}
		if(cell == "B" + i)
		{
			if(rgbLED[1][i] == 0)
			{
				rgbLED[1][i] = 1;
				console.log(cell);
				document.getElementById(cell).style.background = "#" + color_Hex_TtL;
			}else if (rgbLED[1][i] == 1)
			{
				rgbLED[1][i] = 0;
				console.log(cell);
				document.getElementById(cell).style.background = "#f8f8ff";
			}
			
		}
		if(cell == "C" + i)
		{
			if(rgbLED[2][i] == 0)
			{
				rgbLED[2][i] = 1;
				console.log(cell);
				document.getElementById(cell).style.background = "#" + color_Hex_TtL;
			}else if (rgbLED[2][i] == 1)
			{
				rgbLED[2][i] = 0;
				console.log(cell);
				document.getElementById(cell).style.background = "#f8f8ff";
			}
			
		}
		if(cell == "D" + i)
		{
			if(rgbLED[3][i] == 0)
			{
				rgbLED[3][i] = 1;
				console.log(cell);
				document.getElementById(cell).style.background = "#" + color_Hex_TtL;
			}else if (rgbLED[3][i] == 1)
			{
				rgbLED[3][i] = 0;
				console.log(cell);
				document.getElementById(cell).style.background = "#f8f8ff";
			}
			
		}
		if(cell == "E" + i)
		{
			if(rgbLED[4][i] == 0)
			{
				rgbLED[4][i] = 1;
				console.log(cell);
				document.getElementById(cell).style.background = "#" + color_Hex_TtL;
			}else if (rgbLED[4][i] == 1)
			{
				rgbLED[4][i] = 0;
				console.log(cell);
				document.getElementById(cell).style.background = "#f8f8ff";
			}
			
		}
		if(cell == "F" + i)
		{
			if(rgbLED[5][i] == 0)
			{
				rgbLED[5][i] = 1;
				console.log(cell);
				document.getElementById(cell).style.background = "#" + color_Hex_TtL;
			}else if (rgbLED[5][i] == 1)
			{
				rgbLED[5][i] = 0;
				console.log(cell);
				document.getElementById(cell).style.background = "#f8f8ff";
			}
			
		}
		if(cell == "G" + i)
		{
			if(rgbLED[6][i] == 0)
			{
				rgbLED[6][i] = 1;
				console.log(cell);
				document.getElementById(cell).style.background = "#" + color_Hex_TtL;
			}else if (rgbLED[6][i] == 1)
			{
				rgbLED[6][i] = 0;
				console.log(cell);
				document.getElementById(cell).style.background = "#f8f8ff";
			}
			
		}
		if(cell == "H" + i)
		{
			if(rgbLED[7][i] == 0)
			{
				rgbLED[7][i] = 1;
				console.log(cell);
				document.getElementById(cell).style.background = "#" + color_Hex_TtL;
			}else if (rgbLED[7][i] == 1)
			{
				rgbLED[7][i] = 0;
				console.log(cell);
				document.getElementById(cell).style.background = "#f8f8ff";
			}
			
		}
	}
	//console.log(rgbLED);
	
	var myJSON = JSON.stringify(rgbLED);
	console.log(myJSON);
	var message = new Paho.MQTT.Message(myJSON);
	message.destinationName = "8x8-WebApp/TextErzeugung";
	message.qos = 0;
	client.send(message);
}
