import inquirer from "inquirer";

let guests = "my relatives";

let welcomingGuests = await inquirer.prompt({
    type: "list",
    name: "intro",
    message: "Who are you?",
    choices: ["my relatives", "my friend relatives","my family"]
})
if (welcomingGuests.intro === "my relatives"){
    console.log("welcome to home");
    
}
else if(welcomingGuests.intro === "my family"){
    console.log("This is your own house.");
}
else{
    console.log("my friend is not at home");
}