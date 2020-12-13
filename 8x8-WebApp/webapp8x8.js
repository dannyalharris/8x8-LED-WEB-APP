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

var LightOff = localStorage.getItem("LightOff");
//var MACAddress = "ALL";
var MACAddress = localStorage.getItem("MACAddress");
var ConnectionStatus;
var BatteryStatusA= localStorage.setItem("BatteryStatusA", "0");
var BatteryStatusB= localStorage.setItem("BatteryStatusB", "0");
var BatteryStatusC= localStorage.setItem("BatteryStatusC", "0");
//= localStorage.setItem("BatteryStatusC", "50");
//console.log("BatteryStatusC : " + localStorage.getItem("BatteryStatusC"));
var BatteryStatusD= localStorage.setItem("BatteryStatusD", "0");
var LDRStatusA= localStorage.setItem("LDRStatusA", "20");
var LDRStatusB= localStorage.setItem("LDRStatusB", "20");
var LDRStatusC= localStorage.setItem("LDRStatusC", "20");
var LDRStatusD= localStorage.setItem("LDRStatusD", "20");
//console.log(localStorage.getItem("MACAddress"));

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
  //window.location.replace("TapToSettings.html");
	document.getElementById('Settings_sidebar').style.display = "block";
}

function ToTapToAbout() {
  window.location.replace("TapToAbout.html");
	console.log(localStorage.getItem("MACAddress"));	
}

