/*Bryan Patten
patten_a06b.js
INFO 2124
Lisa Thoendel
01/23/2020*/

const standardInput = process.stdin;
standardInput.setEncoding('utf-8');

const story = 
    `You're walking along Dodge Street minding your own business
and you suddenly run into the Wizard of Benson standing
in on the corner of 50th and Dodge.

Do you (C)ontinue walking? (S)top and ask for some magical help?
(T)rip and fall into a pot hole?
`;

clearScreen();
console.log(story);

standardInput.on('data', function(text) {
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    /* WRITE YOUR SOLUTION BETWEEN THIS LINE */
    let walk = "You non-chalantly walk past the Wizard of Benson with the smug confidence of a person who don't need no stinkin' Wizard, lest a Wizard of Benson."
    let stop = "You walk up to the wizard, hands sweaty with anticipation. As you approach, you note the Wizard is wearing a Hawkeyes hat. Your disappointment proves more powerful than your desire to engage a Wizard and instead you turn left to buy a nice, warm Runza."
    let trip = "You begin approaching the wizard, hands sweaty with anticipation, mouth dry with general dehydration. As you take one step forward, you place your entire weight upon the forward leg but your foot fails to make contact with solid ground. As the entirety of your uncontrolled body's weight continues forward and downward simultaneously, your mind begins considering  what precisely the $50,000 increase in your home's assessment and matching tax increase is paying for."
    let other = "The Wizard watches as you approach. Determining you're not cool enough to hang with him, the Wizard smugly smiles and walked into a vape shop. You blew your chance."
    /*Set variables containing the statements given to the player depending on their choice of action*/
    if (text == "C" || text == "c") {
        clearScreen();       
        console.log(walk);
        endGame();
/*If the player enters upper or lower case C, function clearScreen is executed, the console outputs variable walk,
and function endGame is executed*/
} else if (text == "S" || text == "s") {
        clearScreen();
        console.log(stop);
        endGame();
/*If the player enters upper or lower case S, function clearScreen is executed, the console outputs variable stop,
and function endGame is executed*/
} else if (text == "T" || text == "t") {
        clearScreen();
        console.log(trip);
        endGame();
/*If the player enters upper or lower case T, function clearScreen is executed, the console outputs variable trip,
and function endGame is executed*/
} else { 
        clearScreen();
        console.log(other);
        endGame();
}
/*If the player enters anything other than the above, function clearScreen is executed, the console outputs variable other,
and function endGame is executed*/ 
    /* AND THIS LINE */
});

function endGame() {
    console.log("Game Over\n\n\n");
    process.exit();
}

function clearScreen() {
    console.log('\033[2J');
}