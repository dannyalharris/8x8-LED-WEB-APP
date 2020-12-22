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
localStorage.setItem("LightOff", "LightOff");
var LightOff = localStorage.getItem("LightOff");

var DisplayMode = localStorage.setItem("DisplayMode", "Simultaneously");
var ToggledSetLocalStorage = localStorage.getItem("ToggledSetLocalStorage");
console.log("HTML" + document.getElementById("HTML").innerHTML);
localStorage.setItem("HTML", document.getElementById("HTML").innerHTML);
var HTMLPage = localStorage.getItem("HTML");
var MACAddress = localStorage.getItem("MACAddress");


var EnergyOpt = localStorage.getItem("EnergyOpt");


//var ToggledSetArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//var ToggledSetArray = ["false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false"];
var ToggledSetArray = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
var ToggledSetBinary;


if (MACAddress == null) {
  localStorage.setItem("MACAddress", "ALL");
  MACAddress = localStorage.getItem("MACAddress");
  //localStorage.setItem("ToggledSetLocalStorage", "1111111111111111");
	localStorage.setItem("ToggledSetLocalStorage", "");
  ToggledSetLocalStorage = localStorage.getItem("ToggledSetLocalStorage");
  //ToggledSetArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	ToggledSetArray = ["true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true"];
}

var MQTTMode_Str = localStorage.getItem("MQTTMode");
var MQTTBroker = localStorage.getItem("MQTTBroker");
var MQTTPort = localStorage.getItem("MQTTPort");

if (MQTTMode_Str == null) {
  localStorage.setItem("MQTTMode", "Public");
  MQTTMode_Str = localStorage.getItem("MQTTMode");
  localStorage.setItem("MQTTBroker", "broker.hivemq.com");
  MQTTBroker = localStorage.getItem("MQTTBroker");
  localStorage.setItem("MQTTPort", 8000);
  MQTTPort = localStorage.getItem("MQTTPort");

  document.getElementById("txt_Broker").innerHTML = MQTTBroker;
  document.getElementById("txt_Port").innerHTML = MQTTPort;
  console.log("MQTTMode" + MQTTMode_Str);
  console.log("MQTTBroker" + MQTTBroker);
  console.log("MQTTPort" + MQTTPort);
}

console.log("MQTT: " + MQTTBroker + " , " + MQTTPort);

if (MQTTBroker == null) {
  localStorage.setItem("MQTTBroker", "broker.hivemq.com");
  MQTTBroker = localStorage.getItem("MQTTBroker");
  console.log("MQTTBroker null!");
} else {
   document.getElementById("txt_Broker").innerHTML = MQTTBroker;
  console.log("MQTTBroker not null!");
}

if (MQTTPort == null) {
   localStorage.setItem("MQTTPort", 8000);
  MQTTPort = localStorage.getItem("MQTTPort");
  console.log("MQTTPort null!");
} else {
   document.getElementById("txt_Port").innerHTML = MQTTPort;
  console.log("MQTTPort not null!");
}

//Tap the button to Specific Tab
function ToTapToLight() {
  window.location.replace("TapToLight.html");
}

function ToTapToTextGenerator() {
  window.location.replace("TapToTextGenerator.html");
}

function ToTapToLightShow() {
  window.location.replace("TapToLightShow.html");
}

function ToTapToSettings() {
  //window.location.replace("TapToSettings.html");
  document.getElementById('Settings_sidebar').style.display = "block";
}

function ToTapToAbout() {
  window.location.replace("TapToAbout.html");
  console.log(localStorage.getItem("MACAddress"));
}

