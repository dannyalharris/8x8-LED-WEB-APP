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
//console.log("LightOff: " + localStorage.getItem("LightOff"));
//var MACAddress = "ALL";
var MACAddress = localStorage.getItem("MACAddress");
//var ConnectionStatus;
//var AllToggled= localStorage.getItem("AllToggled");
var BatteryStatus1= localStorage.setItem("BatteryStatus1", "0");
var BatteryStatus2= localStorage.setItem("BatteryStatus2", "0");
var BatteryStatus3= localStorage.setItem("BatteryStatus3", "0");
var BatteryStatus4= localStorage.setItem("BatteryStatus4", "0");
var BatteryStatus5= localStorage.setItem("BatteryStatus5", "0");
var BatteryStatus6= localStorage.setItem("BatteryStatus6", "0");
var BatteryStatus7= localStorage.setItem("BatteryStatus7", "0");
var BatteryStatus8= localStorage.setItem("BatteryStatus8", "0");
var BatteryStatus9= localStorage.setItem("BatteryStatus9", "0");
var BatteryStatus10= localStorage.setItem("BatteryStatus10", "0");
var BatteryStatus11= localStorage.setItem("BatteryStatus11", "0");
var BatteryStatus12= localStorage.setItem("BatteryStatus12", "0");
var BatteryStatus13= localStorage.setItem("BatteryStatus13", "0");
var BatteryStatus14= localStorage.setItem("BatteryStatus14", "0");
var BatteryStatus15= localStorage.setItem("BatteryStatus15", "0");
var BatteryStatus16= localStorage.setItem("BatteryStatus16", "0");
var LDRStatus1= localStorage.setItem("LDRStatus1", "20");
var LDRStatus2= localStorage.setItem("LDRStatus2", "20");
var LDRStatus3= localStorage.setItem("LDRStatus3", "20");
var LDRStatus4= localStorage.setItem("LDRStatus4", "20");
var LDRStatus5= localStorage.setItem("LDRStatus5", "20");
var LDRStatus6= localStorage.setItem("LDRStatus6", "20");
var LDRStatus7= localStorage.setItem("LDRStatus7", "20");
var LDRStatus8= localStorage.setItem("LDRStatus8", "20");
var LDRStatus9= localStorage.setItem("LDRStatus9", "20");
var LDRStatus10= localStorage.setItem("LDRStatus10", "20");
var LDRStatus11= localStorage.setItem("LDRStatus11", "20");
var LDRStatus12= localStorage.setItem("LDRStatus12", "20");
var LDRStatus13= localStorage.setItem("LDRStatus13", "20");
var LDRStatus14= localStorage.setItem("LDRStatus14", "20");
var LDRStatus15= localStorage.setItem("LDRStatus15", "20");
var LDRStatus16= localStorage.setItem("LDRStatus16", "20");

//= localStorage.setItem("BatteryStatusC", "50");
//console.log("BatteryStatusC : " + localStorage.getItem("BatteryStatusC"));
//console.log(localStorage.getItem("MACAddress"));

/*------------------------------------------------
 * Tap the button to Specific Tab
 ************************************************/
function ToTapToLight() {
  window.location.replace("TapToLight.html");
}

