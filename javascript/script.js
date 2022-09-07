function navbar(){
    var x = document.getElementById("toggle-navbar");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

window.addEventListener('scroll',()=> apear());

function apear(){
    if(window.scrollY > 400){
        document.getElementById('navbar').style.top = "0px";
    } else {
        document.getElementById('navbar').style.top = "-70px";
        document.getElementById('toggle-navbar').style.display = "none";
    }
}

function copy(){
    navigator.clipboard.writeText('Matt.wuring@gmail.com');
    alert("Copied email");
}

class Project {
    constructor(name, date, description, images){
        this.name = name;
        this.date = date;
        this.description = description;
        this.images = images;
    }
}

const Test = new Project("Test", " 02-07-2004", "I made this project at the end of the first year", ["./pictures/Csharp.png", "./pictures/CSS.png"]);

const projects = [Test, {name:"Test 2", date:" 02-07-2022", discription:"I made this project at the end of the Second year"}, ];
const experiments = [{name:"Exp", date:"j", description:"hello"}];

function showWorks(){
    let i = 0;
    projects.forEach(project => {
        document.getElementById("project-grid").innerHTML += `<button onclick="show(projects, ${i})" class="item"></button>`;
        i++
    });

    let j = 0;
    experiments.forEach(experiment => {
        document.getElementById("experiment-grid").innerHTML += `<button onclick="show(experiments, ${j})" class="item"></button>`;
        j++
    });
}

function show(array, index){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("project-name").innerText = array[index].name;
    document.getElementById("project-date").innerText += array[index].date;
    document.getElementById("project-description").innerText = array[index].description;
    array[index].images.forEach(image => document.getElementById("project-images").innerHTML += `<img src="${image}">`);
    document.body.style.overflow = "hidden";
}

function back(){
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = "auto";
    document.getElementById("project-date").innerText = "Made:";
    document.getElementById("project-images").innerHTML = "";
}