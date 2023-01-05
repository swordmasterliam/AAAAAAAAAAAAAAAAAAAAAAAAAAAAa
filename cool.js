var interval = {
	"test": "",
	"click": "",
	"deltest": "",
} 
var bool = {
	"bot": false,
	"on": false,
} 
var object = {
	"div": "",
	"button1": "",
}

object.div = document.createElement("DIV");
object.div.style.width = "101px";
object.div.style.height = "101px";
object.div.style.border = "3px solid black";
object.div.id = "div";
object.div.style.background = "gray";

object.button1 = document.createElement("BUTTON");
object.button1.style.width = "100px";
object.button1.style.height = "25px";
object.button1.style.border = "3px solid black";
object.button1.style.background = "white";
object.button1.id = "button1";
object.button1.innerHTML = "Off";
object.button1.setAttribute("onclick", "start()");


document.body.appendChild(object.div);
document.getElementById("div").appendChild(object.button1);


function test() {
	if(bool.bot == true) {
		if(document.Pass) {
			bool.bot = false;
			console.log("Pass element found");
			set("click");
		} else if (document.getElementById("next-btn")) {
			set("stop");
			let x = document.querySelectorAll("#choice-section li");
			console.log("next button");
			x[0].click();
			x[1].click();
			x[2].click();
			document.getElementById("next-btn").click();
			set("test");
		} else {
			console.log("No elements found");
		}
	}
} function set(type) {
	if(type == "click") {//waits time to click
		let rand = Math.floor(Math.random() * (26 - 10)) + 10; 
		
		rand = rand * 1000;
		console.log(rand);
		interval.click = setTimeout(press, rand);
	
	} else if (type == "test") {//starts testing after 1 second
		interval.deltest = setTimeout(function x(){bool.bot = true;}, 1000);
	} else if (type == "stop") { //CLEAR ALL TIMEOUTS AND INTERVALS
		clearTimeout(interval.click);
		clearTimeout(interval.deltest);
		bool.bot = false; 
	}
} function press() {
	document.Pass.click();
	console.log("Clicked");
	set("test");
	
} 


function start() {
	if(bool.on == true) {
		set("stop");
		bool.on = false;
		bool.bot = false;
		set("stop");
		console.log("Bot Inactive");
		document.getElementById("button1").innerHTML = "Off";
	} else if (bool.on == false) {
		bool.on = true;
		bool.bot = true;
		console.log("Bot Active");
		document.getElementById("button1").innerHTML = "On";
	}
}

function custom1() {
	if(bool.on == true) {
		set("stop");
		bool.on = false;
		bool.bot = false;
		set("stop");
		console.log("Bot Inactive");
		document.getElementById("button2").innerHTML = "Off";
	} else if (bool.on == false) {
		bool.on = true;
		bool.bot = true;
		console.log("Bot Active");
		document.getElementById("button2").innerHTML = "On";
	}
}

function custom2() {
	if(bool.on == true) {
		set("stop");
		bool.on = false;
		bool.bot = false;
		set("stop");
		console.log("Bot Inactive");
		document.getElementById("button3").innerHTML = "Off";
	} else if (bool.on == false) {
		bool.on = true;
		bool.bot = true;
		console.log("Bot Active");
		document.getElementById("button3").innerHTML = "On";
	}
}

function custom3() {
	if(bool.on == true) {
		set("stop");
		bool.on = false;
		bool.bot = false;
		set("stop");
		console.log("Bot Inactive");
		document.getElementById("button4").innerHTML = "Off";
	} else if (bool.on == false) {
		bool.on = true;
		bool.bot = true;
		console.log("Bot Active");
		document.getElementById("button4").innerHTML = "On";
	}
}

interval.test = setInterval(test, 1);
   
var obj1 = {
	"div": "",
	"button2": "",
}
obj1.div = document.createElement("DIV");
obj1.div.id = "div";

obj1.button2 = document.createElement("BUTTON");
obj1.button2.style.width = "100px";
obj1.button2.style.height = "25px";
obj1.button2.style.border = "3px solid black";
obj1.button2.style.background = "white";
obj1.button2.id = "button2";
obj1.button2.innerHTML = "1 wrong";
obj1.button2.setAttribute("onclick", "onew()");
document.body.appendChild(obj1.div);
document.getElementById("div").appendChild(obj1.button2);

function onew() {
	setTimeout(function(){ custom1(); }, 45000);
	document.getElementById("button2").innerHTML = "On";
	console.log('1 wrong...')
}

var obj2 = {
	"div": "",
	"button3": "",
}
obj2.div = document.createElement("DIV");
obj2.div.id = "div";

obj2.button3 = document.createElement("BUTTON");
obj2.button3.style.width = "100px";
obj2.button3.style.height = "25px";
obj2.button3.style.border = "3px solid black";
obj2.button3.style.background = "white";
obj2.button3.id = "button3";
obj2.button3.innerHTML = "more wrong";
obj2.button3.setAttribute("onclick", "morew()");
document.body.appendChild(obj2.div);
document.getElementById("div").appendChild(obj2.button3);

function morew() {
	setTimeout(function(){ custom2(); }, 45000);
	setTimeout(function(){ custom2(); }, 90000);
	setTimeout(function(){ custom2(); }, 135000);
	document.getElementById("button3").innerHTML = "On";
	console.log('more wrong...')
}

var obj3 = {
	"div": "",
	"button4": "",
}
obj3.div = document.createElement("DIV");
obj3.div.id = "div";

obj3.button4 = document.createElement("BUTTON");
obj3.button4.style.width = "100px";
obj3.button4.style.height = "25px";
obj3.button4.style.border = "3px solid black";
obj3.button4.style.background = "white";
obj3.button4.id = "button4";
obj3.button4.innerHTML = "most wrong";
obj3.button4.setAttribute("onclick", "mostw()");
document.body.appendChild(obj3.div);
document.getElementById("div").appendChild(obj3.button4);

function mostw() {
	setTimeout(function(){ custom3(); }, 45000);
	setTimeout(function(){ custom3(); }, 90000);
	setTimeout(function(){ custom3(); }, 135000);
	setTimeout(function(){ custom3(); }, 180000);
	setTimeout(function(){ custom3(); }, 225000);
	setTimeout(function(){ custom3(); }, 270000);
	setTimeout(function(){ custom3(); }, 315000);
	document.getElementById("button4").innerHTML = "On";
	console.log('most wrong...')
}