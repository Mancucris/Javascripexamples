let userName = "";

userName === 'Jane' ? console.log('Hello, Jane') : console.log("Hello!");

let userQuestion = "Is the sky blue?";

let randomNumber = (Math.floor(Math.random() * 8));


let eigthBall = randomNumber;

switch(eigthBall){
  case 0:
  console.log(userQuestion + ': It is certain');
  break;
  case 1:
  console.log(userQuestion + ': It is decidedly so');
  break;
  case 2:
  console.log(userQuestion + ': Reply hazy try again');
  break;
  case 3:
  console.log(userQuestion + ': Cannot predict now');
  break;
  case 4:
  console.log(userQuestion + ': Do not count on it');
  break;
  case 5:
  console.log(userQuestion + ': My sources say no');
  break;
  case 6:
  console.log(userQuestion + ': Outlook not so good');
  break;
  case 7:
  console.log(userQuestion + ': Signs point to yes');
  break;
  default:
  console.log('None');
  break
}