//Open Tab
function openTab(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  console.log("Enter this page");
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//Setting SideBar open
function Setting_Open() {

  console.log(localStorage.getItem("MACAddress"));
  if (document.getElementById("mySetting").style.display == "none") {
    document.getElementById("mySetting").style.display = "block";
    document.getElementById("mySetting").style.width = "auto";
  } else {
    document.getElementById("mySetting").style.display = "none";
  }

  for (var i = 1; i <= 16; i++) {
    if (localStorage.getItem(("BatteryStatusSet" + i)) == null) {
      localStorage.setItem("BatteryStatusSet" + i, "0");
    }

    if (localStorage.getItem(("LDRStatusSet" + i)) == null) {
      localStorage.setItem("LDRStatusSet" + i, "0");
    }
  }

  if (EnergyOpt == null) {
    localStorage.setItem("EnergyOpt", "0");
    EnergyOpt = localStorage.getItem("EnergyOpt");
  }

  ToggleSet();
  EnergyOptToggle();
  BatteryStatusDisplay();
  LDRStatusDisplay();
}

// When setting SideBar open, check toggled SET
function ToggleSet() {
  if (localStorage.getItem("MACAddress") == "ALL") {
    document.getElementById("AllSet_Toggle").checked = true;
    for (var i = 1; i <= 16; i++) {
      document.getElementById("T" + i).checked = true;
      ToggledSetArray[i - 1] = true;
    }
  } else if (localStorage.getItem("MACAddress") == "Partial") {

    document.getElementById("AllSet_Toggle").checked = false;

    for (var j = 1; j <= 16; j++) {
      if (localStorage.getItem("MACAddress" + j) == "ON") {
        document.getElementById("T" + j).checked = true;
        ToggledSetArray[j - 1] = true;
      } else if (localStorage.getItem("MACAddress" + j) == "OFF") {
        document.getElementById("T" + j).checked = false;
        ToggledSetArray[j - 1] = false;
      }
    }
  }
  console.log(ToggledSetArray);
}

EnergyOptToggle();

// When setting SideBar open, check toggled EnergyOpt
function EnergyOptToggle() {
  if (localStorage.getItem("EnergyOpt") == "1") {
    document.getElementById("EnergyOpti_Toggle").checked = true;
    if (HTMLPage == "Text Generator") {
      document.getElementById("range_Brightness").disabled = true;
    } else if (HTMLPage == "Tap-To-Light") {
      document.getElementById("range_Brightness_TtL").disabled = true;
    }
  } else if (localStorage.getItem("EnergyOpt") == "0") {
    document.getElementById("EnergyOpti_Toggle").checked = false;
    if (HTMLPage == "Text Generator") {
      document.getElementById("range_Brightness").disabled = false;
    } else if (HTMLPage == "Tap-To-Light") {
      document.getElementById("range_Brightness_TtL").disabled = false;
    }
  }
}

// When any set being toggled
function Toggle(Set) {

  if (document.getElementById("T" + Set).checked == true) {
    localStorage.setItem(("MACAddress" + Set), "ON");
    ToggledSetArray[Set - 1] = true;
  } else if (document.getElementById("T" + Set).checked == false) {
    localStorage.setItem(("MACAddress" + Set), "OFF");
    ToggledSetArray[Set - 1] = false;
  }

  console.log(ToggledSetArray);
  SendSetsToggle();

}

//When ALL Set being toggled
function AllSet_Toggle() {
  //If All Set Toggle Button has been toggled, then all Toggle button for Set 1 to 16 will be toggled
  if (document.getElementById("AllSet_Toggle").checked == true) {
    for (var i = 1; i <= 16; i++) {
      document.getElementById("T" + i).checked = true;
      ToggledSetArray[i - 1] = true;
    }
    localStorage.setItem("MACAddress", "ALL");
  } else if (document.getElementById("AllSet_Toggle").checked == false) {
    for (var j = 1; j <= 16; j++) {
      document.getElementById("T" + j).checked = false;
      ToggledSetArray[j - 1] = false;
    }
    localStorage.setItem("MACAddress", "Partial");
  }

  console.log(ToggledSetArray);
  SendSetsToggle();

}

//Send sets data
function SendSetsToggle() {
  //ToggledSetBinary = ToggledSetArray.join('');
	ToggledSetBinary = ToggledSetArray;
  console.log(ToggledSetBinary);
  localStorage.setItem("ToggledSetLocalStorage", ToggledSetBinary);
  ToggledSetLocalStorage = localStorage.getItem("ToggledSetLocalStorage");
  //LightOff = localStorage.getItem("LightOff");

  var messagepayloadjson_ESPSet = new Object();
  //messagepayloadjson_ESPSet.cmd = LightOff;
  messagepayloadjson_ESPSet.ESPSet = ToggledSetBinary; //"1"

  var messagepayloadstring_ESPSet = JSON.stringify(messagepayloadjson_ESPSet);
  console.log(messagepayloadstring_ESPSet);
  var message_ESPSet = new Paho.MQTT.Message(messagepayloadstring_ESPSet);
  console.log(message_ESPSet);
  message_ESPSet.destinationName = "LED88ESP32/ESPSet";
  message_ESPSet.qos = 0;
  client.send(message_ESPSet);
}

//Control Energy Auto-Optimization 
function EnergyOpti_Toggle() {

  if (document.getElementById("EnergyOpti_Toggle").checked == true) {
    if (HTMLPage == "Text Generator") {
      document.getElementById("range_Brightness").disabled = true;
    } else if (HTMLPage == "Tap-To-Light") {
      document.getElementById("range_Brightness_TtL").disabled = true;
    }

    localStorage.setItem("EnergyOpt", "1");
    EnergyOpt = localStorage.getItem("EnergyOpt");
    console.log("EnergyOptFn" + EnergyOpt);


  } else if (document.getElementById("EnergyOpti_Toggle").checked == false) {

    if (HTMLPage == "Text Generator") {
      document.getElementById("range_Brightness").disabled = false;
    } else if (HTMLPage == "Tap-To-Light") {
      document.getElementById("range_Brightness_TtL").disabled = false;
    }

    localStorage.setItem("EnergyOpt", "0");
    EnergyOpt = localStorage.getItem("EnergyOpt");
    console.log("EnergyOptFn" + EnergyOpt);
  }

  var messagepayloadjson_EnergyOpt = new Object();
  messagepayloadjson_EnergyOpt.Saver = parseInt(EnergyOpt); //"1"
  //messagepayloadjson_EnergyOpt.adr = EnergyOpt; //"ON"

  var messagepayloadstring_EnergyOpt = JSON.stringify(messagepayloadjson_EnergyOpt);
  console.log(messagepayloadstring_EnergyOpt);
  var message_EnergyOpt = new Paho.MQTT.Message(messagepayloadstring_EnergyOpt);
  console.log(message_EnergyOpt);
  message_EnergyOpt.destinationName = "LED88ESP32/EnergyOpt";
  message_EnergyOpt.qos = 0;
  client.send(message_EnergyOpt);
}

//Set MQTT
function MQTTMode(mode) {
  if (mode == "Private") {
    localStorage.setItem("MQTTMode", "Private");
    MQTTMode_Str = localStorage.getItem("MQTTMode");
    localStorage.setItem("MQTTBroker", "broker.hivemq.com");
    MQTTBroker = localStorage.getItem("MQTTBroker");
    localStorage.setItem("MQTTPort", 8000);
    MQTTPort = localStorage.getItem("MQTTPort");

    document.getElementById("txt_Broker").innerHTML = MQTTBroker;
    document.getElementById("txt_Port").innerHTML = MQTTPort;
    console.log("MQTTMode" + MQTTMode_Str);
    console.log("MQTTBroker" + MQTTBroker);
    console.log("MQTTPort" + MQTTPort);
  } else if (mode == "Public") {
    localStorage.setItem("MQTTMode", "Public");
    MQTTMode_Str = localStorage.getItem("MQTTMode");
    localStorage.setItem("MQTTBroker", "broker.hivemq.com");
    MQTTBroker = localStorage.getItem("MQTTBroker");
    localStorage.setItem("MQTTPort", 8000);
    MQTTPort = localStorage.getItem("MQTTPort");

    document.getElementById("txt_Broker").innerHTML = MQTTBroker;
    document.getElementById("txt_Port").innerHTML = MQTTPort;
    console.log("MQTTMode" + MQTTMode_Str);
    console.log("MQTTBroker" + MQTTBroker);
    console.log("MQTTPort" + MQTTPort);
  }
}

//Edit MQTT Info
function EditMQTT(mode) {

  if (mode == "Edit") {
    document.getElementById("DoneEditMQTT").style.display = "block";
    document.getElementById("EditMQTT").style.display = "none";
    document.getElementById("CancelEditMQTT").style.display = "block";
    document.getElementById("EditMQTTTable").style.display = "block";
    document.getElementById("txtbox_Broker").style.display = "block";
    document.getElementById("txtbox_Port").style.display = "block";
    document.getElementById("txt_Broker").style.display = "none";
    document.getElementById("txt_Port").style.display = "none";
    document.getElementById("MQTT_Connect").disabled = true;

  } else if (mode == "Done") {

    if (document.getElementById("txtbox_Broker").value != "" && document.getElementById("txtbox_Port").value != "") {
      document.getElementById("DoneEditMQTT").style.display = "none";
      document.getElementById("EditMQTT").style.display = "block";
      document.getElementById("CancelEditMQTT").style.display = "none";
      document.getElementById("EditMQTTTable").style.display = "none";
      document.getElementById("txt_Broker").style.display = "block";
      document.getElementById("txt_Port").style.display = "block";
      document.getElementById("txtbox_Broker").style.display = "none";
      document.getElementById("txtbox_Port").style.display = "none";
      document.getElementById("txt_Broker").innerHTML = document.getElementById("txtbox_Broker").value;
      document.getElementById("txt_Port").innerHTML = document.getElementById("txtbox_Port").value;
      document.getElementById("MQTT_Connect").disabled = false;
    } else {
      document.getElementById("DoneEditMQTT").style.display = "block";
      document.getElementById("EditMQTT").style.display = "none";
      document.getElementById("CancelEditMQTT").style.display = "block";
      document.getElementById("EditMQTTTable").style.display = "block";

    }

  } else if (mode == "Cancel") {
    document.getElementById("DoneEditMQTT").style.display = "none";
    document.getElementById("EditMQTT").style.display = "block";
    document.getElementById("CancelEditMQTT").style.display = "none";
    document.getElementById("EditMQTTTable").style.display = "none";
    document.getElementById("txtbox_Broker").style.display = "none";
    document.getElementById("txtbox_Port").style.display = "none";
    document.getElementById("txt_Broker").style.display = "block";
    document.getElementById("txt_Port").style.display = "block";
    document.getElementById("MQTT_Connect").disabled = false;
  }

}


function MQTT_Connect(Connection) {
  if (Connection == "Connect") {
    console.log("Connecting...");
    localStorage.setItem("MQTTBroker", document.getElementById("txt_Broker").innerHTML);
    MQTTBroker = localStorage.getItem("MQTTBroker");
    localStorage.setItem("MQTTPort", document.getElementById("txt_Port").innerHTML);
    MQTTPort = localStorage.getItem("MQTTPort");
	console.log(MQTTBroker + " Number:" + MQTTPort);
    MQTTConnect();
  } 
	else if (Connection == "Disconnect") {
    console.log("Disconnecting...");
    MQTTDisconnect();
  }
}

//MQTT PAHO JAVASCRIPT CLIENT
MQTTConnect();

function MQTTConnect() {
  //client = new Paho.MQTT.Client("broker.hivemq.com", Number(8000), "clientId");
  console.log(MQTTBroker + " Number:" + MQTTPort);
  client = new Paho.MQTT.Client(MQTTBroker, Number(MQTTPort), "clientId");
  //client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  client.connect({
    timeout: 3600,
    onSuccess: onConnect,
    onFailure: onFailure
  });
  console.log("MQTTConnect Thread");
}

