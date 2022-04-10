require("./instancehello");
const talk = require("./talk");
const questions = require("./talk/questions")

talk.Hello();
talk.Bye();

const answer = questions.ask("My question is?");
console.log(answer);