// step07a_enum

//choose one value property from multiple function
//mtlb 1 property ka multiple option
//paid option in website
// paid content hota h to wo us me hum enum ka use karty hain
//ye knowledge n lerning yt bolta h mujy samjh                
// nh aya ye iski baten.

enum Color {Red, Green, Blue};//starts with 0
var c: Color = Color.Green;
console.log(Color.Green);
console.log(Color[1]);
console.log(Color["Green"]);


enum Color1 {Red = 1, Green, Blue};
var colorName: string = Color1[3];
console.log(colorName)


enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);
console.log(Color2["Blue"]);
console.log(Color2.Blue);
console.log(Color2[4])


// enum ke syntax mein jab console.log mein uska propera address dalogy like
// Color1.Green
// Color2["BLue"]
// to wo print mein us color ka index number la k dega.
// aur jab index number dogy to wo uska color btayga. Green,Blue etc.


