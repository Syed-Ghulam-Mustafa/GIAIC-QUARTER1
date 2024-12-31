
//Named function with optional parameters

function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

console.log(buildName("Akber","Shah"))
console.log(buildName("Akber"))
console.log(buildName("Syed","Akber"))

//anonymous function type with optional parameters
let buildName1 : (firstName: string, lastName?: string) => string = 
function(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

console.log(buildName1("Akber","Shah"))

//anonymous function ke concepts seekhny hain
