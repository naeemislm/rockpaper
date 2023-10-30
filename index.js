let score; 
score = JSON.parse(localStorage.getItem('savedscore'));
//console.log(score);
if (score === null){
    score = {
        wins : 0,
        losses :0,
        draws : 0}
}


function computerMove(){
    let move;
    let x = Math.random();

    if(x<=0.33){
        move = "rock"; } 
    else if(x<=0.66){
        move = "paper"; }
    else{
        move = "scissor"; }
    return move;
}


function playGame(button){
    let result;
    deviceTurn = computerMove();

    if (button === "rock"){
        if(deviceTurn === "rock"){
            result = 'Draw';
            updateScore(result); }
        else if (deviceTurn === "paper"){
            result = 'Lost';
            updateScore(result); }
        else {
            result = 'Win';
            updateScore(result); }
    }    
    else if(button === "paper"){
        if(deviceTurn === "rock"){
            result = 'Win';
            updateScore(result); }
        else if (deviceTurn === "paper"){
            result = 'Draw';
            updateScore(result); }
        else {
            result = 'Lost'
            updateScore(result); }
    }
    else{
        if(deviceTurn === "rock"){
            result ='Lost';
            updateScore(result); }
        else if (deviceTurn === "paper"){
            result = 'Win';
            updateScore(result); }
        else {
            result = 'Draw'
            updateScore(result); }
    }
    showScore();
    document.querySelector('.js-result1').innerHTML=`${result} !!!`;
    document.querySelector('.js-result2')
        .innerHTML=`You 
        <img src ="images/${myInput}_02.png" class ="result-icon result-button"> 
        <img src ="images/${deviceTurn}_02.png" class ="result-icon result-button"> 
        Computer`;
    localStorage.setItem("savedscore", JSON.stringify(score));
}


function updateScore(result){
    if (result==='Win'){
        score.wins++; }
    else if (result==='Lost'){
        score.losses++; }
    else{
        score.draws++; }
}


function showScore(){
    document.querySelector('.js-score').innerText =`Wins:${score.wins}, Losses:${score.losses}, Draws:${score.draws}`;
}