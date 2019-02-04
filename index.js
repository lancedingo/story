const  rs  =  require('readline-sync');

let points = 0
let crash = 0
let questions;
let begin;
let answer;
let playAgain;

function correct() {
    points += 1
    console.log(`You continue driving`)
}

function wrong() {
    crash++
    if (crash >= 1) {
        console.log('Bus crashed into you. Congrats youre dead!')
        gameOver()
    }
    else {
        console.log(`You continue driving`)
    }
}

function winner() {
    if (points === 4 && crash < 1) console.log('Congrats! You live to ride another day!')


}

function gameOver() {
    console.log('Would you like to play again?')
    playAgain = rs.question('(Y)es | (N)o: ').toLowerCase()
    playAgain === 'y' || playAgain === 'yes' ? newGame() : process.exit()
}

function newGame() {
    playAgain = true
    while (playAgain === true) {
        points = 0
        crash = 0

        questions = [
            question1 = function() {
                console.log('What do you want to Drive?')
                answer = rs.question(' cruiser | crotch rocket | Audi | Bus |: ', {
                    trueValue: 'crotch rocket',
                    falseValue: ''
                })
                answer === true ? correct() : wrong()
            },
            question2 = function() {
                console.log('Do you wish to go on the interstate?')
                answer = rs.question('| Yes| No, take a nice cruise on the beach | Go stunting | Race cop cars|: ', {
                    trueValue: 'Yes',
                    falseValue: ''
                })
                answer === true ? correct() : wrong()
            },
            question3  = function() {
                console.log('The speed limit is 55mph. What speed do you want to go?')
                answer = rs.question('| 40mph | 55mph | 60mph | 160mph |: ', {
                    trueValue: '160mph',
                    falseValue: ''
                })
                answer === true ? correct() : wrong()
            },
            question4 = function() {
                console.log('You pass a cop going 105mph over the speed limit, what do you do?')
                answer = rs.question('| stop for the cop | pop a wheelie and disappear | get off the interstate | hit the brakes |: ', {
                    trueValue: 'pop a wheelie and disappear',
                    falseValue: ''
                })
                answer === true ? correct() : wrong()
            }
        ]

        console.log('Squid life, You ready to ride?')
        begin = rs.question('(Y)es | (N)o: ').toLowerCase()
        if (begin === 'y' || begin === 'yes') {
            questions.forEach(function(question) {
                crash < 1 ? question() : console.log('You suck, try again?')
                winner()
            })
        }
        else {
            process.exit()
        }
    }
}

newGame()
