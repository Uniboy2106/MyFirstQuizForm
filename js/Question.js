class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2 = createInput("Enter Correct Option No.");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');



    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    //this.message.hide();
    //Add hide() for questions, options & input box
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();

    this.input2.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("Q1 :- What starts and ends with an E, but has only one letter ?");
    this.question.position(20, 100);

    this.option1.html("1: Everyone");
    this.option1.position(35, 120);
    this.option2.html("2: Envelope");
    this.option2.position(35, 140);
    this.option3.html("3: Estimate");
    this.option3.position(35, 160);
    this.option4.html("4: Example");
    this.option4.position(35, 180);




    this.input1.position(150, 230);
    this.button.position(290, 300);
    this.input2.position(350,230);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank You, Your Answer Has Been Submitted!!!");
      this.message.position(100,170);
      this.hide();
    })


  }
}
