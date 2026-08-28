/* 
JSON
 ↓
fetch
 ↓
hämta fråga
 ↓
skapa svarsknappar
 ↓
klick
 ↓
+1 poäng
 ↓
currentQuestion++
 ↓
visa nästa fråga
 ↓
hitta högsta poängen
 ↓
showResult()

 */



async function loadQuiz (){


    let currentQuestion = 0;

     const scores = {
        "Fiffen": 0,
        "Artisten Själv": 0,
        "Rasø": 0,
        "Ynis": 0
    };


    const response = await fetch("data/quiz.json");

    if (!response.ok) {
        throw new Error (`Kunde inte ladda :( Försök igen om en stund)`);
    }

     const data = await response.json(); //Läs innehållet i response och tolka det som json

     const elQuestion = document.querySelector("#question"); //HTML-element, därför börjar den med "el"
      
     const elAnswers = document.querySelector("#answers")

     function showQuestion(){

        if (currentQuestion >= data.questions.length) {
        showResult();
        return;
    }

        elAnswers.textContent = "";

        const question = data.questions[currentQuestion]; // Spara den frågan vi är på just nu i variabeln question

        elQuestion.textContent = question.question; //Visa fråga

        question.answers.forEach(answer => {
        const button = document.createElement("button");

        
        button.textContent = answer.text;

        button.addEventListener("click", () => { //lägg till eventlistener som reagerar på klick
        scores[answer.character]++;
        console.log(scores);
        currentQuestion++;
        showQuestion();
        });

        elAnswers.append(button);

     })
    }

    function showResult() {

    let winner = "";
    let highestScore = 0;

    Object.entries(scores).forEach(([character, score]) => {

        if (score > highestScore) {
            highestScore = score;
            winner = character;
        }

    });

    elQuestion.textContent = `Du är ${winner}!`;
    elAnswers.textContent = `Ni svarade samma på ${highestScore} frågor av ${data.questions.length}.`;
}

     

    showQuestion();
    
}

loadQuiz();