function ToTapToTextGenerator() {
  window.location.replace("TapToTextGenerator.html");
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
		document.getElementById("Set1_Toggle").checked = true;
		document.getElementById("Set2_Toggle").checked = true;
		document.getElementById("Set3_Toggle").checked = true;
		document.getElementById("Set4_Toggle").checked = true;
		document.getElementById("Set5_Toggle").checked = true;
		document.getElementById("Set6_Toggle").checked = true;
		document.getElementById("Set7_Toggle").checked = true;
		document.getElementById("Set8_Toggle").checked = true;
		document.getElementById("Set9_Toggle").checked = true;
		document.getElementById("Set10_Toggle").checked = true;
		document.getElementById("Set11_Toggle").checked = true;
		document.getElementById("Set12_Toggle").checked = true;
		document.getElementById("Set13_Toggle").checked = true;
		document.getElementById("Set14_Toggle").checked = true;
		document.getElementById("Set15_Toggle").checked = true;
		document.getElementById("Set16_Toggle").checked = true;
	}
		
	//else if (localStorage.getItem("MACAddress") == "SetA"){
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
	BatteryStatus1 = parseInt(localStorage.getItem("BatteryStatus1"));
	BatteryStatus2 = parseInt(localStorage.getItem("BatteryStatus2"));
	BatteryStatus3 = parseInt(localStorage.getItem("BatteryStatus3"));
	BatteryStatus4 = parseInt(localStorage.getItem("BatteryStatus4"));
	BatteryStatus5 = parseInt(localStorage.getItem("BatteryStatus5"));
	BatteryStatus6 = parseInt(localStorage.getItem("BatteryStatus6"));
	BatteryStatus7 = parseInt(localStorage.getItem("BatteryStatus7"));
	BatteryStatus8 = parseInt(localStorage.getItem("BatteryStatus8"));
	BatteryStatus9 = parseInt(localStorage.getItem("BatteryStatus9"));
	BatteryStatus10 = parseInt(localStorage.getItem("BatteryStatus10"));
	BatteryStatus11 = parseInt(localStorage.getItem("BatteryStatus11"));
	BatteryStatus12 = parseInt(localStorage.getItem("BatteryStatus12"));
	BatteryStatus13 = parseInt(localStorage.getItem("BatteryStatus13"));
	BatteryStatus14 = parseInt(localStorage.getItem("BatteryStatus14"));
	BatteryStatus15 = parseInt(localStorage.getItem("BatteryStatus15"));
	BatteryStatus16 = parseInt(localStorage.getItem("BatteryStatus16"));
	
	//BatteryStatus1
	if(BatteryStatus1 <= 25){
		document.getElementById("BatterySet1").src = "images/Battery-Empty.png";
	}else if(BatteryStatus1 > 25 && BatteryStatus1 <= 50 ){
		document.getElementById("BatterySet1").src = "images/Battery-Less.png";
	}else if(BatteryStatus1 >50 && BatteryStatus1 <= 75){
		document.getElementById("BatterySet1").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySet1").src = "images/Battery-Full.png";
	}
	//BatteryStatus2
	if(BatteryStatus2 <= 25){
		document.getElementById("BatterySet2").src = "images/Battery-Empty.png";
	}else if(BatteryStatus2 > 25 && BatteryStatus2 <= 50 ){
		document.getElementById("BatterySet2").src = "images/Battery-Less.png";
	}else if(BatteryStatus2 >50 && BatteryStatus2 <= 75){
		document.getElementById("BatterySet2").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySet2").src = "images/Battery-Full.png";
	}
	//BatteryStatus3
	if(BatteryStatus3 <= 25){
		document.getElementById("BatterySet3").src = "images/Battery-Empty.png";
	}else if(BatteryStatus3 > 25 && BatteryStatus3 <= 50 ){
		document.getElementById("BatterySet3").src = "images/Battery-Less.png";
	}else if(BatteryStatus3 >50 && BatteryStatus3 <= 75){
		document.getElementById("BatterySet3").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySet3").src = "images/Battery-Full.png";
	}
	//BatteryStatus4
	if(BatteryStatus4 <= 25){
		document.getElementById("BatterySet4").src = "images/Battery-Empty.png";
	}else if(BatteryStatus4 > 25 && BatteryStatus4 <= 50 ){
		document.getElementById("BatterySet4").src = "images/Battery-Less.png";
	}else if(BatteryStatus4 >50 && BatteryStatus4 <= 75){
		document.getElementById("BatterySet4").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySet4").src = "images/Battery-Full.png";
	}
	//BatteryStatus5
	if(BatteryStatus5 <= 25){
		document.getElementById("BatterySet5").src = "images/Battery-Empty.png";
	}else if(BatteryStatus5 > 25 && BatteryStatus5 <= 50 ){
		document.getElementById("BatterySet5").src = "images/Battery-Less.png";
	}else if(BatteryStatus5 >50 && BatteryStatus5 <= 75){
		document.getElementById("BatterySet5").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySet5").src = "images/Battery-Full.png";
	}
	//BatteryStatus6
	if(BatteryStatus6 <= 25){
		document.getElementById("BatterySet6").src = "images/Battery-Empty.png";
	}else if(BatteryStatus6 > 25 && BatteryStatus6 <= 50 ){
		document.getElementById("BatterySet6").src = "images/Battery-Less.png";
	}else if(BatteryStatus6 >50 && BatteryStatus6 <= 75){
		document.getElementById("BatterySet6").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySet6").src = "images/Battery-Full.png";
	}
	//BatteryStatus7
	if(BatteryStatus7 <= 25){
		document.getElementById("BatterySet7").src = "images/Battery-Empty.png";
	}else if(BatteryStatus7 > 25 && BatteryStatus7 <= 50 ){
		document.getElementById("BatterySet7").src = "images/Battery-Less.png";
	}else if(BatteryStatus7 >50 && BatteryStatus7 <= 75){
		document.getElementById("BatterySet7").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySet7").src = "images/Battery-Full.png";
	}
	//BatteryStatus8
	if(BatteryStatus8 <= 25){
		document.getElementById("BatterySet8").src = "images/Battery-Empty.png";
	}else if(BatteryStatus8 > 25 && BatteryStatus8 <= 50 ){
		document.getElementById("BatterySet8").src = "images/Battery-Less.png";
	}else if(BatteryStatus8 >50 && BatteryStatus8 <= 75){
		document.getElementById("BatterySet8").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySet8").src = "images/Battery-Full.png";
	}
	//BatteryStatus9
	if(BatteryStatus9 <= 25){
		document.getElementById("BatterySet9").src = "images/Battery-Empty.png";
	}else if(BatteryStatus9 > 25 && BatteryStatus9 <= 50 ){
		document.getElementById("BatterySet9").src = "images/Battery-Less.png";
	}else if(BatteryStatus9 >50 && BatteryStatus9 <= 75){
		document.getElementById("BatterySet9").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySet9").src = "images/Battery-Full.png";
	}
	//BatteryStatus10
	if(BatteryStatus10 <= 25){
		document.getElementById("BatterySet10").src = "images/Battery-Empty.png";
	}else if(BatteryStatus10 > 25 && BatteryStatus10 <= 50 ){
		document.getElementById("BatterySet10").src = "images/Battery-Less.png";
	}else if(BatteryStatus10 >50 && BatteryStatus10 <= 75){
		document.getElementById("BatterySet10").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySet10").src = "images/Battery-Full.png";
	}
	//BatteryStatus11
	if(BatteryStatus11 <= 25){
		document.getElementById("BatterySet11").src = "images/Battery-Empty.png";
	}else if(BatteryStatus11 > 25 && BatteryStatus11 <= 50 ){
		document.getElementById("BatterySet11").src = "images/Battery-Less.png";
	}else if(BatteryStatus11 >50 && BatteryStatus11 <= 75){
		document.getElementById("BatterySet11").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySet11").src = "images/Battery-Full.png";
	}
	//BatteryStatus12
	if(BatteryStatus12 <= 25){
		document.getElementById("BatterySet12").src = "images/Battery-Empty.png";
	}else if(BatteryStatus12 > 25 && BatteryStatus12 <= 50 ){
		document.getElementById("BatterySet12").src = "images/Battery-Less.png";
	}else if(BatteryStatus12 >50 && BatteryStatus12 <= 75){
		document.getElementById("BatterySet12").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySet12").src = "images/Battery-Full.png";
	}
	//BatteryStatus13
	if(BatteryStatus13 <= 25){
		document.getElementById("BatterySet13").src = "images/Battery-Empty.png";
	}else if(BatteryStatus13 > 25 && BatteryStatus13 <= 50 ){
		document.getElementById("BatterySet13").src = "images/Battery-Less.png";
	}else if(BatteryStatus13 >50 && BatteryStatus13 <= 75){
		document.getElementById("BatterySet13").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySet13").src = "images/Battery-Full.png";
	}
	//BatteryStatus14
	if(BatteryStatus14 <= 25){
		document.getElementById("BatterySet14").src = "images/Battery-Empty.png";
	}else if(BatteryStatus14 > 25 && BatteryStatus14 <= 50 ){
		document.getElementById("BatterySet14").src = "images/Battery-Less.png";
	}else if(BatteryStatus14 >50 && BatteryStatus14 <= 75){
		document.getElementById("BatterySet14").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySet14").src = "images/Battery-Full.png";
	}
	//BatteryStatus15
	if(BatteryStatus15 <= 25){
		document.getElementById("BatterySet15").src = "images/Battery-Empty.png";
	}else if(BatteryStatus15 > 25 && BatteryStatus15 <= 50 ){
		document.getElementById("BatterySet15").src = "images/Battery-Less.png";
	}else if(BatteryStatus15 >50 && BatteryStatus15 <= 75){
		document.getElementById("BatterySet15").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySet15").src = "images/Battery-Full.png";
	}
	//BatteryStatus16
	if(BatteryStatus16 <= 25){
		document.getElementById("BatterySet16").src = "images/Battery-Empty.png";
	}else if(BatteryStatus16 > 25 && BatteryStatus16 <= 50 ){
		document.getElementById("BatterySet16").src = "images/Battery-Less.png";
	}else if(BatteryStatus16 >50 && BatteryStatus16 <= 75){
		document.getElementById("BatterySet16").src = "images/Battery-Middle.png";
	}else{
		document.getElementById("BatterySet16").src = "images/Battery-Full.png";
	}
	
	//LDRStatus
	LDRStatus1 = parseInt(localStorage.getItem("LDRStatus1"));
	LDRStatus2 = parseInt(localStorage.getItem("LDRStatus2"));
	LDRStatus3 = parseInt(localStorage.getItem("LDRStatus3"));
	LDRStatus4 = parseInt(localStorage.getItem("LDRStatus4"));
	LDRStatus5 = parseInt(localStorage.getItem("LDRStatus5"));
	LDRStatus6 = parseInt(localStorage.getItem("LDRStatus6"));
	LDRStatus7 = parseInt(localStorage.getItem("LDRStatus7"));
	LDRStatus8 = parseInt(localStorage.getItem("LDRStatus8"));
	LDRStatus9 = parseInt(localStorage.getItem("LDRStatus9"));
	LDRStatus10 = parseInt(localStorage.getItem("LDRStatus10"));
	LDRStatus11 = parseInt(localStorage.getItem("LDRStatus11"));
	LDRStatus12 = parseInt(localStorage.getItem("LDRStatus12"));
	LDRStatus13 = parseInt(localStorage.getItem("LDRStatus13"));
	LDRStatus14 = parseInt(localStorage.getItem("LDRStatus14"));
	LDRStatus15 = parseInt(localStorage.getItem("LDRStatus15"));
	LDRStatus16 = parseInt(localStorage.getItem("LDRStatus16"));
	
	//LDRStatus1
	if(LDRStatus1 <= 20){
		document.getElementById("LDRSet1").src = "images/Brightness-Dark.png";
	}else if(LDRStatus1 > 20 && LDRStatus1 <= 40 ){
		document.getElementById("LDRSet1").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatus1 >40 && LDRStatus1 <= 60){
		document.getElementById("LDRSet1").src = "images/Brightness-Middle.png";
	}else if(LDRStatus1 >60 && LDRStatus1 <= 80){
		document.getElementById("LDRSet1").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSet1").src = "images/Brightness-VeryBright.png";
	}
	//LDRStatus2
	if(LDRStatus2 <= 20){
		document.getElementById("LDRSet2").src = "images/Brightness-Dark.png";
	}else if(LDRStatus2 > 20 && LDRStatus2 <= 40 ){
		document.getElementById("LDRSet2").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatus2 >40 && LDRStatus2 <= 60){
		document.getElementById("LDRSet2").src = "images/Brightness-Middle.png";
	}else if(LDRStatus2 >60 && LDRStatus2 <= 80){
		document.getElementById("LDRSet2").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSet2").src = "images/Brightness-VeryBright.png";
	}
	//LDRStatus3
	if(LDRStatus3 <= 20){
		document.getElementById("LDRSet3").src = "images/Brightness-Dark.png";
	}else if(LDRStatus3 > 20 && LDRStatus3 <= 40 ){
		document.getElementById("LDRSet3").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatus3 >40 && LDRStatus3 <= 60){
		document.getElementById("LDRSet3").src = "images/Brightness-Middle.png";
	}else if(LDRStatus3 >60 && LDRStatus3 <= 80){
		document.getElementById("LDRSet3").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSet3").src = "images/Brightness-VeryBright.png";
	}
	//LDRStatus4
	if(LDRStatus4 <= 20){
		document.getElementById("LDRSet4").src = "images/Brightness-Dark.png";
	}else if(LDRStatus4 > 20 && LDRStatus4 <= 40 ){
		document.getElementById("LDRSet4").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatus4 >40 && LDRStatus4 <= 60){
		document.getElementById("LDRSet4").src = "images/Brightness-Middle.png";
	}else if(LDRStatus4 >60 && LDRStatus4 <= 80){
		document.getElementById("LDRSet4").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSet4").src = "images/Brightness-VeryBright.png";
	}
	//LDRStatus5
	if(LDRStatus5 <= 20){
		document.getElementById("LDRSet5").src = "images/Brightness-Dark.png";
	}else if(LDRStatus5 > 20 && LDRStatus5 <= 40 ){
		document.getElementById("LDRSet5").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatus5 >40 && LDRStatus5 <= 60){
		document.getElementById("LDRSet5").src = "images/Brightness-Middle.png";
	}else if(LDRStatus5 >60 && LDRStatus5 <= 80){
		document.getElementById("LDRSet5").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSet5").src = "images/Brightness-VeryBright.png";
	}
	//LDRStatus6
	if(LDRStatus6 <= 20){
		document.getElementById("LDRSet6").src = "images/Brightness-Dark.png";
	}else if(LDRStatus6 > 20 && LDRStatus6 <= 40 ){
		document.getElementById("LDRSet6").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatus6 >40 && LDRStatus6 <= 60){
		document.getElementById("LDRSet6").src = "images/Brightness-Middle.png";
	}else if(LDRStatus6 >60 && LDRStatus6 <= 80){
		document.getElementById("LDRSet6").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSet6").src = "images/Brightness-VeryBright.png";
	}
	//LDRStatus7
	if(LDRStatus7 <= 20){
		document.getElementById("LDRSet7").src = "images/Brightness-Dark.png";
	}else if(LDRStatus7 > 20 && LDRStatus7 <= 40 ){
		document.getElementById("LDRSet7").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatus7 >40 && LDRStatus7 <= 60){
		document.getElementById("LDRSet7").src = "images/Brightness-Middle.png";
	}else if(LDRStatus7 >60 && LDRStatus7 <= 80){
		document.getElementById("LDRSet7").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSet7").src = "images/Brightness-VeryBright.png";
	}
	//LDRStatus8
	if(LDRStatus8 <= 20){
		document.getElementById("LDRSet8").src = "images/Brightness-Dark.png";
	}else if(LDRStatus8 > 20 && LDRStatus8 <= 40 ){
		document.getElementById("LDRSet8").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatus8 >40 && LDRStatus8 <= 60){
		document.getElementById("LDRSet8").src = "images/Brightness-Middle.png";
	}else if(LDRStatus8 >60 && LDRStatus8 <= 80){
		document.getElementById("LDRSet8").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSet8").src = "images/Brightness-VeryBright.png";
	}
	//LDRStatus9
	if(LDRStatus9 <= 20){
		document.getElementById("LDRSet9").src = "images/Brightness-Dark.png";
	}else if(LDRStatus9 > 20 && LDRStatus9 <= 40 ){
		document.getElementById("LDRSet9").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatus9 >40 && LDRStatus9 <= 60){
		document.getElementById("LDRSet9").src = "images/Brightness-Middle.png";
	}else if(LDRStatus9 >60 && LDRStatus9 <= 80){
		document.getElementById("LDRSet9").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSet9").src = "images/Brightness-VeryBright.png";
	}
	//LDRStatus10
	if(LDRStatus10 <= 20){
		document.getElementById("LDRSet10").src = "images/Brightness-Dark.png";
	}else if(LDRStatus10 > 20 && LDRStatus10 <= 40 ){
		document.getElementById("LDRSet10").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatus10 >40 && LDRStatus10 <= 60){
		document.getElementById("LDRSet10").src = "images/Brightness-Middle.png";
	}else if(LDRStatus10 >60 && LDRStatus10 <= 80){
		document.getElementById("LDRSet10").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSet10").src = "images/Brightness-VeryBright.png";
	}
	//LDRStatus11
	if(LDRStatus11 <= 20){
		document.getElementById("LDRSet11").src = "images/Brightness-Dark.png";
	}else if(LDRStatus11 > 20 && LDRStatus11 <= 40 ){
		document.getElementById("LDRSet11").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatus11 >40 && LDRStatus11 <= 60){
		document.getElementById("LDRSet11").src = "images/Brightness-Middle.png";
	}else if(LDRStatus11 >60 && LDRStatus11 <= 80){
		document.getElementById("LDRSet11").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSet11").src = "images/Brightness-VeryBright.png";
	}
	//LDRStatus12
	if(LDRStatus12 <= 20){
		document.getElementById("LDRSet12").src = "images/Brightness-Dark.png";
	}else if(LDRStatus12 > 20 && LDRStatus12 <= 40 ){
		document.getElementById("LDRSet12").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatus12 >40 && LDRStatus12 <= 60){
		document.getElementById("LDRSet12").src = "images/Brightness-Middle.png";
	}else if(LDRStatus12 >60 && LDRStatus12 <= 80){
		document.getElementById("LDRSet12").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSet12").src = "images/Brightness-VeryBright.png";
	}
	//LDRStatus13
	if(LDRStatus13 <= 20){
		document.getElementById("LDRSet13").src = "images/Brightness-Dark.png";
	}else if(LDRStatus13 > 20 && LDRStatus13 <= 40 ){
		document.getElementById("LDRSet13").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatus13 >40 && LDRStatus13 <= 60){
		document.getElementById("LDRSet13").src = "images/Brightness-Middle.png";
	}else if(LDRStatus13 >60 && LDRStatus13 <= 80){
		document.getElementById("LDRSet13").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSet13").src = "images/Brightness-VeryBright.png";
	}
	//LDRStatus14
	if(LDRStatus14 <= 20){
		document.getElementById("LDRSet14").src = "images/Brightness-Dark.png";
	}else if(LDRStatus14 > 20 && LDRStatus14 <= 40 ){
		document.getElementById("LDRSet14").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatus14 >40 && LDRStatus14 <= 60){
		document.getElementById("LDRSet14").src = "images/Brightness-Middle.png";
	}else if(LDRStatus14 >60 && LDRStatus14 <= 80){
		document.getElementById("LDRSet14").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSet14").src = "images/Brightness-VeryBright.png";
	}
	//LDRStatus15
	if(LDRStatus15 <= 20){
		document.getElementById("LDRSet15").src = "images/Brightness-Dark.png";
	}else if(LDRStatus15 > 20 && LDRStatus15 <= 40 ){
		document.getElementById("LDRSet15").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatus15 >40 && LDRStatus15 <= 60){
		document.getElementById("LDRSet15").src = "images/Brightness-Middle.png";
	}else if(LDRStatus15 >60 && LDRStatus15 <= 80){
		document.getElementById("LDRSet15").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSet15").src = "images/Brightness-VeryBright.png";
	}
	//LDRStatus16
	if(LDRStatus16 <= 20){
		document.getElementById("LDRSet16").src = "images/Brightness-Dark.png";
	}else if(LDRStatus16 > 20 && LDRStatus16 <= 40 ){
		document.getElementById("LDRSet16").src = "images/Brightness-SlightDark.png";
	}else if(LDRStatus16 >40 && LDRStatus16 <= 60){
		document.getElementById("LDRSet16").src = "images/Brightness-Middle.png";
	}else if(LDRStatus16 >60 && LDRStatus16 <= 80){
		document.getElementById("LDRSet16").src = "images/Brightness-Bright.png";
	}else{
		document.getElementById("LDRSet16").src = "images/Brightness-VeryBright.png";
	}
  
}

