async function loadCharacters (){
    const response = await fetch("data/characters.json");

    if (!response.ok) {
        throw new Error (`Kunde inte ladda :( Försök igen om en stund)`);
    }

    const characters = await response.json(); //Läs innehållet i response och tolka det som json

     const element = document.querySelector("#characters");

     console.log(characters[0].name);
     console.log(element);

     characters.forEach(character => {
        element.textContent += character.name;
     });

    console.log(characters);
}

loadCharacters();



