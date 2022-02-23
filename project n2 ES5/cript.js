(function() {
  function Question(question, answers, correctAnswer){
    this.question = question;
    this.answers = answers; 
    this.correctAnswer = correctAnswer;

  }
  Question.prototype.displayQuestion =
  function(){
    console.log(this.question); 
    for (i = 0; i < this.answers.length; i++){  
    console.log(i + ': ' + this.answers[i]);
    }
  }
  Question.prototype.checkAnswer = 
  function(ans, callBack){
  let sc;
  if (ans === this.correctAnswer){
  console.log('Correct!'); 
    sc = callBack(true);
  }
  
  else {console.log('Incorrect, try again');
    sc = callBack(false);
  }
  this.displayScore(sc);
  }
  Question.prototype.displayScore = 
  function(score) {
  console.log('Your current score is ' + score);
  console.log('----------------')
  };
    


  let q1 = new Question(' Is J.S coolest programming language?',
                                                  ['Yes', 'No'],
                                                              0);
  let q2 = new Question('Is Saba good in programming?',
                                              ['Yes', 'No', 'Not good but not bad'],
                                                    2);
                                                
  let q3 = new Question('Will saba be successful in life?',
                                      ['No he will be a loser', 'Yes for Sure!!!'],
                                      1);
  let questions = [q1, q2, q3];
    //console.log(questionsArray);
          function score(){
            let sc = 0;
            return function(correct){
              if (correct) {
                sc++;
              }
              return sc;   
            }
          }
        let keepScore = score();


    function nextQuestion() {
    let number = Math.floor(Math.random() * questions.length);
    questions[number].displayQuestion();

    
    let answer = prompt('Select your answer');
    


    if(answer !== 'exit'){
        questions[number].checkAnswer(parseInt(answer), keepScore);
        nextQuestion(); 
      }
    };
    nextQuestion();


})(); 