function AllSet_Toggle(){
	if(document.getElementById("AllSet_Toggle").checked == true){
		document.getElementById("Set1_Toggle").checked = true;
		document.getElementById("Set2_Toggle").checked = true;
		document.getElementById("Set3_Toggle").checked = true;
		document.getElementById("Set4_Toggle").checked = true;
		document.getElementById("Set5_Toggle").checked = true;
		document.getElementById("Set6_Toggle").checked = true;
		document.getElementById("Set7_Toggle").checked = true;
		document.getElementById("Set8_Toggle").checked = true;
		document.getElementById("Set9_Toggle").checked = true;
		document.getElementById("Set10_Toggle").checked = true;
		document.getElementById("Set11_Toggle").checked = true;
		document.getElementById("Set12_Toggle").checked = true;
		document.getElementById("Set13_Toggle").checked = true;
		document.getElementById("Set14_Toggle").checked = true;
		document.getElementById("Set15_Toggle").checked = true;
		document.getElementById("Set16_Toggle").checked = true;
		localStorage.setItem("MACAddress", "ALL");
	}else if(document.getElementById("AllSet_Toggle").checked == false){
		document.getElementById("Set1_Toggle").checked = false;	
		document.getElementById("Set2_Toggle").checked = false;	
		document.getElementById("Set3_Toggle").checked = false;	
		document.getElementById("Set4_Toggle").checked = false;
		document.getElementById("Set5_Toggle").checked = false;
		document.getElementById("Set6_Toggle").checked = false;
		document.getElementById("Set7_Toggle").checked = false;
		document.getElementById("Set8_Toggle").checked = false;
		document.getElementById("Set9_Toggle").checked = false;
		document.getElementById("Set10_Toggle").checked = false;
		document.getElementById("Set11_Toggle").checked = false;
		document.getElementById("Set12_Toggle").checked = false;
		document.getElementById("Set13_Toggle").checked = false;
		document.getElementById("Set14_Toggle").checked = false;
		document.getElementById("Set15_Toggle").checked = false;
		document.getElementById("Set16_Toggle").checked = false;
		localStorage.setItem("MACAddress", "Partial");
	}
	
}

