function getText(){
    //custom name
    let nameVal =document.getElementById("themeName").value;
    //get the textarea
    let        text = document.getElementById("myText").value;
    // find the value for every color
    let     findB = text.search('black='),
            findR = text.search('red='),
            findG = text.search('green='),
            findY = text.search('yellow='),
            findBl = text.search('blue='),
            findP = text.search('magenta='),
            findC = text.search('cyan='),
            findW = text.search('white='),
            findBb = text.search('black[(]b'),
            findRb = text.search('red[(]b'),
            findGb = text.search('green[(]b'),
            findYb = text.search('yellow[(]b'),
            findBlb = text.search('blue[(]b'),
            findPb = text.search('magenta[(]b'),
            findCb = text.search('cyan[(]b'),
            findWb = text.search('white[(]b'),
            findBG = text.search('background='),
            findFG = text.search('text='),
    //format the value
            blackVal = '"' + '#'+text.substring(findB+6, findB+12)+'"' ,
            redVal = '"' + '#'+text.substring(findR+4, findR+10)+'"',
            greenVal = '"' + '#'+text.substring(findG+6, findG+12)+'"',
            yellowVal = '"' + '#'+text.substring(findY+7, findY+13)+'"',
            blueVal = '"' + '#'+text.substring(findBl+5, findBl+11)+'"',
            purpleVal = '"' + '#'+text.substring(findP+8, findP+14)+'"',
            cyanVal = '"' + '#'+text.substring(findC+5, findC+11)+'"',
            whiteVal = '"' + '#'+text.substring(findW+6, findW+12)+'"',
            bBlackVal = '"' + '#'+text.substring(findBb+12, findBb+18)+'"',
            bRedVal = '"' + '#'+text.substring(findRb+10, findRb+16)+'"',
            bGreenVal = '"' + '#'+text.substring(findGb+12, findGb+18)+'"',
            bYellowVal = '"' + '#'+text.substring(findYb+13, findYb+19)+'"',
            bBlueVal = '"' + '#'+text.substring(findBlb+11, findBlb+17)+'"',
            bPurpleVal = '"' + '#'+text.substring(findPb+14, findPb+20)+'"',
            bCyanVal = '"' + '#'+text.substring(findCb+11, findCb+17)+'"',
            bWhiteVal = '"' + '#'+text.substring(findWb+12, findWb+18)+'"',
            backgroundVal = '"' + '#'+text.substring(findBG+11, findBG+17)+'"',
            foregroundVal = '"' + '#'+text.substring(findFG+5, findFG+11)+'"';
   //the result table
    const result = `,{
    "name": "${nameVal}",
    "black": ${blackVal},
    "red": ${redVal},
    "green": ${greenVal},
    "yellow": ${yellowVal},
    "blue": ${blueVal},
    "purple": ${purpleVal},
    "cyan": ${cyanVal},
    "white": ${whiteVal},
    "brightBlack": ${bBlackVal},
    "brightRed": ${bRedVal},
    "brightGreen": ${bGreenVal},
    "brightYellow": ${bYellowVal},
    "brightBlue": ${bBlueVal},
    "brightPurple": ${bPurpleVal},
    "brightCyan": ${bCyanVal},
    "brightWhite": ${bWhiteVal},
    "background": ${backgroundVal},
    "foreground": ${foregroundVal}
    }
    `
    //check the text input if it correct
    //first line
    let start = text.search('\\[');
    if (start === 0){
        //last line
        let name0 = text.search('name0=');
        let finN0 = text.substring(name0, name0+5);
        if (finN0 === 'name0'){
            //run the script
            document.getElementById("done").innerText = result;
        }
        else {
        //print error 1
        document.getElementById("done").innerText = 'your xshell color scheme code is not complete'; 
        }
    } 
   else { 
    //print error 2
    document.getElementById("done").innerText = 'please enter xshell color scheme code your code is wrong';
   }
}        
