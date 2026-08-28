async function loadQuiz (){

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

     const element = document.querySelector("#question");
     const elAnswers = document.querySelector("#answers")




     console.log(data);

     data.questions.forEach(question => {
        element.textContent = question.question;


        question.answers.forEach(answer => {
        const button = document.createElement("button");

        button.textContent = answer.text;

        button.addEventListener("click", () => { //lägg till eventlistener som reagerar på klick
        scores[answer.character]++;
        console.log(scores);
        });

        elAnswers.append(button);

    

     })

     });

     

    console.log(data.characters);
    
}

loadQuiz();



