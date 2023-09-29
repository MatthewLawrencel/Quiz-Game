const quesJSON = [
    {
      correctAnswer: '9.69 seconds',
      options: ['9.0 seconds', '9.8 seconds ', '8.6 seconds', '9.69 seconds'],
      question:
        "What is the fastest time taken to run 100 meters by Usain Bolt?",
    },
    {
      correctAnswer: 'Sachin Tendulkar',
      options: [
        'Sachin Tendulkar',
        'Virat Kohli',
        'Ricky Ponting',
        'Don Bradman',
      ],
      question:
        "Who has more centuries scored in International cricket?",
    },
    {
      correctAnswer: 'Argentina',
      options: [
        'Argentina',
        'France',
        'Portugal',

      ],
      question:
        'Which Country won the FIFA 2022 championship?',
    },
    {
      correctAnswer: 'Island',
      options: [
        'Peninsula',
        'Gulf',
        'Strait',
        'Island'
      ],
      question: 'Which of the following geographical term related to the "piece of sub-continental land that is surrounded by water?"',
    },
    {
      correctAnswer: 'Arabia',
      options: [
        'India',
        'South Africa',
        'Arabia'
      ],
      question:
        "Which of the following is the world’s largest peninsula?",
    },
    {
        correctAnswer:'82°30 E',
        options: [
            '69°30 E',
            '75°30 E',
            '82°30 E',
            '90°30 E'
        ],
        question: 'Which of the following longitudes is the standard meridian of India?',
      },
  ];
     
      let score=0;
      let currentQuestion = 0;
      const totalScore = quesJSON.length;
  
      //Accessing all the elements:
      const questionEl = document.getElementById("question");
      const optionEl = document.getElementById("options");
      const scoreEl = document.getElementById("score");
      const nextEl = document.getElementById('next');
      showQuestion();
      
      nextEl.addEventListener('click', ()=>{
        scoreEl.textContent = `Score: ${score} / ${totalScore}`;
        nextQuestion();
      } );
  
      function showQuestion(){
         // Destructuring the object
       const{correctAnswer, options, question} = quesJSON[currentQuestion];
  
        //Setting question text content
      questionEl.textContent = question; 
      
      const shuffledOptions = shuffleOptions(options);
      
          //Populating the Options div with the buttons.
          shuffledOptions.forEach((opt) => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            optionEl.appendChild(btn);
    
        // Event handling on the button:
        btn.addEventListener("click", () => {
            if(opt === correctAnswer){
                score++;
            }
            else{
                score=score-0.25;
            }
            scoreEl.textContent = `Score: ${score} / ${totalScore}`;   
         nextQuestion();
            });
        });
    }
  
    function nextQuestion(){
      currentQuestion++;
      optionEl.textContent = '';
      if(currentQuestion>=quesJSON.length){
        questionEl.textContent = 'Quiz Completed!!';
        nextEl.remove();
      } 
      else{
        showQuestion();
      }
  
    }
  
  //Shuffling the Options
  function shuffleOptions(options) {
      for (let i = options.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * i + 1);
        [options[i], options[j]] = [
          options[j],
          options[i],
        ];
      }
      return options;
    }
    