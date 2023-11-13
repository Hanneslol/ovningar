
export function createHtmlForPerson(persons) {
    const personContainer = document.createElement("div");
    const nameTag = document.createElement("h1");
    const heightTag = document.createElement("h2");
    const weightTag = document.createElement("h2");
    const eyecolorTag = document.createElement("h2");



    personContainer.className = "personCard";
    nameTag.innerHTML = persons.name;
    heightTag.innerHTML = persons.height;
    weightTag.innerHTML = persons.weight;
    eyecolorTag.innerHTML = persons.eyecolor;


    personContainer.appendChild(nameTag);
    personContainer.appendChild(heightTag);
    personContainer.appendChild(weightTag);
    personContainer.appendChild(eyecolorTag);
    document.body.appendChild(personContainer);
}
