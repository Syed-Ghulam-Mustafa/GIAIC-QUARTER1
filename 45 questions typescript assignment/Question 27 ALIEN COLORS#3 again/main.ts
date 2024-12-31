// Question 27 ALIEN COLORS#3
// version 1.
let alien_color: string = "green"
let message: string = "the player earned 5 points."

if(alien_color == "green"){
    console.log(`the alien is ${alien_color}, so that ${message}`)
    console.log("the alien is green, so that the player earned 5 points.")
}

// version 2.
alien_color = "yellow"
message = "the player earned 10 points."

if(alien_color == "yellow"){
    console.log(`the alien is ${alien_color}, so that ${message}`)
    console.log("the alien is yellow, so that the player earned 10 points.")
}

// version 3.
alien_color = "red"
message = "the player earned 15 points."

if(alien_color == "red"){
    console.log(`the alien is ${alien_color}, so that ${message}`)
    console.log("the alien is red, so that the player earned 15 points.")
}

else{
    console.log("the player earned 20 points.")
}

