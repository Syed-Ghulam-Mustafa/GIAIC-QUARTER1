var famousPlaces = ["Islamabad", "Ajk", "Karachi", "Bangladesh", "Delhi"];
console.log("Original Order: " + famousPlaces);
console.log.apply(console, famousPlaces.sort());
//console.log("Alphabetical Order " + famousPlaces.sort())
console.log("Original Order: " + famousPlaces);
console.log.apply(console, famousPlaces.sort().reverse());
//console.log("Reverse Alphabetical Order" + famousPlaces.sort().reverse())
console.log("Original Order: " + famousPlaces);
console.log("Reverse Original Order" + famousPlaces.reverse());