function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("mqtt status: connected");
  client.subscribe("LED88ESP32/BatteryStatus");
  client.subscribe("LED88ESP32/LDRStatus");

  console.log("lightoff state: " + LightOff);
  var messagepayloadjson_Command = new Object();
  messagepayloadjson_Command.cmd = "LightOff";
  //messagepayloadjson_Command.adr = ToggledSetBinary;
  //messagepayloadjson_Command.adr = MACAddress; //"FF22DDAA0011"

  var messagepayloadstring_Command = JSON.stringify(messagepayloadjson_Command);
  console.log(messagepayloadstring_Command);
  var message_Command = new Paho.MQTT.Message(messagepayloadstring_Command);
  console.log(message_Command);
  message_Command.destinationName = "LED88ESP32/Command";
  message_Command.qos = 0;
  client.send(message_Command);
};

function onFailure() {
  console.log("onFailure:" + responseObject.errorMessage);
  console.log("mqtt status: reconnect");
  MQTTConnect();
}

function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost: " + responseObject.errorMessage);
    console.log("mqtt status: reconnect");
    client.connect({
      timeout: 3600,
      onSuccess: onConnect,
      onFailure: onFailure
    });
  }
};

function MQTTDisconnect() {
  console.log("client is disconnecting..");
  client.disconnect();
}

function onMessageArrived(message) {
  console.log("onMessageArrived: " + message.payloadString + " " + message.destinationName);

  if (message.destinationName == "LED88ESP32/BatteryStatus") {
    console.log("Message Arrived: " + message.payloadString);
    var batterystatus = message.payloadString.toString();
    var BatteryStatusObj = JSON.parse(batterystatus);
    console.log("BatteryStatusObj.adr: " + BatteryStatusObj.adr + ", BatteryStatusObj.State: " + BatteryStatusObj.state);
    var BatteryStateSetAdr = BatteryStatusObj.adr;
    var BatteryStateSetValue = BatteryStatusObj.state;
    //update value to Battery Status
    localStorage.setItem("BatteryStatus" + BatteryStateSetAdr, BatteryStateSetValue);
    BatteryStatusDisplay();

  } else if (message.destinationName == "LED88ESP32/LDRStatus") {
    console.log("Message Arrived: " + message.payloadString);
    var ldrstatus = message.payloadString.toString();
    var LDRStatusObj = JSON.parse(ldrstatus);
    console.log("LDRStatusObj.adr: " + LDRStatusObj.adr + ", LDRStatusObj.State: " + LDRStatusObj.state);
    var LDRStateSetAdr = LDRStatusObj.adr;
    var LDRStateSetValue = LDRStatusObj.state;
    //update value to Battery Status
    localStorage.setItem("LDRStatus" + LDRStateSetAdr, LDRStateSetValue);
    LDRStatusDisplay();
  }

};

BatteryStatusDisplay();
LDRStatusDisplay();

