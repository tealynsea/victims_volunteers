

var numberVic = prompt("How many disaster victims do you wish to enter?");


var vicName = [];
var vicStreet = [];
var vicPhone = [];

for (var i=1; i<=numberVic; i++) {
	
	console.log(numberVic);
	
	vicName.push(prompt("Enter name:  "));
	vicStreet.push(prompt("Enter street:  "));
	vicPhone.push(prompt("Enter phone:  "));
	
}


/*alert("Name:  " + vicName  + " "+ "Street:  " + vicStreet + " " + "Phone:  " + vicPhone);*/
var numberVol = prompt("How many volunteers do you wish to enter?");

var volName = [];
var volStreet = [];
var volPhone = [];

for (var i=1; i<=numberVol; i++)  {
	
	console.log(numberVol);
	
	volName.push(prompt("Enter name:  "));
	volStreet.push(prompt("Enter street:  "));
	volPhone.push(prompt("Enter phone:  "));
}


alert("Number of victims:  " + numberVic + "\nName of victim:  " + vicName + "\nStreet:  " + vicStreet + "\nPhone:  " + vicPhone + "\nNumber of volunteers:  " + numberVol + "\nName of Volunteer:  " + volName + "\nStreet:  " + volStreet + "\nPhone:  "  + volPhone);