function Setting_Open() {
	
	console.log(localStorage.getItem("MACAddress"));
	if(document.getElementById("mySetting").style.display == "none")
	{
		document.getElementById("mySetting").style.display = "block";
		document.getElementById("mySetting").style.width = "auto";
	}else 
	{
		document.getElementById("mySetting").style.display = "none";
	}
	
	if(localStorage.getItem("MACAddress") == "ALL"){
		document.getElementById("AllSet_Toggle").checked = true;
		document.getElementById("SetA_Toggle").checked = true;
		document.getElementById("SetB_Toggle").checked = true;
		document.getElementById("SetC_Toggle").checked = true;
		document.getElementById("SetD_Toggle").checked = true;
	}//else if (localStorage.getItem("MACAddress") == "SetA"){
//		document.getElementById("AllSet_Toggle").checked = false;
//		document.getElementById("SetA_Toggle").checked = true;
//		document.getElementById("SetB_Toggle").checked = false;
//		document.getElementById("SetC_Toggle").checked = false;
//		document.getElementById("SetD_Toggle").checked = false;
//	}else if (localStorage.getItem("MACAddress") == "SetB"){
//		document.getElementById("AllSet_Toggle").checked = false;
//		document.getElementById("SetA_Toggle").checked = false;
//		document.getElementById("SetB_Toggle").checked = true;
//		document.getElementById("SetC_Toggle").checked = false;
//		document.getElementById("SetD_Toggle").checked = false;
//	}else if (localStorage.getItem("MACAddress") == "SetC"){
//		document.getElementById("AllSet_Toggle").checked = false;
//		document.getElementById("SetA_Toggle").checked = false;
//		document.getElementById("SetB_Toggle").checked = false;
//		document.getElementById("SetC_Toggle").checked = true;
//		document.getElementById("SetD_Toggle").checked = false;
//	}else if (localStorage.getItem("MACAddress") == "SetD"){
//		document.getElementById("AllSet_Toggle").checked = false;
//		document.getElementById("SetA_Toggle").checked = false;
//		document.getElementById("SetB_Toggle").checked = false;
//		document.getElementById("SetC_Toggle").checked = true;
//		document.getElementById("SetD_Toggle").checked = false;
//	}
	
	//BatteryStatus
	BatteryStatusA = parseInt(localStorage.getItem("BatteryStatusA"));
	BatteryStatusB = parseInt(localStorage.getItem("BatteryStatusB"));
	BatteryStatusC = parseInt(localStorage.getItem("BatteryStatusC"));
	BatteryStatusD = parseInt(localStorage.getItem("BatteryStatusD"));
	
	//BatteryStatusA
	if(BatteryStatusA <= 25){
		document.getElementById("BatterySetA").src = "images/Battery-Empty.png";
	}else if(BatteryStatusA > 25 && BatteryStatusA <= 50 ){
		document.getElementById("BatterySetA").src = "images/Battery-Less.png";
	}else if(BatteryStatusA >50 && BatteryStatusA <= 75){
		document.getElementById("BatterySetA").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySetA").src = "images/Battery-Full.png";
	}
	//BatteryStatusB
	if(BatteryStatusB <= 25){
		document.getElementById("BatterySetB").src = "images/Battery-Empty.png";
	}else if(BatteryStatusB > 25 && BatteryStatusB <= 50 ){
		document.getElementById("BatterySetB").src = "images/Battery-Less.png";
	}else if(BatteryStatusB >50 && BatteryStatusB <= 75){
		document.getElementById("BatterySetB").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySetB").src = "images/Battery-Full.png";
	}
	//BatteryStatusC
	if(BatteryStatusC <= 25){
		document.getElementById("BatterySetC").src = "images/Battery-Empty.png";
	}else if(BatteryStatusC > 25 && BatteryStatusC <= 50 ){
		document.getElementById("BatterySetC").src = "images/Battery-Less.png";
	}else if(BatteryStatusC >50 && BatteryStatusC <= 75){
		document.getElementById("BatterySetC").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySetC").src = "images/Battery-Full.png";
	}
	//BatteryStatusD
	if(BatteryStatusD <= 25){
		document.getElementById("BatterySetD").src = "images/Battery-Empty.png";
	}else if(BatteryStatusD > 25 && BatteryStatusD <= 50 ){
		document.getElementById("BatterySetD").src = "images/Battery-Less.png";
	}else if(BatteryStatusD >50 && BatteryStatusD <= 75){
		document.getElementById("BatterySetD").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySetD").src = "images/Battery-Full.png";
	}
	
	//LDRStatus
	LDRStatusA = parseInt(localStorage.getItem("LDRStatusA"));
	LDRStatusB = parseInt(localStorage.getItem("LDRStatusB"));
	LDRStatusC = parseInt(localStorage.getItem("LDRStatusC"));
	LDRStatusD = parseInt(localStorage.getItem("LDRStatusD"));
	
	//LDRStatusA
	if(LDRStatusA <= 20){
		document.getElementById("LDRSetA").src = "images/Brightness-Dark.png";
	}else if(LDRStatusA > 20 && LDRStatusA <= 40 ){
		document.getElementById("LDRSetA").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatusA >40 && LDRStatusA <= 60){
		document.getElementById("LDRSetA").src = "images/Brightness-Middle.png";
	}else if(LDRStatusA >60 && LDRStatusA <= 80){
		document.getElementById("LDRSetA").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSetA").src = "images/Brightness-VeryBright.png";
	}
	//LDRStatusB
	if(LDRStatusB <= 20){
		document.getElementById("LDRSetB").src = "images/Brightness-Dark.png";
	}else if(LDRStatusB > 20 && LDRStatusB <= 40 ){
		document.getElementById("LDRSetB").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatusB >40 && LDRStatusB <= 60){
		document.getElementById("LDRSetB").src = "images/Brightness-Middle.png";
	}else if(LDRStatusB >60 && LDRStatusB <= 80){
		document.getElementById("LDRSetB").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSetB").src = "images/Brightness-VeryBright.png";
	}
	//LDRStatusC
	if(LDRStatusC <= 20){
		document.getElementById("LDRSetC").src = "images/Brightness-Dark.png";
	}else if(LDRStatusC > 20 && LDRStatusC <= 40 ){
		document.getElementById("LDRSetC").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatusC >40 && LDRStatusC <= 60){
		document.getElementById("LDRSetC").src = "images/Brightness-Middle.png";
	}else if(LDRStatusC >60 && LDRStatusC <= 80){
		document.getElementById("LDRSetC").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSetC").src = "images/Brightness-VeryBright.png";
	}
	//LDRStatusD
	if(LDRStatusD <= 20){
		document.getElementById("LDRSetD").src = "images/Brightness-Dark.png";
	}else if(LDRStatusD > 20 && LDRStatusD <= 40 ){
		document.getElementById("LDRSetD").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatusD >40 && LDRStatusD <= 60){
		document.getElementById("LDRSetD").src = "images/Brightness-Middle.png";
	}else if(LDRStatusD >60 && LDRStatusD <= 80){
		document.getElementById("LDRSetD").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSetD").src = "images/Brightness-VeryBright.png";
	}
  
}

