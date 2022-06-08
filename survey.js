const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questions = ["What's your name? Nicknames are also acceptable :) ", 
"What's an activity you like doing? ",
"What do you listen to while doing that? ",
"Which meal is your favourite (eg: dinner, brunch, etc.) ",
"What's your favourite thing to eat for that meal? ",
"Which sport is your absolute favourite? ",
"What is your superpower? In a few words, tell us what you are amazing at! "
];
let answers = [];

let i = 0;
const askQuestion = function(){
  if (i < 7){
    rl.question(questions[i], (answer) => {
      //answers[i] = answer;
      answers.push(answer);
      i++;
      console.log(`Thank you for your valuable feedback: ${answer}`);
      askQuestion();
    });
  }else{
    console.log(
    `Hello! My name is ${answers[0]}. My favourite activity is ${answers[1]}. I always listen to ${answers[2]} while I ${answers[1]}. \n My favourite meal is ${answers[3]}. My favourite thing to eat for each meal is ${answers[4]}. ${answers[5]} is my absolute favourite sport. My superpower is ${answers[6]}.`);
    rl.close();
  }
}
  
askQuestion();

