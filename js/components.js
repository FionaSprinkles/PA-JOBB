async function loadComponent (selector, file){
    const element = document.querySelector(selector);

    const response = await fetch(file);

    if (!response.ok) {
        throw new Error ('Kunde inte ladda ${file}');
    }

    element.innerHTML = await response.text();
}

loadComponent("#footer", "footer.html");
