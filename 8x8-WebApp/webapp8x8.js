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

var LightOff = "TextGenerator";
var MACAddress = "ALL";
var ConnectionStatus;

/*------------------------------------------------
 * Tap the button to Specific Tab
 ************************************************/
function ToTapToLight() {
  window.location.replace("TapToLight.html");
  LightOff = "TapToLight";
  console.log(LightOff);
}

function ToTapToTextGenerator() {
  window.location.replace("TapToTextGenerator.html");
  //LightOff = "TextGenerator";
  //console.log(LightOff);
}

function TapToLightLoaded(){
	LightOff="TapToLight";
	console.log(LightOff);
}

function ToTapToLaunchpad() {
  window.location.replace("TapToLaunchpad.html");
}

function ToTapToSettings() {
  window.location.replace("TapToSettings.html");
}

function ToTapToAbout() {
  window.location.replace("TapToAbout.html");
}

function ToTapToSettings() {
  window.location.replace("TapToSettings.html");
}


// Create a client instance: Broker, Port, Websocket Path, Client ID
client = new Paho.MQTT.Client("mqtt.eclipse.org", Number(80), "/mqtt", "clientId");

// set callback handlers
client.onConnectionLost = function (responseObject) {
  console.log("Connection Lost: " + responseObject.errorMessage);
}

client.onMessageArrived = function (message) {
  console.log("Message Arrived: " + message.payloadString);
}

// Called when the connection is made
function onConnect() {
  console.log("Connected!");
  ConnectionStatus = "Connected";

	  console.log(LightOff);
  var messagepayloadjson_Command = new Object();
  messagepayloadjson_Command.cmd = "LightOff";
  messagepayloadjson_Command.adr = MACAddress;//"FF22DDAA0011"
	
  var messagepayloadstring_Command = JSON.stringify(messagepayloadjson_Command);
  console.log(messagepayloadstring_Command);
  var message_Command = new Paho.MQTT.Message(messagepayloadstring_Command);
  console.log(message_Command);
  message_Command.destinationName = "LED88ESP32/Command";
  message_Command.qos = 0;
  client.send(message_Command);
}

// Connect the client, providing an onConnect callback
client.connect({
  onSuccess: onConnect
});




/*------------------------------------------------
 * Tap the button to home
 ************************************************/
function ToTapToHome() {
  window.location.replace("TapToHomepage.html");
}

/*------------------------------------------------
 * In the Text Generator
 ************************************************/

function openColorPicker() {
  document.getElementById("colorPicker_Modal").style.display = "block";
}

function closeColorPicker() {
  document.getElementById("colorPicker_Modal").style.display = "none";
}

window.onclick = function (event) {
  if (event.target == document.getElementById("colorPicker_Modal")) {
    document.getElementById("colorPicker_Modal").style.display = "none";
  }
}

var color_Hex = "#f0f0f0";
var color_Hex_TtL = "ff0000";

var colorPicker = new iro.ColorPicker("#picker", {
  // Set the size of the color picker
  width: 200,
  // Set the initial color to pure red
  color: "#ff0000"
});
// listen to a color picker's color:change event
// color:change callbacks receive the current color
colorPicker.on('color:change', function (color) {
  // log the current color as a HEX string
  console.log(color.hexString);
  color_Hex = color.hexString;
  color_Hex_TtL = color.hexString;
});


var result;
var Red = 255;
var Green = 0;
var Blue = 0;

function setColorPicker() {
  document.getElementById("colorPicker_Modal").style.display = "none";
  document.getElementById("btnColorPicker").style.backgroundColor = color_Hex;
  var red, green, blue;
  color_Hex = color_Hex.replace('#', '');
  Red = parseInt(color_Hex.substring(0, 2), 16);
  Green = parseInt(color_Hex.substring(2, 4), 16);
  Blue = parseInt(color_Hex.substring(4, 6), 16);

  result = 'rgba(' + Red + ',' + Green + ',' + Blue + ')';

  console.log(result);
  //console.log("rgb("+ +r + "," + +g + "," + +b + ")");
}

function startConnect() {

  console.log(LightOff);
  var messagepayloadjson_Command = new Object();
  messagepayloadjson_Command.cmd = "TextGenerator";
  messagepayloadjson_Command.adr = MACAddress;//"FF22DDAA0011"
	
  var messagepayloadstring_Command = JSON.stringify(messagepayloadjson_Command);
  console.log(messagepayloadstring_Command);
  var message_Command = new Paho.MQTT.Message(messagepayloadstring_Command);
  console.log(message_Command);
  message_Command.destinationName = "LED88ESP32/Command";
  message_Command.qos = 0;
  client.send(message_Command);

	
  // Publish a Message
  var messagepayloadjson = new Object();

  messagepayloadjson.txt = document.getElementById('txtbox_Text').value;
  messagepayloadjson.r = Red;
  messagepayloadjson.g = Green;
  messagepayloadjson.b = Blue
  messagepayloadjson.spd = document.getElementById('range_Speed').value;

  var messagepayloadstring = JSON.stringify(messagepayloadjson);
  console.log(messagepayloadstring);
  var message = new Paho.MQTT.Message(messagepayloadstring);
  message.destinationName = "LED88ESP32/TextGenerator";
  message.qos = 0;
  client.send(message);
	
  var messagepayloadjson_Brightness = new Object();
  messagepayloadjson_Brightness.br = document.getElementById('range_Brightness').value;
  var messagepayloadstring_Brightness = JSON.stringify(messagepayloadjson_Brightness);
  console.log(messagepayloadstring_Brightness);
  var message_Brightness = new Paho.MQTT.Message(messagepayloadstring_Brightness);
  message_Brightness.destinationName = "LED88ESP32/Brightness";
  message_Brightness.qos = 0;
  client.send(message_Brightness);

}

