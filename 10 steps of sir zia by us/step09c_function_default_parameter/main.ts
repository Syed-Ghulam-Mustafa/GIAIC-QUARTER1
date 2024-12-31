//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
function buildName(firstName?: string, lastName = "Khan") : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

console.log(buildName());
console.log(buildName("Akber"));

//anonymous function type with default parameters
//(Note that the parameter type will be optional when used with defult value)


let buildName1 : (firstName: string, lastName?: string) => string = 
function(firstName: string, lastName = "Khan") : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

console.log(buildName());
console.log(buildName("Akber"));