// Display Battery Status in Setting
function BatteryStatusDisplay() {
  console.log("BatteryStatusDisplay_Thread");
  //BatteryStatus
  var BatteryStatus1 = parseInt(localStorage.getItem("BatteryStatusSet1"));
  var BatteryStatus2 = parseInt(localStorage.getItem("BatteryStatusSet2"));
  var BatteryStatus3 = parseInt(localStorage.getItem("BatteryStatusSet3"));
  var BatteryStatus4 = parseInt(localStorage.getItem("BatteryStatusSet4"));
  var BatteryStatus5 = parseInt(localStorage.getItem("BatteryStatusSet5"));
  var BatteryStatus6 = parseInt(localStorage.getItem("BatteryStatusSet6"));
  var BatteryStatus7 = parseInt(localStorage.getItem("BatteryStatusSet7"));
  var BatteryStatus8 = parseInt(localStorage.getItem("BatteryStatusSet8"));
  var BatteryStatus9 = parseInt(localStorage.getItem("BatteryStatusSet9"));
  var BatteryStatus10 = parseInt(localStorage.getItem("BatteryStatusSet10"));
  var BatteryStatus11 = parseInt(localStorage.getItem("BatteryStatusSet11"));
  var BatteryStatus12 = parseInt(localStorage.getItem("BatteryStatusSet12"));
  var BatteryStatus13 = parseInt(localStorage.getItem("BatteryStatusSet13"));
  var BatteryStatus14 = parseInt(localStorage.getItem("BatteryStatusSet14"));
  var BatteryStatus15 = parseInt(localStorage.getItem("BatteryStatusSet15"));
  var BatteryStatus16 = parseInt(localStorage.getItem("BatteryStatusSet16"));

  document.getElementById("BatteryText1").innerHTML = BatteryStatus1;
  document.getElementById("BatteryText2").innerHTML = BatteryStatus2;
  document.getElementById("BatteryText3").innerHTML = BatteryStatus3;
  document.getElementById("BatteryText4").innerHTML = BatteryStatus4;
  document.getElementById("BatteryText5").innerHTML = BatteryStatus5;
  document.getElementById("BatteryText6").innerHTML = BatteryStatus6;
  document.getElementById("BatteryText7").innerHTML = BatteryStatus7;
  document.getElementById("BatteryText8").innerHTML = BatteryStatus8;
  document.getElementById("BatteryText9").innerHTML = BatteryStatus9;
  document.getElementById("BatteryText10").innerHTML = BatteryStatus10;
  document.getElementById("BatteryText11").innerHTML = BatteryStatus11;
  document.getElementById("BatteryText12").innerHTML = BatteryStatus12;
  document.getElementById("BatteryText13").innerHTML = BatteryStatus13;
  document.getElementById("BatteryText14").innerHTML = BatteryStatus14;
  document.getElementById("BatteryText15").innerHTML = BatteryStatus15;
  document.getElementById("BatteryText16").innerHTML = BatteryStatus16;

  //BatteryStatus1

  if (BatteryStatus1 <= 25) {
    document.getElementById("BatterySet1").src = "images/Battery-Empty.png";
  } else if (BatteryStatus1 > 25 && BatteryStatus1 <= 50) {
    document.getElementById("BatterySet1").src = "images/Battery-Less.png";
  } else if (BatteryStatus1 > 50 && BatteryStatus1 <= 75) {
    document.getElementById("BatterySet1").src = "images/Battery-Middle.png";
  } else {
    document.getElementById("BatterySet1").src = "images/Battery-Full.png";
  }
  //BatteryStatus2
  if (BatteryStatus2 <= 25) {
    document.getElementById("BatterySet2").src = "images/Battery-Empty.png";
  } else if (BatteryStatus2 > 25 && BatteryStatus2 <= 50) {
    document.getElementById("BatterySet2").src = "images/Battery-Less.png";
  } else if (BatteryStatus2 > 50 && BatteryStatus2 <= 75) {
    document.getElementById("BatterySet2").src = "images/Battery-Middle.png";
  } else {
    document.getElementById("BatterySet2").src = "images/Battery-Full.png";
  }
  //BatteryStatus3
  if (BatteryStatus3 <= 25) {
    document.getElementById("BatterySet3").src = "images/Battery-Empty.png";
  } else if (BatteryStatus3 > 25 && BatteryStatus3 <= 50) {
    document.getElementById("BatterySet3").src = "images/Battery-Less.png";
  } else if (BatteryStatus3 > 50 && BatteryStatus3 <= 75) {
    document.getElementById("BatterySet3").src = "images/Battery-Middle.png";
  } else {
    document.getElementById("BatterySet3").src = "images/Battery-Full.png";
  }
  //BatteryStatus4
  if (BatteryStatus4 <= 25) {
    document.getElementById("BatterySet4").src = "images/Battery-Empty.png";
  } else if (BatteryStatus4 > 25 && BatteryStatus4 <= 50) {
    document.getElementById("BatterySet4").src = "images/Battery-Less.png";
  } else if (BatteryStatus4 > 50 && BatteryStatus4 <= 75) {
    document.getElementById("BatterySet4").src = "images/Battery-Middle.png";
  } else {
    document.getElementById("BatterySet4").src = "images/Battery-Full.png";
  }
  //BatteryStatus5
  if (BatteryStatus5 <= 25) {
    document.getElementById("BatterySet5").src = "images/Battery-Empty.png";
  } else if (BatteryStatus5 > 25 && BatteryStatus5 <= 50) {
    document.getElementById("BatterySet5").src = "images/Battery-Less.png";
  } else if (BatteryStatus5 > 50 && BatteryStatus5 <= 75) {
    document.getElementById("BatterySet5").src = "images/Battery-Middle.png";
  } else {
    document.getElementById("BatterySet5").src = "images/Battery-Full.png";
  }
  //BatteryStatus6
  if (BatteryStatus6 <= 25) {
    document.getElementById("BatterySet6").src = "images/Battery-Empty.png";
  } else if (BatteryStatus6 > 25 && BatteryStatus6 <= 50) {
    document.getElementById("BatterySet6").src = "images/Battery-Less.png";
  } else if (BatteryStatus6 > 50 && BatteryStatus6 <= 75) {
    document.getElementById("BatterySet6").src = "images/Battery-Middle.png";
  } else {
    document.getElementById("BatterySet6").src = "images/Battery-Full.png";
  }
  //BatteryStatus7
  if (BatteryStatus7 <= 25) {
    document.getElementById("BatterySet7").src = "images/Battery-Empty.png";
  } else if (BatteryStatus7 > 25 && BatteryStatus7 <= 50) {
    document.getElementById("BatterySet7").src = "images/Battery-Less.png";
  } else if (BatteryStatus7 > 50 && BatteryStatus7 <= 75) {
    document.getElementById("BatterySet7").src = "images/Battery-Middle.png";
  } else {
    document.getElementById("BatterySet7").src = "images/Battery-Full.png";
  }
  //BatteryStatus8
  if (BatteryStatus8 <= 25) {
    document.getElementById("BatterySet8").src = "images/Battery-Empty.png";
  } else if (BatteryStatus8 > 25 && BatteryStatus8 <= 50) {
    document.getElementById("BatterySet8").src = "images/Battery-Less.png";
  } else if (BatteryStatus8 > 50 && BatteryStatus8 <= 75) {
    document.getElementById("BatterySet8").src = "images/Battery-Middle.png";
  } else {
    document.getElementById("BatterySet8").src = "images/Battery-Full.png";
  }
  //BatteryStatus9
  if (BatteryStatus9 <= 25) {
    document.getElementById("BatterySet9").src = "images/Battery-Empty.png";
  } else if (BatteryStatus9 > 25 && BatteryStatus9 <= 50) {
    document.getElementById("BatterySet9").src = "images/Battery-Less.png";
  } else if (BatteryStatus9 > 50 && BatteryStatus9 <= 75) {
    document.getElementById("BatterySet9").src = "images/Battery-Middle.png";
  } else {
    document.getElementById("BatterySet9").src = "images/Battery-Full.png";
  }
  //BatteryStatus10
  if (BatteryStatus10 <= 25) {
    document.getElementById("BatterySet10").src = "images/Battery-Empty.png";
  } else if (BatteryStatus10 > 25 && BatteryStatus10 <= 50) {
    document.getElementById("BatterySet10").src = "images/Battery-Less.png";
  } else if (BatteryStatus10 > 50 && BatteryStatus10 <= 75) {
    document.getElementById("BatterySet10").src = "images/Battery-Middle.png";
  } else {
    document.getElementById("BatterySet10").src = "images/Battery-Full.png";
  }
  //BatteryStatus11
  if (BatteryStatus11 <= 25) {
    document.getElementById("BatterySet11").src = "images/Battery-Empty.png";
  } else if (BatteryStatus11 > 25 && BatteryStatus11 <= 50) {
    document.getElementById("BatterySet11").src = "images/Battery-Less.png";
  } else if (BatteryStatus11 > 50 && BatteryStatus11 <= 75) {
    document.getElementById("BatterySet11").src = "images/Battery-Middle.png";
  } else {
    document.getElementById("BatterySet11").src = "images/Battery-Full.png";
  }
  //BatteryStatus12
  if (BatteryStatus12 <= 25) {
    document.getElementById("BatterySet12").src = "images/Battery-Empty.png";
  } else if (BatteryStatus12 > 25 && BatteryStatus12 <= 50) {
    document.getElementById("BatterySet12").src = "images/Battery-Less.png";
  } else if (BatteryStatus12 > 50 && BatteryStatus12 <= 75) {
    document.getElementById("BatterySet12").src = "images/Battery-Middle.png";
  } else {
    document.getElementById("BatterySet12").src = "images/Battery-Full.png";
  }
  //BatteryStatus13
  if (BatteryStatus13 <= 25) {
    document.getElementById("BatterySet13").src = "images/Battery-Empty.png";
  } else if (BatteryStatus13 > 25 && BatteryStatus13 <= 50) {
    document.getElementById("BatterySet13").src = "images/Battery-Less.png";
  } else if (BatteryStatus13 > 50 && BatteryStatus13 <= 75) {
    document.getElementById("BatterySet13").src = "images/Battery-Middle.png";
  } else {
    document.getElementById("BatterySet13").src = "images/Battery-Full.png";
  }
  //BatteryStatus14
  if (BatteryStatus14 <= 25) {
    document.getElementById("BatterySet14").src = "images/Battery-Empty.png";
  } else if (BatteryStatus14 > 25 && BatteryStatus14 <= 50) {
    document.getElementById("BatterySet14").src = "images/Battery-Less.png";
  } else if (BatteryStatus14 > 50 && BatteryStatus14 <= 75) {
    document.getElementById("BatterySet14").src = "images/Battery-Middle.png";
  } else {
    document.getElementById("BatterySet14").src = "images/Battery-Full.png";
  }
  //BatteryStatus15
  if (BatteryStatus15 <= 25) {
    document.getElementById("BatterySet15").src = "images/Battery-Empty.png";
  } else if (BatteryStatus15 > 25 && BatteryStatus15 <= 50) {
    document.getElementById("BatterySet15").src = "images/Battery-Less.png";
  } else if (BatteryStatus15 > 50 && BatteryStatus15 <= 75) {
    document.getElementById("BatterySet15").src = "images/Battery-Middle.png";
  } else {
    document.getElementById("BatterySet15").src = "images/Battery-Full.png";
  }
  //BatteryStatus16
  if (BatteryStatus16 <= 25) {
    document.getElementById("BatterySet16").src = "images/Battery-Empty.png";
  } else if (BatteryStatus16 > 25 && BatteryStatus16 <= 50) {
    document.getElementById("BatterySet16").src = "images/Battery-Less.png";
  } else if (BatteryStatus16 > 50 && BatteryStatus16 <= 75) {
    document.getElementById("BatterySet16").src = "images/Battery-Middle.png";
  } else {
    document.getElementById("BatterySet16").src = "images/Battery-Full.png";
  }
}

