//* the program return rock, paper or scissors if userInput is equal 'paper'. 'rock' or 'scissors', the program return the value in Lowercase

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput ==='paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;}
        else{console.log('Error');}
    }

const getComputerChoice = () => {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
          return 'rock';
        case 1:
          return 'paper';
        case 2:
          return 'scissors';
        }
    };

const determineWinner = (getUserChoice, getComputerChoice) => {
    if (getComputerChoice === getUserChoice) {
    return "The game is a tie!";
    }

    if(getComputerChoice === 'paper'){
    if(getUserChoice === 'rock'){
    return 'You lose :('} 
    };

    if(getComputerChoice === 'rock'){
    if(getUserChoice === 'scissors'){
    return 'You lose :(!!'}
    };

    if(getComputerChoice === 'paper'){
        if(getUserChoice === 'scissors'){
        return 'You Win :D!!'}
        };

    if(getComputerChoice === 'scissors'){
        if(getUserChoice === 'paper'){
        return 'You Lose :(!!'}
        };

        if(getComputerChoice === 'rock'){
            if(getUserChoice === 'paper'){
            return 'You Win!!'}
            };
            
        if(getComputerChoice === 'scissors'){
                if(getUserChoice === 'rock'){
                return 'You Win!!'}
                };

                if(getComputerChoice === 'scissors'){
                    if(getUserChoice === 'bomb'){
                    return 'You Win!!'}
                    };
            
                    if(getComputerChoice === 'rock'){
                        if(getUserChoice === 'bomb'){
                        return 'You Win!!'}
                        };
                        
                    if(getComputerChoice === 'paper'){
                            if(getUserChoice === 'bomb'){
                            return 'You Win!!'}
                            };

      
};

const playGame = () => {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log(`You choice ${userChoice}`);
    console.log(`The computer choice ${computerChoice}`);
    console.log(determineWinner(userChoice,computerChoice));
}   

playGame();


