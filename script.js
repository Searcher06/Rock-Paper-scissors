function recieve(user) {
    let userChoice = user;
    let AllcommputerChoices = ['rock', 'paper', 'scissors']
    let computerChoice = AllcommputerChoices[Math.floor(Math.random() * 3)];
    let userdisplay = document.getElementById('user');
    let computerdisplay = document.getElementById('computer')
    let message = document.getElementById('message');
    let computerScore = 0;
    if (userChoice == 'rock' && computerChoice == 'paper') {
        userdisplay.innerHTML = '✊';
        computerdisplay.innerHTML = '🖐';
        message.innerHTML = 'Computer Wins';
        computerScore = computerChoice + 1;
    } else if (userChoice == 'rock' && computerChoice == 'scissors') {
        userdisplay.innerHTML = '✊'
        computerdisplay.innerHTML = '✌';
        message.innerHTML = 'You Win';
    } else if (userChoice == 'rock' && computerChoice == 'rock') {
        userdisplay.innerHTML = '✊';
        computerdisplay.innerHTML = '✊';
        message.innerHTML = 'A tie';
    } else if (userChoice == 'paper' && computerChoice == 'rock') {
        userdisplay.innerHTML = '🖐';
        computerdisplay.innerHTML = '✊';
        message.innerHTML = 'You Win';
    } else if (userChoice == 'paper' && computerChoice == 'scissors') {
        userdisplay.innerHTML = '🖐';
        computerdisplay.innerHTML = '✌';
        message.innerHTML = 'Computer Wins';
    } else if (userChoice == 'paper' && computerChoice == 'paper') {
        userdisplay.innerHTML = '🖐';
        computerdisplay.innerHTML = '🖐';
        message.innerHTML = 'A tie';
    } else if (userChoice == 'scissors' && computerChoice == 'rock') {
        userdisplay.innerHTML = '✌';
        computerdisplay.innerHTML = '✊';
        message.innerHTML = 'Computer Wins';
    } else if (userChoice == 'scissors' && computerChoice == 'paper') {
        userdisplay.innerHTML = '✌';
        computerdisplay.innerHTML = '🖐';
        message.innerHTML = 'You Win';
    } else if (userChoice == 'scissors' && computerChoice == 'scissors') {
        userdisplay.innerHTML = '✌';
        computerdisplay.innerHTML = '✌';
        message.innerHTML = 'A tie';
    };


    // User Icon display
    // let userdisplay = document.getElementById('user')
    // if (userChoice == 'rock') {
    //     userdisplay.innerHTML = '✊';
    // } else if (userChoice == 'paper') {
    //     userdisplay.innerHTML = '🖐';
    // } else {
    //     userdisplay.innerHTML = '✌'
    // }


    // let computerdisplay = document.getElementById('computer');
    // if (computerChoice == 'rock') {
    //     computerdisplay.innerHTML = '✊';
    // } else if (computerChoice == 'paper') {
    //     computerdisplaydisplay.innerHTML = '🖐';
    // } else {
    //     computerdisplaydisplay.innerHTML = '✌'
    //}

}