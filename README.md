# RockPaperScissors_TOP
My code for the rock paper scissors project on TOP

# PseudoCode
* Get Input from the computer via a function called get computer choice.
    * Create the function called get computer choice.
    * Create a variable to store a random number from 1-3.
    * Initialize a variable to store the computer's throw i.e rock, paper or scissors.
    * If the number is 1, assign rock to computer's throw. If it's 2, assign paper to computer's throw. If it is 3, assign scissors to computer's throw variable.
    * Return the value for computer's throw from the computer choice function.
* Get input from the human via a function called get human choice.
    * Create a variable that prompts the user for an entry — rock, paper, or scissors — and store the user response.
    * Return the user choice value from the function.
* Create global variable to store the computer's score. Initialize as 0.
* Create global variable to store the user's score. Initialize as 0.
* Create function to play a round. The function will take the user's choice, and the computer's choice as arguments
    * If user throw is equal to computer throw, user and computer score remain unchanged.
    * Else if user throws rock and computer throws paper, increment computer score by 1.
    * Else if user throws scissors and computer throws paper, increment user score by 1.
    * Else if user throws rock and computer throws scissors, increment user score by 1.
    * Else if user throws paper and computer throws scissors, increment computer score by 1.
    * Else if user throws paper and computer throws rock, increment user score by 1.
    * Else if user throws scissors and computer throws rock, increment computer score by 1.
* Create a function called play game.
    * Call the play round function 5 times.
    * Output the user score and the computer score.
    * If user's score is equal to computer's score, we have a draw. If user's score is greater than computer score, user wins. Else, computer wins.