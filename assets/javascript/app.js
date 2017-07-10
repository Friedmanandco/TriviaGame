
    
    //  Interval Demonstration
    //  Set our number counter to 100.
    var number = 200;
    var clock = number;
    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

   

    //  When the resume button gets clicked, execute the run function.
    $("#reset").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h4>" + number + "</h4>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();

  // Quiz Topic Body muscles of the human body Q1 Strongest Muscle, Q2 Muscle body mass, Q3 smallest muscle 
  // create variables for position, array of questions/answers, score
  // set functions- create a true/false "Boolean" click event for responses,  for loop, set timer, and append to pasge 
  // main functions- user clicks on event to confirm response and can check test results once completed 

 var position = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
 var questions = [

  ["What is the hardest working muscles in the human body", "Uterus", "Masseters", "Brain", "Heart", "D"],
  ["Muscles make up how much % of your total body weight?", "10%", "70%", "40%", "25%", "C"],
  ["What is the smallest muscle", "Tongue", "Stapedius", "Triceps", "Eye", "A"],
  ["What  is largest muscle in body", "Gluteus Maximus", "Sartorius muscle", "Thigh", "Bicep", "A"],
 ];
  function _(x) 
  {
    return document.getElementById(x);
  }
  function renderQuestion(){
    test = _("test");
    if(position >= questions.length){
      test.innerHTML = "<h2> You got "+correct+" of "+ questions.length +" questions correct</h2>"
      _("test_status").innerHTML = "Test Completed";
      position = 0;
      correct = 0;
        stop();
      return false;
      
        }



    _("test_status").innerHTML = "Question" + (position+1) + " of "+questions.length;
  
    question= questions[position] [0];
    chA = questions[position][1];
    chB = questions[position][2];
    chC = questions[position][3];
    chD = questions[position][4];
    test.innerHTML = "<h3>" + question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
    test.innerHTML += "<button onclick= 'checkAnswer()'>Submit Answer</button>";
  }
  function checkAnswer (){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;

      }
    }   
      if(choice == questions[position][5]) {
        correct++;  
      } 
      position++;
      renderQuestion();
      clearInterval();


  }

  window.addEventListener("load", renderQuestion, false);



  
