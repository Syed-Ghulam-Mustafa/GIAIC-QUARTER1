let myVal : any
myVal = "abc"
myVal=44
myVal = true
myVal = []
myVal = Math.random


// Assigning a value of type unknown to variablesvof othr types

//Unknown

let value : unknown
value = true
value = 34
value = "hey!"
// unknown any ka safe replacement h. jo sb any mein hoga wohi sab unknow mn b hoga

// Never 
// Function returning never must not have a  reachAable end point
function error (message: string) :never {
    throw new Error(message)
}

inferred return type is never

