async function loadQuiz (){
    const response = await fetch("data/quiz.json");

    if (!response.ok) {
        throw new Error (`Kunde inte ladda :( Försök igen om en stund)`);
    }

     const data = await response.json(); //Läs innehållet i response och tolka det som json

     const element = document.querySelector("#quiz");




     console.log(data);

     data.questions.forEach(question => {
        element.textContent = question.question;

     });

    console.log(data.characters);
}

loadQuiz();



