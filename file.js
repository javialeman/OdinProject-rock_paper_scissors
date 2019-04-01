const player_points=document.querySelector('#player-points');
const computer_points=document.querySelector('#computer-points');
const result=document.querySelector('#result');
console.log(player_points);
const buttons=document.querySelectorAll('button');
let wins=0;
let losts=0;
let description="";
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let result=playRound(button.id,computerPlay());
        check_end();
    });
});
const check_end=function(){
    if (wins===5){
        if(!alert('You won! Another round?')){window.location.reload();}
    }
    if (losts===5){
        if(!alert('Computer won! Another round?')){window.location.reload();}
    }
}

function computerPlay(){
    let options=['Rock','Paper','Scissors']
    return options[Math.floor(Math.random() * 3)];
}

function insensitivize(word){
    w1=word.substring(0,1)
    w2=word.substring(1)
    word=(w1.toUpperCase()+w2.toLowerCase())
    return word
}

function playRound(playerSelection, computerSelection){
    console.log(result);
    playerSelection=insensitivize(playerSelection)
    computerSelection=insensitivize(computerSelection)
    console.log(playerSelection,computerSelection)
    if (playerSelection==computerSelection){
        description="Tie! No one loses or wins."
    }
    else {
        let options=['Rock','Paper','Scissors']
        let position=options.indexOf(playerSelection)
        if (options[(position+1)%3]===computerSelection){
            description="Oh! You lost against the computer. " + computerSelection + " beats " + playerSelection + "."
            losts++;
            computer_points.textContent=losts;
        }
        else if (position in options){
            description="Yes! You won against the computer. " + playerSelection + " beats " + computerSelection + "."
            wins++;
            player_points.textContent=wins;
        }
    }
    result.textContent=description;
}

