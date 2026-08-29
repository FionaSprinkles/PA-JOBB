// Gör jobbformuläret till en array

const form = document.querySelector("#addJob");


/*
Array för alla olika jobb. Hämtar vad som finns sparat under "jobs",
Gör om texten från localStorage tillbaka till en array,
och om det inte finns något sparat -> gör tom array.
*/
let jobs = JSON.parse(localStorage.getItem("jobs")) || []; 

console.log(jobs);

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const title = document.querySelector("#jobTitle").value;
    const location = document.querySelector("#jobLocation").value;
    const description = document.querySelector("#jobDescription").value;
    const salary = document.querySelector("#jobSalary").value;

    //Gör ett objekt av alla konstanter ↑ ovanför
    const job = { 
    title: title,
    location: location,
    description: description,
    salary: salary
};


    jobs.push(job);

    localStorage.setItem("jobs", JSON.stringify(jobs));

    console.log(jobs);
});