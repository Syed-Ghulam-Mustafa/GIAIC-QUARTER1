let famous_person: string = "Quaid e Azam";
let alien_color: string = "green";

// version no. 1.
if(alien_color == "green"){
    console.log(`${famous_person} once said, the player earned 5 points.`)
    console.log("Quaid e Azam Once said, the player earned 5 points.")
}

// version no. 2.
alien_color = "yellow";
if(alien_color == "yellow"){
    console.log(`${famous_person} once said, the player earned 10 points.`)
    console.log("Quaid e Azam Once said, the player earned 10 points.")
}


// version no. 3.
alien_color = "red";
if(alien_color == "red")
    console.log(`${famous_person} once said, the player earned 15 points.`)
    console.log("Quaid e Azam Once said, the player earned 15 points.")

