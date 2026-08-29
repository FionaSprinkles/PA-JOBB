// Gör jobbformuläret till en array

const form = document.querySelector("#addJob");

const elJobList = document.querySelector("#jobList") //HTML element


/*
Array för alla olika jobb. Hämtar vad som finns sparat under "jobs",
Gör om texten från localStorage tillbaka till en array,
och om det inte finns något sparat -> gör tom array.
*/
let jobs = JSON.parse(localStorage.getItem("jobs")) || []; 

console.log(jobs);

//skapa element och Visa alla inlagda jobb
    function showJobs(){
        
        elJobList.textContent="";

        jobs.forEach(job => {

            //För varje jobb gör:

            //1. Gör ett <article>-element och lägg i:
            const article = document.createElement("article");
            //2. Visa titel
            const title = document.createElement("h3");
            title.textContent =job.title;
            //3. Visa location
            const location = document.createElement("h4");
            location.textContent = job.location;
            //4. Visa description
            const description = document.createElement("p");
            description.textContent = job.description;
            //5. Visa salary
            const salary = document.createElement("p");
            salary.textContent = job.salary;

            // Append = lägg in allting innuti article
            article.append(title,location,description,salary);

            //Lägg in article i html-elementet elJobList
            elJobList.append(article)

            
        });


    }

// Lägg till nytt jobb
form.addEventListener("submit", (event) => {

    event.preventDefault();

    const title = document.querySelector("#jobTitle").value;

    if (title.toLowerCase().includes("skibidi")) {
    alert("TYVÄRR INGEN SKIBIDI 🚽");
    return;
}

    const location = document.querySelector("#jobLocation").value;
    const description = document.querySelector("#jobDescription").value;
    const salary = document.querySelector("#jobSalary").value;

    if (salary.length <= 3) {
    alert("LÖN MÅSTE VARA MER ÄN TRE TECKEN");
    return;
    }


    //Gör ett objekt av alla konstanter ↑ ovanför
    const job = { 
    title: title,
    location: location,
    description: description,
    salary: salary
};


    jobs.push(job);

    localStorage.setItem("jobs", JSON.stringify(jobs));

    showJobs();

    form.reset(); 

    console.log(jobs);
});

showJobs();