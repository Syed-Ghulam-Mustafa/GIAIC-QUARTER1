/// step09b_function_optional_parameter


//Named function with optional parameters
function buildName(firstName: string, lastName?: string) : string {
if (lastName)
return firstName + " " + lastName;
else
return firstName;
}

let result1 = buildName("Akber"); //ok
let result2 = buildName("Ghulam", "Mustafa", "Sr."); //error, too many parameters
var result3 = buildName("Akber", "Shah"); //also ok


//anonymous function type with optional parameters
var buildName1 : (firstName: string, lastName?: string) => string =
function(firstName: string, lastName?: string) : string {
if (lastName)
return firstName + " " + lastName;
else
return firstName;
}
