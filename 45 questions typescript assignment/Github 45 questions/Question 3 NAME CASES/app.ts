
//Question 3. NAME CASES. Store a person's name in a variable, and then print that person's name in lowercase,uppercase, and title case.

let _person_name: string = "Syed Ghulam Mustafa";

//how to make uppercase
console.log("UPPERCASE:", _person_name.toUpperCase())

//how to make lowercase
console.log("Lowercase", _person_name.toLowerCase())

//how to make titlecase
console.log("Titlecase:", _person_name.replace(/\bw/g,c => c.toUpperCase()));

console.log("Titlecase:", _person_name.replace(/\bw/g,c => c.toUpperCase()));


