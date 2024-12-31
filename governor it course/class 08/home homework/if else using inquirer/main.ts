
// home home work no.1
// // if else statement ka program bnana hai using inquirer.
// ye humara homework hai next class mein miss check krengi.

import inquirer from "inquirer";

let temperature = 30

let todayWeather = await inquirer.prompt([{
    type: "number",
    name: "q1",
    message: "please enter todays temperature",
}])
if(todayWeather.q1 >= 20){
    console.log("it is cool")
}
else if(todayWeather.q1 >=30){
    console.log("Normal weather")
}
else if (todayWeather.q1 >=35) {
    console.log("it is hot")
}
else {
    console.log("extreme summer!!!")
}

//2nd homework
// if else with functions.
let nameofPerson = function (firstName:string,LastName:string) {
    if (firstName == "Syed")
     if   (LastName == "Akber Shah")
    return "younger brother";
else {
    return "younger sister";
}
else if(firstName == "Ghulam Mustafa")
    if (LastName == "Shah")
    return "older brother";
else {
    return "older sister";
}
else { 
    return "i dont know";
}
}

console.log(nameofPerson("Shah","Shah"))