function AllSet_Toggle(){
	if(document.getElementById("AllSet_Toggle").checked == true){
		document.getElementById("SetA_Toggle").checked = true;
		document.getElementById("SetB_Toggle").checked = true;
		document.getElementById("SetC_Toggle").checked = true;
		document.getElementById("SetD_Toggle").checked = true;
	}else if(document.getElementById("AllSet_Toggle").checked == false){
		document.getElementById("SetA_Toggle").checked = false;	
		document.getElementById("SetB_Toggle").checked = false;	
		document.getElementById("SetC_Toggle").checked = false;	
		document.getElementById("SetD_Toggle").checked = false;	
	}
	localStorage.setItem("MACAddress", "ALL");
}

//function Setting_Close() {
//  document.getElementById("mySetting").style.display = "none";
//}


// Create a client instance: Broker, Port, Websocket Path, Client ID
client = new Paho.MQTT.Client("broker.hivemq.com", Number(8000), "/mqtt", "clientId");

client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;
//client.statusdisplay = function(evt) {StatusDisplay(evt);};

// set callback handlers
//client.onConnectionLost = function (responseObject) {
//  console.log("Connection Lost: " + responseObject.errorMessage);
//}

//client.onMessageArrived = function (message) {
//  console.log("Message Arrived: " + message.payloadString);
//}
	

// Called when the connection is made
function onConnect() {
  console.log("Connected!");
  ConnectionStatus = "Connected";
  client.subscribe("LED88ESP32/BatteryStatus");
  client.subscribe("LED88ESP32/LDRStatus");
	
	
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

function onFailure (message){
	console.log("Connection to host failed");
	client.connect({onSuccess: onConnect});
}

// Connect the client, providing an onConnect callback
client.connect({onSuccess: onConnect});

// Connect the client, providing an onFailure callback
client.connect({onFailure:onFailure});


function onMessageArrived (message){
	if (message.destinationName = "LED88ESP32/BatteryStatus")
		{
			console.log("Message Arrived: " + message.payloadString);
			var batterystatus= message.payloadstring;
			//update value to Battery Status
		}
	else if (message.destinationName = "LED88ESP32/LDRStatus") {
		console.log("Message Arrived: " + message.payloadString);
		var ldrstatus= message.payloadstring;
		//update value to Battery Status
	}
}

/*------------------------------------------------
 * Status Display
 ************************************************/			  
//function StatusDisplay(evt){
//	
//	console.log("Called this StatusDisplay thread");
//	//BatteryStatus
//	BatteryStatusA = parseInt(localStorage.getItem("BatteryStatusA"));
//	BatteryStatusB = parseInt(localStorage.getItem("BatteryStatusB"));
//	BatteryStatusC = parseInt(localStorage.getItem("BatteryStatusC"));
//	BatteryStatusD = parseInt(localStorage.getItem("BatteryStatusD"));
//	
//	//BatteryStatusA
//	if(BatteryStatusA <= 25){
//		document.getElementById("BatterySetA").src = "images/Battery-Empty.png";
//	}else if(BatteryStatusA > 25 && BatteryStatusA <= 50 ){
//		document.getElementById("BatterySetA").src = "images/Battery-Less.png";
//	}else if(BatteryStatusA >50 && BatteryStatusA <= 75){
//		document.getElementById("BatterySetA").src = "images/Battery-Middle.png";
//	}else{
//		document.getElementById("BatterySetA").src = "images/Battery-Full.png";
//	}
//	//BatteryStatusB
//	if(BatteryStatusB <= 25){
//		document.getElementById("BatterySetB").src = "images/Battery-Empty.png";
//	}else if(BatteryStatusB > 25 && BatteryStatusB <= 50 ){
//		document.getElementById("BatterySetB").src = "images/Battery-Less.png";
//	}else if(BatteryStatusB >50 && BatteryStatusB <= 75){
//		document.getElementById("BatterySetB").src = "images/Battery-Middle.png";
//	}else{
//		document.getElementById("BatterySetB").src = "images/Battery-Full.png";
//	}
//	//BatteryStatusC
//	if(BatteryStatusC <= 25){
//		document.getElementById("BatterySetC").src = "images/Battery-Empty.png";
//	}else if(BatteryStatusC > 25 && BatteryStatusC <= 50 ){
//		document.getElementById("BatterySetC").src = "images/Battery-Less.png";
//	}else if(BatteryStatusC >50 && BatteryStatusC <= 75){
//		document.getElementById("BatterySetC").src = "images/Battery-Middle.png";
//	}else{
//		document.getElementById("BatterySetC").src = "images/Battery-Full.png";
//	}
//	//BatteryStatusD
//	if(BatteryStatusD <= 25){
//		document.getElementById("BatterySetD").src = "images/Battery-Empty.png";
//	}else if(BatteryStatusD > 25 && BatteryStatusD <= 50 ){
//		document.getElementById("BatterySetD").src = "images/Battery-Less.png";
//	}else if(BatteryStatusD >50 && BatteryStatusD <= 75){
//		document.getElementById("BatterySetD").src = "images/Battery-Middle.png";
//	}else{
//		document.getElementById("BatterySetD").src = "images/Battery-Full.png";
//	}
//}

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

var Row_TtL;
var Col_TtL;
var Red_TtL = 255;
var Green_TtL = 0;
var Blue_TtL = 0;
var On_TtL;
var Red_TtL_Inner = 255;
var Green_TtL_Inner = 0;
var Blue_TtL_Inner = 0;

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
  Red_TtL_Inner = Red_TtL = parseInt(color_Hex_TtL.substring(0, 2), 16);
  Green_TtL_Inner = Green_TtL = parseInt(color_Hex_TtL.substring(2, 4), 16);
  Blue_TtL_Inner = Blue_TtL = parseInt(color_Hex_TtL.substring(4, 6), 16);
	
  result_TtL = 'rgba(' + Red_TtL + ',' + Green_TtL + ',' + Blue_TtL + ')';

  console.log(result_TtL);
  console.log(color_Hex_TtL);
}