//function Setting_Close() {
//  document.getElementById("mySetting").style.display = "none";
//}


/*------------------------------------------------
 * MQTT PAHO JAVASCRIPT CLIENT
 ************************************************/
// <<<<<<< HEAD
// client = new Paho.MQTT.Client("broker.hivemq.com", Number(8000), "clientId");

// client.onConnectionLost = onConnectionLost;
// client.onMessageArrived = onMessageArrived;
// client.connect({onSuccess:onConnect});

// =======
 MQTTConnect();
 
 function MQTTConnect(){
	client = new Paho.MQTT.Client("broker.hivemq.com", Number(8000), "clientId");
	client.onConnectionLost = onConnectionLost;
	client.onMessageArrived = onMessageArrived;
	client.connect({timeout:3600, onSuccess: onConnect, onFailure: onFailure});
 }
 
// >>>>>>> 09bba65da3945341885c0af31b3b9b31efd64800
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("mqtt status: connected");
  client.subscribe("LED88ESP32/BatteryStatus");
  client.subscribe("LED88ESP32/LDRStatus");
  
  console.log("lightoff state: " + LightOff);
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
};

function onFailure(){
	console.log("onFailure:"+responseObject.errorMessage);
	console.log("mqtt status: reconnect");
	MQTTConnect();
}

function onConnectionLost(responseObject) {
	console.log("onConnectionLost:"+responseObject.errorMessage);
	console.log("mqtt status: reconnect");
	//MQTTConnect();
};

function onMessageArrived(message) {
  console.log("onMessageArrived: "+ message.payloadString + " " + message.destinationName);
  if (message.destinationName == "LED88ESP32/BatteryStatus")
		{
			console.log("Message Arrived: " + message.payloadString);
			var batterystatus= message.payloadstring;
			//update value to Battery Status
		}
	else if (message.destinationName == "LED88ESP32/LDRStatus") {
		console.log("Message Arrived: " + message.payloadString);
		var ldrstatus= message.payloadstring;
		//update value to Battery Status
	}
 
};

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
  messagepayloadjson.b = Blue;
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

function SimMode_Toggle(){
	
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