// Display Brightness Status in Setting
function LDRStatusDisplay() {
  //LDRStatus
  var LDRStatus1 = parseInt(localStorage.getItem("LDRStatusSet1"));
  var LDRStatus2 = parseInt(localStorage.getItem("LDRStatusSet2"));
  var LDRStatus3 = parseInt(localStorage.getItem("LDRStatusSet3"));
  var LDRStatus4 = parseInt(localStorage.getItem("LDRStatusSet4"));
  var LDRStatus5 = parseInt(localStorage.getItem("LDRStatusSet5"));
  var LDRStatus6 = parseInt(localStorage.getItem("LDRStatusSet6"));
  var LDRStatus7 = parseInt(localStorage.getItem("LDRStatusSet7"));
  var LDRStatus8 = parseInt(localStorage.getItem("LDRStatusSet8"));
  var LDRStatus9 = parseInt(localStorage.getItem("LDRStatusSet9"));
  var LDRStatus10 = parseInt(localStorage.getItem("LDRStatusSet10"));
  var LDRStatus11 = parseInt(localStorage.getItem("LDRStatusSet11"));
  var LDRStatus12 = parseInt(localStorage.getItem("LDRStatusSet12"));
  var LDRStatus13 = parseInt(localStorage.getItem("LDRStatusSet13"));
  var LDRStatus14 = parseInt(localStorage.getItem("LDRStatusSet14"));
  var LDRStatus15 = parseInt(localStorage.getItem("LDRStatusSet15"));
  var LDRStatus16 = parseInt(localStorage.getItem("LDRStatusSet16"));

  document.getElementById("BrightnessText1").innerHTML = LDRStatus1;
  document.getElementById("BrightnessText2").innerHTML = LDRStatus2;
  document.getElementById("BrightnessText3").innerHTML = LDRStatus3;
  document.getElementById("BrightnessText4").innerHTML = LDRStatus4;
  document.getElementById("BrightnessText5").innerHTML = LDRStatus5;
  document.getElementById("BrightnessText6").innerHTML = LDRStatus6;
  document.getElementById("BrightnessText7").innerHTML = LDRStatus7;
  document.getElementById("BrightnessText8").innerHTML = LDRStatus8;
  document.getElementById("BrightnessText9").innerHTML = LDRStatus9;
  document.getElementById("BrightnessText10").innerHTML = LDRStatus10;
  document.getElementById("BrightnessText11").innerHTML = LDRStatus11;
  document.getElementById("BrightnessText12").innerHTML = LDRStatus12;
  document.getElementById("BrightnessText13").innerHTML = LDRStatus13;
  document.getElementById("BrightnessText14").innerHTML = LDRStatus14;
  document.getElementById("BrightnessText15").innerHTML = LDRStatus15;
  document.getElementById("BrightnessText16").innerHTML = LDRStatus16;

  //LDRStatus1
  if (LDRStatus1 <= 20) {
    document.getElementById("LDRSet1").src = "images/Brightness-Dark.png";
  } else if (LDRStatus1 > 20 && LDRStatus1 <= 40) {
    document.getElementById("LDRSet1").src = "images/Brightness-SlightDark.png";
  } else if (LDRStatus1 > 40 && LDRStatus1 <= 60) {
    document.getElementById("LDRSet1").src = "images/Brightness-Middle.png";
  } else if (LDRStatus1 > 60 && LDRStatus1 <= 80) {
    document.getElementById("LDRSet1").src = "images/Brightness-Bright.png";
  } else {
    document.getElementById("LDRSet1").src = "images/Brightness-VeryBright.png";
  }
  //LDRStatus2
  if (LDRStatus2 <= 20) {
    document.getElementById("LDRSet2").src = "images/Brightness-Dark.png";
  } else if (LDRStatus2 > 20 && LDRStatus2 <= 40) {
    document.getElementById("LDRSet2").src = "images/Brightness-SlightDark.png";
  } else if (LDRStatus2 > 40 && LDRStatus2 <= 60) {
    document.getElementById("LDRSet2").src = "images/Brightness-Middle.png";
  } else if (LDRStatus2 > 60 && LDRStatus2 <= 80) {
    document.getElementById("LDRSet2").src = "images/Brightness-Bright.png";
  } else {
    document.getElementById("LDRSet2").src = "images/Brightness-VeryBright.png";
  }
  //LDRStatus3
  if (LDRStatus3 <= 20) {
    document.getElementById("LDRSet3").src = "images/Brightness-Dark.png";
  } else if (LDRStatus3 > 20 && LDRStatus3 <= 40) {
    document.getElementById("LDRSet3").src = "images/Brightness-SlightDark.png";
  } else if (LDRStatus3 > 40 && LDRStatus3 <= 60) {
    document.getElementById("LDRSet3").src = "images/Brightness-Middle.png";
  } else if (LDRStatus3 > 60 && LDRStatus3 <= 80) {
    document.getElementById("LDRSet3").src = "images/Brightness-Bright.png";
  } else {
    document.getElementById("LDRSet3").src = "images/Brightness-VeryBright.png";
  }
  //LDRStatus4
  if (LDRStatus4 <= 20) {
    document.getElementById("LDRSet4").src = "images/Brightness-Dark.png";
  } else if (LDRStatus4 > 20 && LDRStatus4 <= 40) {
    document.getElementById("LDRSet4").src = "images/Brightness-SlightDark.png";
  } else if (LDRStatus4 > 40 && LDRStatus4 <= 60) {
    document.getElementById("LDRSet4").src = "images/Brightness-Middle.png";
  } else if (LDRStatus4 > 60 && LDRStatus4 <= 80) {
    document.getElementById("LDRSet4").src = "images/Brightness-Bright.png";
  } else {
    document.getElementById("LDRSet4").src = "images/Brightness-VeryBright.png";
  }
  //LDRStatus5
  if (LDRStatus5 <= 20) {
    document.getElementById("LDRSet5").src = "images/Brightness-Dark.png";
  } else if (LDRStatus5 > 20 && LDRStatus5 <= 40) {
    document.getElementById("LDRSet5").src = "images/Brightness-SlightDark.png";
  } else if (LDRStatus5 > 40 && LDRStatus5 <= 60) {
    document.getElementById("LDRSet5").src = "images/Brightness-Middle.png";
  } else if (LDRStatus5 > 60 && LDRStatus5 <= 80) {
    document.getElementById("LDRSet5").src = "images/Brightness-Bright.png";
  } else {
    document.getElementById("LDRSet5").src = "images/Brightness-VeryBright.png";
  }
  //LDRStatus6
  if (LDRStatus6 <= 20) {
    document.getElementById("LDRSet6").src = "images/Brightness-Dark.png";
  } else if (LDRStatus6 > 20 && LDRStatus6 <= 40) {
    document.getElementById("LDRSet6").src = "images/Brightness-SlightDark.png";
  } else if (LDRStatus6 > 40 && LDRStatus6 <= 60) {
    document.getElementById("LDRSet6").src = "images/Brightness-Middle.png";
  } else if (LDRStatus6 > 60 && LDRStatus6 <= 80) {
    document.getElementById("LDRSet6").src = "images/Brightness-Bright.png";
  } else {
    document.getElementById("LDRSet6").src = "images/Brightness-VeryBright.png";
  }
  //LDRStatus7
  if (LDRStatus7 <= 20) {
    document.getElementById("LDRSet7").src = "images/Brightness-Dark.png";
  } else if (LDRStatus7 > 20 && LDRStatus7 <= 40) {
    document.getElementById("LDRSet7").src = "images/Brightness-SlightDark.png";
  } else if (LDRStatus7 > 40 && LDRStatus7 <= 60) {
    document.getElementById("LDRSet7").src = "images/Brightness-Middle.png";
  } else if (LDRStatus7 > 60 && LDRStatus7 <= 80) {
    document.getElementById("LDRSet7").src = "images/Brightness-Bright.png";
  } else {
    document.getElementById("LDRSet7").src = "images/Brightness-VeryBright.png";
  }
  //LDRStatus8
  if (LDRStatus8 <= 20) {
    document.getElementById("LDRSet8").src = "images/Brightness-Dark.png";
  } else if (LDRStatus8 > 20 && LDRStatus8 <= 40) {
    document.getElementById("LDRSet8").src = "images/Brightness-SlightDark.png";
  } else if (LDRStatus8 > 40 && LDRStatus8 <= 60) {
    document.getElementById("LDRSet8").src = "images/Brightness-Middle.png";
  } else if (LDRStatus8 > 60 && LDRStatus8 <= 80) {
    document.getElementById("LDRSet8").src = "images/Brightness-Bright.png";
  } else {
    document.getElementById("LDRSet8").src = "images/Brightness-VeryBright.png";
  }
  //LDRStatus9
  if (LDRStatus9 <= 20) {
    document.getElementById("LDRSet9").src = "images/Brightness-Dark.png";
  } else if (LDRStatus9 > 20 && LDRStatus9 <= 40) {
    document.getElementById("LDRSet9").src = "images/Brightness-SlightDark.png";
  } else if (LDRStatus9 > 40 && LDRStatus9 <= 60) {
    document.getElementById("LDRSet9").src = "images/Brightness-Middle.png";
  } else if (LDRStatus9 > 60 && LDRStatus9 <= 80) {
    document.getElementById("LDRSet9").src = "images/Brightness-Bright.png";
  } else {
    document.getElementById("LDRSet9").src = "images/Brightness-VeryBright.png";
  }
  //LDRStatus10
  if (LDRStatus10 <= 20) {
    document.getElementById("LDRSet10").src = "images/Brightness-Dark.png";
  } else if (LDRStatus10 > 20 && LDRStatus10 <= 40) {
    document.getElementById("LDRSet10").src = "images/Brightness-SlightDark.png";
  } else if (LDRStatus10 > 40 && LDRStatus10 <= 60) {
    document.getElementById("LDRSet10").src = "images/Brightness-Middle.png";
  } else if (LDRStatus10 > 60 && LDRStatus10 <= 80) {
    document.getElementById("LDRSet10").src = "images/Brightness-Bright.png";
  } else {
    document.getElementById("LDRSet10").src = "images/Brightness-VeryBright.png";
  }
  //LDRStatus11
  if (LDRStatus11 <= 20) {
    document.getElementById("LDRSet11").src = "images/Brightness-Dark.png";
  } else if (LDRStatus11 > 20 && LDRStatus11 <= 40) {
    document.getElementById("LDRSet11").src = "images/Brightness-SlightDark.png";
  } else if (LDRStatus11 > 40 && LDRStatus11 <= 60) {
    document.getElementById("LDRSet11").src = "images/Brightness-Middle.png";
  } else if (LDRStatus11 > 60 && LDRStatus11 <= 80) {
    document.getElementById("LDRSet11").src = "images/Brightness-Bright.png";
  } else {
    document.getElementById("LDRSet11").src = "images/Brightness-VeryBright.png";
  }
  //LDRStatus12
  if (LDRStatus12 <= 20) {
    document.getElementById("LDRSet12").src = "images/Brightness-Dark.png";
  } else if (LDRStatus12 > 20 && LDRStatus12 <= 40) {
    document.getElementById("LDRSet12").src = "images/Brightness-SlightDark.png";
  } else if (LDRStatus12 > 40 && LDRStatus12 <= 60) {
    document.getElementById("LDRSet12").src = "images/Brightness-Middle.png";
  } else if (LDRStatus12 > 60 && LDRStatus12 <= 80) {
    document.getElementById("LDRSet12").src = "images/Brightness-Bright.png";
  } else {
    document.getElementById("LDRSet12").src = "images/Brightness-VeryBright.png";
  }
  //LDRStatus13
  if (LDRStatus13 <= 20) {
    document.getElementById("LDRSet13").src = "images/Brightness-Dark.png";
  } else if (LDRStatus13 > 20 && LDRStatus13 <= 40) {
    document.getElementById("LDRSet13").src = "images/Brightness-SlightDark.png";
  } else if (LDRStatus13 > 40 && LDRStatus13 <= 60) {
    document.getElementById("LDRSet13").src = "images/Brightness-Middle.png";
  } else if (LDRStatus13 > 60 && LDRStatus13 <= 80) {
    document.getElementById("LDRSet13").src = "images/Brightness-Bright.png";
  } else {
    document.getElementById("LDRSet13").src = "images/Brightness-VeryBright.png";
  }
  //LDRStatus14
  if (LDRStatus14 <= 20) {
    document.getElementById("LDRSet14").src = "images/Brightness-Dark.png";
  } else if (LDRStatus14 > 20 && LDRStatus14 <= 40) {
    document.getElementById("LDRSet14").src = "images/Brightness-SlightDark.png";
  } else if (LDRStatus14 > 40 && LDRStatus14 <= 60) {
    document.getElementById("LDRSet14").src = "images/Brightness-Middle.png";
  } else if (LDRStatus14 > 60 && LDRStatus14 <= 80) {
    document.getElementById("LDRSet14").src = "images/Brightness-Bright.png";
  } else {
    document.getElementById("LDRSet14").src = "images/Brightness-VeryBright.png";
  }
  //LDRStatus15
  if (LDRStatus15 <= 20) {
    document.getElementById("LDRSet15").src = "images/Brightness-Dark.png";
  } else if (LDRStatus15 > 20 && LDRStatus15 <= 40) {
    document.getElementById("LDRSet15").src = "images/Brightness-SlightDark.png";
  } else if (LDRStatus15 > 40 && LDRStatus15 <= 60) {
    document.getElementById("LDRSet15").src = "images/Brightness-Middle.png";
  } else if (LDRStatus15 > 60 && LDRStatus15 <= 80) {
    document.getElementById("LDRSet15").src = "images/Brightness-Bright.png";
  } else {
    document.getElementById("LDRSet15").src = "images/Brightness-VeryBright.png";
  }
  //LDRStatus16
  if (LDRStatus16 <= 20) {
    document.getElementById("LDRSet16").src = "images/Brightness-Dark.png";
  } else if (LDRStatus16 > 20 && LDRStatus16 <= 40) {
    document.getElementById("LDRSet16").src = "images/Brightness-SlightDark.png";
  } else if (LDRStatus16 > 40 && LDRStatus16 <= 60) {
    document.getElementById("LDRSet16").src = "images/Brightness-Middle.png";
  } else if (LDRStatus16 > 60 && LDRStatus16 <= 80) {
    document.getElementById("LDRSet16").src = "images/Brightness-Bright.png";
  } else {
    document.getElementById("LDRSet16").src = "images/Brightness-VeryBright.png";
  }

}

