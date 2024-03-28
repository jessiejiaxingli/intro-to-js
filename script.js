//TASK ONE
let firstName = "Lil";
let lastName = "Ghostie";
let test = "Lil"

if (firstName == lastName){
	alert("it's a match!");
}
else{
	alert("no match :(");
}

if (firstName == test){
	alert("it's a match!");
}
else{
	alert("no match :(");
}



//TASK TWO
let num1 = 63;
let num2 = 93;
let test1 = 93;
let test2 = 93;
let test3 = 93;
let test4 = 63;

//test1
if (num1 == num2){
	alert("number match!");
}
else if (num1 < num2){
	alert("one is smaller than the other :)");
}
else{
	alert("nothing :(");
}

//test2
if (test1 == test2){
	alert("number match!");
}
else if (test1 < test2){
	alert("one is smaller than the other :)");
}
else{
	alert("nothing :(");
}

//test3
if (test3 == test4){
	alert("number match!");
}
else if (test3 < test4){
	alert("one is smaller than the other :)");
}
else{
	alert("nothing :(");
}



//TASK THREE
function concat(string1, string2) {
	console.log(string1 + string2);
}

concat("Hey", "Hello");



//TASK FOUR
function testNums(incNum) {
	if(incNum < 50){
		console.log("tiny number :D");
	}
	else if(incNum == 50) {
		console.log("it's a match of 50 :3");
	}
	else{
		console.log("woah! big number");
	}
}

testNums(23);
testNums(50);
testNums(76);