function range_Brightness_txtChange() {
  document.getElementById('range_Brightness_txt').value = document.getElementById('range_Brightness').value;
}
function range_Speed_txtChange() {
  document.getElementById('range_Speed_txt').value = document.getElementById('range_Speed').value;
}

/*------------------------------------------------
 * In the Tap-to-Light
 ************************************************/
function range_Brightness_TtLChange() {
  document.getElementById('range_Brightness_TtLTxt').value = document.getElementById('range_Brightness_TtL').value;
}

var LED_Pixel = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];
//rgbLED[0][0] = A1
//var LED_RGB = [
//	['(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)'],
//	['(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)'],
//	['(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)'],
//	['(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)'],
//	['(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)'],
//	['(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)'],
//	['(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)'],
//	['(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)','(0,0,0)']
//];

var Row_TtL;
var Col_TtL;
var Red_TtL = 255;
var Green_TtL = 0;
var Blue_TtL = 0;
var On_TtL;

function openColorPicker_TtL() {
  document.getElementById("colorPicker_Modal_TtL").style.display = "block";
}

function closeColorPicker_TtL() {
  document.getElementById("colorPicker_Modal_TtL").style.display = "none";
}
// listen to a color picker's color:change event
// color:change callbacks receive the current color
var result_TtL;

function setColorPicker_TtL() {

  console.log("Color in Hex of Tap to Light : " + color_Hex_TtL);
  document.getElementById("colorPicker_Modal_TtL").style.display = "none";
  document.getElementById("btnColorPicker_TtL").style.backgroundColor = color_Hex_TtL;

  color_Hex_TtL = color_Hex_TtL.replace('#', '');
  Red_TtL = parseInt(color_Hex_TtL.substring(0, 2), 16);
  Green_TtL = parseInt(color_Hex_TtL.substring(2, 4), 16);
  Blue_TtL = parseInt(color_Hex_TtL.substring(4, 6), 16);
	
  result_TtL = 'rgba(' + Red_TtL + ',' + Green_TtL + ',' + Blue_TtL + ')';

  console.log(result_TtL);
  console.log(color_Hex_TtL);
}

function TapToLightBtn(cell) {
  console.log("Cell triggered: " + cell);
  var i
  var j;

  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      if ((i.toString() + j.toString()) == cell.toString()) {
        console.log("String linked: " + i.toString() + j.toString());
        if (LED_Pixel[i][j] == 0) {
          LED_Pixel[i][j] = 1;
          Row_TtL = i;
          Col_TtL = j;
          On_TtL = 1;
          console.log("Cell to on: " + cell);
          console.log(color_Hex_TtL);
          document.getElementById(cell).style.background = "#" + color_Hex_TtL;
        } else if (LED_Pixel[i][j] == 1) {
          LED_Pixel[i][j] = 0;
          Row_TtL = i;
          Col_TtL = j;
          On_TtL = 0;
			Red_TtL = 0;
			Green_TtL = 0;
			Blue_TtL = 0;
          console.log("Cell to off: " + cell);
          document.getElementById(cell).style.background = "#f8f8ff";
        }
      }
    }

  }
	

  console.log(LightOff);
  var messagepayloadjson_Command = new Object();
  messagepayloadjson_Command.cmd = "TapToLight";
  messagepayloadjson_Command.adr = MACAddress;//"FF22DDAA0011"
	
  var messagepayloadstring_Command = JSON.stringify(messagepayloadjson_Command);
  console.log(messagepayloadstring_Command);
  var message_Command = new Paho.MQTT.Message(messagepayloadstring_Command);
  console.log(message_Command);
  message_Command.destinationName = "LED88ESP32/Command";
  message_Command.qos = 0;
  client.send(message_Command);


  console.log("Row_TtL: " + Row_TtL + "Col_TtL: " + Col_TtL + "On_TtL: " + On_TtL);
  // Publish a Message
  var messagepayloadjson_TtL = new Object();
  //messagepayloadjson_TtL.br = document.getElementById('range_Brightness_TtL').value;
  messagepayloadjson_TtL.col = Col_TtL;
  messagepayloadjson_TtL.row = Row_TtL;
  messagepayloadjson_TtL.on = On_TtL;
  messagepayloadjson_TtL.r = Red_TtL;
  messagepayloadjson_TtL.g = Green_TtL;
  messagepayloadjson_TtL.b = Blue_TtL;

  var messagepayloadstring_TtL = JSON.stringify(messagepayloadjson_TtL);
  console.log(messagepayloadstring_TtL);
  var message = new Paho.MQTT.Message(messagepayloadstring_TtL);
  message.destinationName = "LED88ESP32/Pixels";
  message.qos = 0;
  client.send(message);
	
  var messagepayloadjson_Brightness_TtL = new Object();
  messagepayloadjson_Brightness_TtL.br = document.getElementById('range_Brightness_TtL').value;
  var messagepayloadstring_Brightness_TtL = JSON.stringify(messagepayloadjson_Brightness_TtL);
  console.log(messagepayloadstring_Brightness_TtL);
  var message_Brightness = new Paho.MQTT.Message(messagepayloadstring_Brightness_TtL);
  message_Brightness.destinationName = "LED88ESP32/Brightness";
  message_Brightness.qos = 0;
  client.send(message_Brightness);
  
}
