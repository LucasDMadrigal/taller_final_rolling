// import { getData } from "./getData.js";

const getData = async () =>  {
    try {
    const resp = await fetch(`https://swapi.dev/api/people`)

        const data = await resp.json();

        return data.results
    } catch (error) {
       throw new Error(error) 
    }
}

getData(1).then((resp) => renderAcordeon(resp));

const renderAcordeon = (personajes) => {
  console.log(personajes);
  const acordeonContainer = document.getElementById("accordionExample");
  acordeonContainer.innerHTML = "";
  personajes.map((personaje, index) => {
    const acordeon = document.createElement("div");

    acordeon.innerHTML = `
    <div class="accordion-item">
    <h2 class="accordion-header" id="${index}-header">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
    ${personaje.name}
    </button>
    </h2>
    <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="${index}-header" data-bs-parent="#accordionExample">
    <div class="accordion-body">
        <ul>
            <li>Birth year: ${personaje.birth_year}</li>
            <li>Gender: ${personaje.gender}</li>
            <li>Hair color: ${personaje.hair_color}</li>
            <li>Height: ${personaje.heigth}</li>
            <li>Mass: ${personaje.mass}</li>
            <li><button class="btn btn-primary">Planet</button></li>
        </ul>
    </div>
    </div>
    </div>
    `;
    acordeonContainer.appendChild(acordeon);
  });
};

