


                                                    //all the variables
var btn = document.getElementById("btn");
var menu = document.getElementById("menu");
var main = document.getElementById("main");
var score = document.getElementById("score");
var results = document.getElementById("results");
var btnCompare = document.getElementById("btnCompare");
var btnReturnToGame = document.getElementById("btnReturnToGame");
                                                    //the picture/button objects
var dog = document.getElementById("dog");
var cat = document.getElementById("cat");
var potato = document.getElementById("potato");
                                                    //the counters
var roundCounter = document.getElementById("roundCounter");
var playerScore = document.getElementById("playerScore");
var computerScore = document.getElementById("computerScore");
var counter = 1;
var pScore = 0;
var cScore = 0;
var winOrLose = document.getElementById("winOrLose");
                                                    //results sections
var playerChoice = document.getElementById("playerChoice");
var playerChoiceImg = document.getElementById("playerChoiceImg");
var computerChoice = document.getElementById("computerChoice");
var computerChoiceImg = document.getElementById("computerChoiceImg");


var playerChoice;
var computerChoice;

                                                    //switches to the GAME screen and hides the other three
function GoToGame() {
    menu.style.display = "none";
    score.style.display = "block";
    main.style.display = "block";
    results.style.display = "none";
}
btn.addEventListener("click", GoToGame);            //i paired the relevant events to their function groups for better functional mental grouping 
btnReturnToGame.addEventListener("click", GoToGame);


function Compare() {                                //this is the processing logic, picture results, bg-color results, and round counter increaser. 
    computerChoice = Math.floor((Math.random() * 3) + 1);
    if((playerChoice == 1 && computerChoice == 2) || (playerChoice == 2 && computerChoice == 3) || (playerChoice == 3 && computerChoice == 1)) {
        pScore++;
        playerScore.innerHTML = pScore.toString();
        winOrLose.innerHTML = "You WIN!";
        results.style.backgroundColor = "#00FF00"
            if(computerChoice == 2) {
                playerChoiceImg.src = "images/dog_choose.jpg";
                computerChoiceImg.src = "images/cat.jpg";
            }
            else if (computerChoice == 3) {
                playerChoiceImg.src = "images/cat_choose.jpg";
                computerChoiceImg.src = "images/potato.jpeg";
            }
            else if (computerChoice == 1) {
                playerChoiceImg.src = "images/potato_choose.jpg";
                computerChoiceImg.src = "images/dog.jpg";
            }        
        }
    else if ((playerChoice == 1 && computerChoice == 3) || (playerChoice == 2 && computerChoice == 1) || (playerChoice == 3 && computerChoice == 2)) {
        cScore++;
        computerScore.innerHTML = cScore.toString();
        winOrLose.innerHTML = "You LOSE!";
        results.style.backgroundColor = "#FF2222"
            if(computerChoice == 3) {
                playerChoiceImg.src = "images/dog.jpg";
                computerChoiceImg.src = "images/potato_choose.jpg";
            }
            else if (computerChoice == 1) {
                playerChoiceImg.src = "images/cat.jpg";
                computerChoiceImg.src = "images/dog_choose.jpg";
            }
            else if (computerChoice == 2) {
                playerChoiceImg.src = "images/potato.jpeg";
                computerChoiceImg.src = "images/cat_choose.jpg";
            }        
    }
    else if ( playerChoice == computerChoice) {
        winOrLose.innerHTML = "A Tie.";
        results.style.backgroundColor = "gold"
            if(computerChoice == 1) {
                playerChoiceImg.src = "images/dog.jpg";
                computerChoiceImg.src = "images/dog.jpg";
            }
            else if (computerChoice == 2) {
                playerChoiceImg.src = "images/cat.jpg";
                computerChoiceImg.src = "images/cat.jpg";
            }
            else if (computerChoice == 3) {
                playerChoiceImg.src = "images/potato.jpeg";
                computerChoiceImg.src = "images/potato.jpeg";
            }        
    }
    counter++;
    roundCounter.innerHTML = counter.toString();
}

                                                    //switches to the RESULTS screen and hides the other three
function ShowResults() {
    menu.style.display = "none";
    score.style.display = "none";
    main.style.display = "none";
    results.style.display = "block";
}

                                                    //this is the grouping for the "throw" choices. the related and grouped events are directly below
function ChooseDog() {
    playerChoice = 1;
    Compare();
    ShowResults();
}
function ChooseCat() {
    playerChoice = 2;
    Compare();
    ShowResults();
}
function ChoosePotato() {
    playerChoice = 3;
    Compare();
    ShowResults();
}
dog.addEventListener("click", ChooseDog);
dog.addEventListener("mouseover", function(){dog.src="images/dog_choose.jpg"});
dog.addEventListener("mouseleave", function(){dog.src="images/dog.jpg"});

cat.addEventListener("click", ChooseCat);
cat.addEventListener("mouseover", function(){cat.src="images/cat_choose.jpg"});
cat.addEventListener("mouseleave", function(){cat.src="images/cat.jpg"});

potato.addEventListener("click", ChoosePotato);
potato.addEventListener("mouseover", function(){potato.src="images/potato_choose.jpg"});
potato.addEventListener("mouseleave", function(){potato.src="images/potato.jpeg"});

