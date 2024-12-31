// different methods of concatenation
var myName = "Syed Ghulam Mustafa";
var My_Age = 24;
var MyDetail = "My name is " + myName + " and my age is " + My_Age;
MyDetail = myName + My_Age;
console.log(MyDetail);
var short_Intro = myName + ' ' + My_Age;
var explanation = "My Name is ".concat(myName, " and my age is ").concat(My_Age, ".");
explanation = "".concat(myName, " ").concat(My_Age);
console.log(explanation);
//temper difference
short_Intro = "".concat(myName, " ").concat(My_Age);
console.log(short_Intro);