// Tap the button to home
function ToTapToHome() {
  window.location.replace("TapToHomepage.html");
}

/*------------------------------------------------
 * In the Text Generator
 ************************************************/
function openColorPicker() {
  document.getElementById("colorPicker_Modal").style.display = "block";
  console.log("ColorPickerOpened");
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
var color_Hex_LightShow = "ff0000";

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
  color_Hex_LightShow = color.hexString;
});


var result;
var Red = 255;
var Green = 0;
var Blue = 0;

function setColorPicker() {
  document.getElementById("colorPicker_Modal").style.display = "none";
  document.getElementById("btnColorPicker").style.backgroundColor = color_Hex;
  //var Red, Green, Blue;
  color_Hex = color_Hex.replace('#', '');
  Red = parseInt(color_Hex.substring(0, 2), 16);
  Green = parseInt(color_Hex.substring(2, 4), 16);
  Blue = parseInt(color_Hex.substring(4, 6), 16);

  result = 'rgba(' + Red + ',' + Green + ',' + Blue + ')';

  console.log(result);
  //console.log("rgb("+ +r + "," + +g + "," + +b + ")");
}


function DisplayMode_Toggle() {
  if (document.getElementById("DisplayMode_Toggle").checked == true) {
    DisplayMode = localStorage.setItem("DisplayMode", "Sequentially");
    document.getElementById("AllSet_Toggle").checked = true;
    AllSet_Toggle();
    document.getElementById("AllSet_Toggle").disabled = true;
    document.getElementById("range_Speed").disabled = true;

  } else if (document.getElementById("DisplayMode_Toggle").checked == false) {
    DisplayMode = localStorage.setItem("DisplayMode", "Simultaneously");
    document.getElementById("AllSet_Toggle").checked = false;
    AllSet_Toggle();
    document.getElementById("AllSet_Toggle").disabled = false;
    document.getElementById("range_Speed").disabled = false;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startConnect() {

  DisplayMode = localStorage.getItem("DisplayMode");
  console.log("DisplayMode" + DisplayMode);
  var messagepayloadjson_Command = new Object();
  var messagepayloadstring_Command;

  var messagepayloadjson = new Object();
  messagepayloadjson.txt = document.getElementById('txtbox_Text').value;
  messagepayloadjson.r = Red;
  messagepayloadjson.g = Green;
  messagepayloadjson.b = Blue;
  messagepayloadjson.spd = document.getElementById('range_Speed').value;
  var messagepayloadstring = JSON.stringify(messagepayloadjson);
  console.log("messagepayloadstring: " + messagepayloadstring);

  var message = new Paho.MQTT.Message(messagepayloadstring);
  message.destinationName = "LED88ESP32/TextGenerator";
  message.qos = 0;

  var messagepayloadjson_Brightness = new Object();
  messagepayloadjson_Brightness.br = document.getElementById('range_Brightness').value;
  var messagepayloadstring_Brightness = JSON.stringify(messagepayloadjson_Brightness);
  console.log(messagepayloadstring_Brightness);
  var message_Brightness = new Paho.MQTT.Message(messagepayloadstring_Brightness);
  message_Brightness.destinationName = "LED88ESP32/Brightness";
  message_Brightness.qos = 0;


  if (DisplayMode == "Sequentially") {
    var speedvalue = document.getElementById('range_Speed').value;
    //var speedtime =  ;
    //var sleeptime = ;
    var ESPSetOn = [];

    for (var i = 1; i <= 16; i++) {
      if (document.getElementById("T" + i).checked == true) {
        ESPSetOn.push(i);
      }
    }

    var ESPSetOnLen = ESPSetOn.length;

    for (var i = 0; i < ESPSetOnLen; i++) {
      console.log("i" + ESPSetOn[i]);
      messagepayloadjson_Command.cmd = "TextGenerator";
      //messagepayloadjson_Command.adr = "Set" + ESPSetOn[i]; //"FF22DDAA0011"

      messagepayloadstring_Command = JSON.stringify(messagepayloadjson_Command);
      console.log("messagepayloadstring_Command" + messagepayloadstring_Command);
      var message_Command_Seq = new Paho.MQTT.Message(messagepayloadstring_Command);
      message_Command_Seq.destinationName = "LED88ESP32/Command";
      message_Command_Seq.qos = 0;

      // Publish a Message

      client.send(message_Command_Seq);
      client.send(message);
      client.send(message_Brightness);
      console.log("Published");
      await sleep(4000);
    }

  } else if (DisplayMode == "Simultaneously") {
    document.getElementById("range_Speed").disabled = false;
    messagepayloadjson_Command.cmd = "TextGenerator";
    //messagepayloadjson_Command.adr = MACAddress; //"FF22DDAA0011"

    messagepayloadstring_Command = JSON.stringify(messagepayloadjson_Command);
    //console.log("messagepayloadstring_Command" + messagepayloadstring_Command);
    var message_Command = new Paho.MQTT.Message(messagepayloadstring_Command);
    console.log(message_Command);
    message_Command.destinationName = "LED88ESP32/Command";
    message_Command.qos = 0;

    // Publish a Message
    client.send(message_Command);
    client.send(message);
    client.send(message_Brightness);

  }
}

function range_Brightness_txtChange() {
  document.getElementById('range_Brightness_txt').innerHTML = document.getElementById('range_Brightness').value;
}

function range_Speed_txtChange() {
  document.getElementById('range_Speed_txt').innerHTML = document.getElementById('range_Speed').value;
}

/*------------------------------------------------
 * In the Tap-to-Light
 ************************************************/
function range_Brightness_TtLChange() {
  document.getElementById('range_Brightness_TtLTxt').innerHTML = document.getElementById('range_Brightness_TtL').value;
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
  //messagepayloadjson_Command.adr = MACAddress; //"FF22DDAA0011"

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
 * In the Tap-to-LightShow
 ************************************************/

function TapToLightShowBtn(id) {
  if (document.getElementById("ToggleLightShow").checked == true) {
    /*
	//disable all buttons dor 5 seconds
   document.getElementById("00").disabled = true;
   setTimeout(function () {
     document.getElementById("00").disabled = false;
   }, 5000);
   document.getElementById("01").disabled = true;
   setTimeout(function () {
     document.getElementById("01").disabled = false;
   }, 5000);
   document.getElementById("02").disabled = true;
   setTimeout(function () {
     document.getElementById("02").disabled = false;
   }, 5000);
   document.getElementById("03").disabled = true;
   setTimeout(function () {
     document.getElementById("03").disabled = false;
   }, 5000);
   document.getElementById("04").disabled = true;
   setTimeout(function () {
     document.getElementById("04").disabled = false;
   }, 5000);
   document.getElementById("05").disabled = true;
   setTimeout(function () {
     document.getElementById("05").disabled = false;
   }, 5000);
   document.getElementById("06").disabled = true;
   setTimeout(function () {
     document.getElementById("06").disabled = false;
   }, 5000);
   document.getElementById("07").disabled = true;
   setTimeout(function () {
     document.getElementById("07").disabled = false;
   }, 5000);
   document.getElementById("08").disabled = true;
   setTimeout(function () {
     document.getElementById("08").disabled = false;
   }, 5000);
   document.getElementById("09").disabled = true;
   setTimeout(function () {
     document.getElementById("09").disabled = false;
   }, 5000);
   document.getElementById("10").disabled = true;
   setTimeout(function () {
     document.getElementById("10").disabled = false;
   }, 5000);
   document.getElementById("11").disabled = true;
   setTimeout(function () {
     document.getElementById("11").disabled = false;
   }, 5000);
   document.getElementById("12").disabled = true;
   setTimeout(function () {
     document.getElementById("12").disabled = false;
   }, 5000);
   document.getElementById("13").disabled = true;
   setTimeout(function () {
     document.getElementById("13").disabled = false;
   }, 5000);
   document.getElementById("14").disabled = true;
   setTimeout(function () {
     document.getElementById("14").disabled = false;
   }, 5000);
   document.getElementById("15").disabled = true;
   setTimeout(function () {
     document.getElementById("15").disabled = false;
   }, 5000);
   */

    //console.log(LightOff);
    var messagepayloadjson_Command = new Object();
    messagepayloadjson_Command.cmd = "LightOff";
    //messagepayloadjson_Command.adr = MACAddress; //"FF22DDAA0011"

    var messagepayloadstring_Command = JSON.stringify(messagepayloadjson_Command);
    console.log(messagepayloadstring_Command);
    var message_Command = new Paho.MQTT.Message(messagepayloadstring_Command);
    console.log(message_Command);
    message_Command.destinationName = "LED88ESP32/Command";
    message_Command.qos = 0;
    client.send(message_Command);

    //console.log(LightShow);
    var messagepayloadjson_Command = new Object();
    messagepayloadjson_Command.cmd = "LightShow";
    //messagepayloadjson_Command.adr = MACAddress; //"FF22DDAA0011"

    var messagepayloadstring_Command = JSON.stringify(messagepayloadjson_Command);
    console.log(messagepayloadstring_Command);
    var message_Command = new Paho.MQTT.Message(messagepayloadstring_Command);
    console.log(message_Command);
    message_Command.destinationName = "LED88ESP32/Command";
    message_Command.qos = 0;
    client.send(message_Command);

    var message_lightshow = new Paho.MQTT.Message("{\"ptr\":" + id + "}");
    message_lightshow.destinationName = "LED88ESP32/LightShow";
    message_lightshow.qos = 0;
    client.send(message_lightshow);

  } else if (document.getElementById("ToggleLightShow").checked == false) {
    document.getElementById(id).style.background = "#" + color_Hex_LightShow;
    var messagepayloadjson_Command = new Object();
    messagepayloadjson_Command.cmd = "LightOff";
    //messagepayloadjson_Command.adr = MACAddress; //"FF22DDAA0011"

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

}

function Toggle_LightShow() {

  if (document.getElementById("ToggleLightShow").checked == true || document.getElementById("ToggleLightShow").checked == null) {
    document.getElementById("btnColorPicker").style.backgroundColor = "rgb(122,122,122)";
    document.getElementById("btnColorPicker").disabled = true;
    document.getElementById("SEQ1").disabled = true;
    document.getElementById("SEQ2").disabled = true;
    document.getElementById("SEQ3").disabled = true;
  } else if (document.getElementById("ToggleLightShow").checked == false) {
    document.getElementById("btnColorPicker").style.backgroundColor = "rgb(238,22,31)";
    document.getElementById("btnColorPicker").disabled = false;
    document.getElementById("SEQ1").disabled = false;
    document.getElementById("SEQ2").disabled = false;
    document.getElementById("SEQ3").disabled = false;

  }
}

function PLAYALL() {
  if (document.getElementById("ToggleLightShow").checked == true) {
    var message_lightshow = new Paho.MQTT.Message("{\"ptr\":17}");
    message_lightshow.destinationName = "LED88ESP32/LightShow";
    message_lightshow.qos = 0;
    client.send(message_lightshow);
  } else if (document.getElementById("ToggleLightShow").checked == false) {
    var message_lightshow = new Paho.MQTT.Message("{\"seq\":-1}");
    message_lightshow.destinationName = "LED88ESP32/SingleColor/setSequence";
    message_lightshow.qos = 0;
    client.send(message_lightshow);
  }
}

function SEQ1() {
  if (document.getElementById("ToggleLightShow").checked == false) {
    var message_lightshow = new Paho.MQTT.Message("{\"seq\":1}");
    message_lightshow.destinationName = "LED88ESP32/SingleColor/setSequence";
    message_lightshow.qos = 0;
    client.send(message_lightshow);
  }
}

function SEQ2() {
  if (document.getElementById("ToggleLightShow").checked == false) {
    var message_lightshow = new Paho.MQTT.Message("{\"seq\":2}");
    message_lightshow.destinationName = "LED88ESP32/SingleColor/setSequence";
    message_lightshow.qos = 0;
    client.send(message_lightshow);
  }
}

function SEQ3() {
  if (document.getElementById("ToggleLightShow").checked == false) {
    var message_lightshow = new Paho.MQTT.Message("{\"seq\":3}");
    message_lightshow.destinationName = "LED88ESP32/SingleColor/setSequence";
    message_lightshow.qos = 0;
    client.send(message_lightshow);
  }
}


// LIGHTSHOW COLOR PICKER
function LightShowOpenColorPicker() {
  document.getElementById("LightShowColorPicker_Modal").style.display = "block";
  console.log("LightShowColorPickerOpened");
}

function LightShowCloseColorPicker() {
  document.getElementById("LightShowColorPicker_Modal").style.display = "none";
}

window.onclick = function (event) {
  if (event.target == document.getElementById("LightShowColorPicker_Modal")) {
    document.getElementById("LightShowColorPicker_Modal").style.display = "none";
  }
}

var result_LightShow;
var Red_LightShow = 255;
var Green_LightShow = 0;
var Blue_LightShow = 0;

function LightShowSetColorPicker() {
  document.getElementById("LightShowColorPicker_Modal").style.display = "none";
  document.getElementById("LightShowBtnColorPicker").style.backgroundColor = color_Hex_LightShow;
  //var Red, Green, Blue;
  color_Hex_LightShow = color_Hex_LightShow.replace('#', '');
  Red_LightShow = parseInt(color_Hex_LightShow.substring(0, 2), 16);
  Green_LightShow = parseInt(color_Hex_LightShow.substring(2, 4), 16);
  Blue_LightShow = parseInt(color_Hex_LightShow.substring(4, 6), 16);

  result_LightShow = 'rgba(' + Red_LightShow + ',' + Green_LightShow + ',' + Blue_LightShow + ')';

  console.log(result_LightShow);
  //console.log("rgb("+ +r + "," + +g + "," + +b + ")");
}

//////
