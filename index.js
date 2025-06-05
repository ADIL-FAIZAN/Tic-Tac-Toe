
function winLoss(obj) {
    


    if (obj[0] == 1 && obj[1] == 1 && obj[2] == 1 || obj[3] == 1 && obj[4] == 1 && obj[5] == 1 || obj[6] == 1 &&  obj[7] == 1 && obj[8] == 1 || obj[0] == 1 &&  obj[3] == 1 && obj[6] == 1 || obj[1] == 1 &&  obj[4] == 1 && obj[7] == 1 ||  obj[2] == 1 &&  obj[5] == 1 && obj[8] == 1  || obj[0] == 1 &&  obj[4] == 1 && obj[8] == 1 ||  obj[2] == 1 &&  obj[4] == 1 && obj[6] == 1 ) {  //player 1 win
       
        alert("Player 1 Win,Refresh the page For Playing Again!");
        return true;
 
    } else if(obj[0] == 2 && obj[1] == 2 && obj[2] == 2 || obj[3] == 2 && obj[4] == 2 && obj[5] == 2 || obj[6] == 2 &&  obj[7] == 2 && obj[8] == 2 ||  obj[0] == 2 &&  obj[3] == 2 && obj[6] == 2 || obj[1] == 2 &&  obj[4] == 2 && obj[7] == 2 ||  obj[2] == 2 &&  obj[5] == 2 && obj[8] == 2  || obj[0] == 2 &&  obj[4] == 2 && obj[8] == 2 ||  obj[2] == 2 &&  obj[4] == 2 && obj[6] == 2 ) {
        
        alert("Player 2 Win,Refresh the page For Playing Again!");
        return true;

    }else if(obj[0] != "empty" && obj[1] != "empty" && obj[2] != "empty" && obj[3] != "empty" && obj[4] != "empty" && obj[5] != "empty" && obj[6] != "empty" && obj[7] != "empty" && obj[8] != "empty"){
        
      alert( "Match Tied,Refresh the page For Playing Again!");
      return true;
          
    }





};












function player1(obj,e,playerTurn) {
    
    let turnheading = document.querySelector("#turnheading");
    
    turnheading.innerText="Player 2 Turn:"
   


        
if(obj[e.target.id] == "empty") {  // Agr pehle option empty hai
    
obj[e.target.id] = 1;

    
    let crossIcon = document.createElement("i");
    crossIcon.setAttribute("class", "fa-regular fa-x");
    crossIcon.setAttribute("id", "crossicon");
    crossIcon.style.color=" #d21e1e";
    e.target.append(crossIcon);

};
    

    playerTurn = 2
    
    return  playerTurn ;
    
};  // Player1 function closed here


function player2(obj,e,playerTurn) {
    

let turnheading = document.querySelector("#turnheading");
    
turnheading.innerText="Player 1 Turn:"
    
        
if(obj[e.target.id] == "empty") {  // Agr pehle option empty hai
    
obj[e.target.id] = 2;


    let trueIcon = document.createElement("i");
    trueIcon.setAttribute("class", "fa-solid fa-check");
    trueIcon.setAttribute("id", "trueicon");
    trueIcon.style.color=" #3ff90b;";
    e.target.append(trueIcon);

};
    
   
    playerTurn = 1;

  return playerTurn ;
    
    
};


function main() {
    

    let playerTurn = 1;

    let obj = {
    
        0: "empty",
        1: "empty",
        2: "empty",
        3: "empty",
        4: "empty",
        5: "empty",
        6: "empty",
        7: "empty",
        8: "empty"
    
    };


   
let alldiv = document.querySelector("#maindiv");

alldiv.addEventListener("click", (e) => {

    if (playerTurn == 1) {
        
        playerTurn = player1(obj,e,playerTurn);
        //Win  Loss  function    
        if (winLoss(obj)) {
        
            alldiv.innerHTML = "";
    };

    } else {
        
       playerTurn= player2(obj,e,playerTurn); 
//Win  Loss  function    
       if (winLoss(obj)) {
        
            alldiv.innerHTML = "";
    };
        
    }
           
          
});  //Event closed here
 
  
};  //Main function closed here

//order of execution


main();