function TapToLightBtn(cell) {
  console.log("Cell triggered: " + cell);
  var i;
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
		  Red_TtL = Red_TtL_Inner;
		  Green_TtL = Green_TtL_Inner;
		  Blue_TtL = Blue_TtL_Inner;
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

/*------------------------------------------------
 * In the Tap-to-Launchpad
 ************************************************/

function TapToLaunchpadBtn(id) {
  //disable all buttons dor 5 seconds
  document.getElementById("00").disabled = true;
  setTimeout(function(){document.getElementById("00").disabled = false;},5000);
  document.getElementById("01").disabled = true;
  setTimeout(function(){document.getElementById("01").disabled = false;},5000);
  document.getElementById("02").disabled = true;
  setTimeout(function(){document.getElementById("02").disabled = false;},5000);
  document.getElementById("03").disabled = true;
  setTimeout(function(){document.getElementById("03").disabled = false;},5000);
  document.getElementById("04").disabled = true;
  setTimeout(function(){document.getElementById("04").disabled = false;},5000);
  document.getElementById("05").disabled = true;
  setTimeout(function(){document.getElementById("05").disabled = false;},5000);
  document.getElementById("06").disabled = true;
  setTimeout(function(){document.getElementById("06").disabled = false;},5000);
  document.getElementById("07").disabled = true;
  setTimeout(function(){document.getElementById("07").disabled = false;},5000);
  document.getElementById("08").disabled = true;
  setTimeout(function(){document.getElementById("08").disabled = false;},5000);
  document.getElementById("09").disabled = true;
  setTimeout(function(){document.getElementById("09").disabled = false;},5000);
  document.getElementById("10").disabled = true;
  setTimeout(function(){document.getElementById("10").disabled = false;},5000);
  document.getElementById("11").disabled = true;
  setTimeout(function(){document.getElementById("11").disabled = false;},5000);
  document.getElementById("12").disabled = true;
  setTimeout(function(){document.getElementById("12").disabled = false;},5000);
  document.getElementById("13").disabled = true;
  setTimeout(function(){document.getElementById("13").disabled = false;},5000);
  document.getElementById("14").disabled = true;
  setTimeout(function(){document.getElementById("14").disabled = false;},5000);
  document.getElementById("15").disabled = true;
  setTimeout(function(){document.getElementById("15").disabled = false;},5000);
	
	
	
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
	
  var number = document.getElementById(id)
  var message_lightshow = new Paho.MQTT.Message(id);
  message_lightshow.destinationName = "LED88ESP32/LightShow";
  message_lightshow.qos = 0;
  client.send(message_lightshow);
}

