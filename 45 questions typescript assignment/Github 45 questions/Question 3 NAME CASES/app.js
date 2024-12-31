var _person_name = "Syed Ghulam Mustafa";
//how to make uppercase
console.log("UPPERCASE:", _person_name.toUpperCase());
//how to make lowercase
console.log("Lowercase", _person_name.toLowerCase());
//how to make titlecase
console.log("Titlecase:", _person_name.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
console.log("Titlecase:", _person_name.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
