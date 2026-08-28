async function loadQuiz (){
    const response = await fetch("data/quiz.json");

    if (!response.ok) {
        throw new Error (`Kunde inte ladda :( Försök igen om en stund)`);
    }

     const data = await response.json(); //Läs innehållet i response och tolka det som json

     const element = document.querySelector("#question");
     const elAnswers = document.querySelector("#answers")




     console.log(data);

     data.questions.forEach(question => {
        element.textContent = question.question;


        question.answers.forEach(answer => {
        const button = document.createElement("button");

        button.textContent = answer;

        elAnswers.append(button);

     })

     });

     

    console.log(data.characters);
}

loadQuiz();



