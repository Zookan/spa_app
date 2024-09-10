const animalsPerPage = 7;  // Nombre de animals par page
let currentPage = 1;
let animals = [];

function get_all_animals() {
    const url = 'http://127.0.0.1:8000/animals';
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        animals = data.map(item => item.__data__);  // Extraire les données pertinentes
        displayanimals();  // Affiche les animals sur la page
    })
    .catch(error => {
        console.error('Il y a eu un problème avec votre requête:', error);
    });
}

function displayanimals() {
    const animalList = document.getElementById('animal-list');
    animalList.innerHTML = '';  // Vide la liste

    // Calcul de la pagination
    const start = (currentPage - 1) * animalsPerPage;
    const end = start + animalsPerPage;
    const paginatedanimals = animals.slice(start, end);

    paginatedanimals.forEach(animal => {
        const li = document.createElement('li');
        li.className = 'race-item';

        // Création de l'image
        const img = document.createElement('img');
        img.src = animal.picture;
        img.alt = animal.name;

        // Création du conteneur des détails
        const details = document.createElement('div');
        details.className = 'race-details';

        // Nom de la animal
        const name = document.createElement('h2');
        name.textContent = animal.name;

        details.appendChild(name);
        li.appendChild(img);
        li.appendChild(details);

        // Ajout d'un événement click pour afficher les détails
        li.addEventListener('click', () => {
            displayanimalDetails(animal);
        });

        animalList.appendChild(li);
    });

    updatePagination();
}

function displayanimalDetails(animal) {
    const animalDetails = document.getElementById('animal-details');
    animalDetails.innerHTML = '';  // Vide les détails existants

    // Création de l'image
    const img = document.createElement('img');
    img.setAttribute('id', 'imgAnimal');
    img.src = animal.picture;
    img.alt = animal.name;

    // Nom de l'animal
    const name = document.createElement('p');
    name.textContent = animal.name;

    // Age de l'animal
    const age = document.createElement('p');
    age.textContent = `Âge: ${animal.age}`;

    // Espèce
    const espece = document.createElement('p');
    espece.textContent = `Race: `;

    // Couleur de l'animal
    const couleur = document.createElement('p');
    couleur.textContent = `Pelage: ${animal.color}`;

    // Sexe de l'animal
    const sex = document.createElement('p');
    sex.textContent = `Sexe: ${animal.sex}`;

    // Vaccin de l'animal
    const vaccin = document.createElement('p');
    if(animal.vaccined) vaccin.textContent = `Vacciné: Oui`;
    else vaccin.textContent = `Vacciné: Non`;

    // Description
    const description = document.createElement('p');
    description.textContent = `Description: ${animal.description}`;

    // Ajout des éléments au DOM
    animalDetails.appendChild(img);
    animalDetails.appendChild(name);
    animalDetails.appendChild(age);
    animalDetails.appendChild(sex);
    animalDetails.appendChild(espece);
    animalDetails.appendChild(couleur);
    animalDetails.appendChild(vaccin);
    animalDetails.appendChild(description);

    // Appel à la fonction pour obtenir la race de l'animal
    get_Race_by_Id(animal.race, espece);
}

function updatePagination() {
    const pageInfo = document.getElementById('page-info');
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');

    pageInfo.textContent = `Page ${currentPage} sur ${Math.ceil(animals.length / animalsPerPage)}`;

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === Math.ceil(animals.length / animalsPerPage);
}

document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayanimals();
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    if (currentPage < Math.ceil(animals.length / animalsPerPage)) {
        currentPage++;
        displayanimals();
    }
});

// Appelle la fonction pour récupérer et afficher les données
get_all_animals();


function get_Race_by_Id(animalId, especeElement) {
    const url = 'http://127.0.0.1:8000/race/' + animalId;
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        races = data.map(item => item.__data__);
        especeElement.textContent = `Race: ${races[0].name}`;  // Met à jour le texte de l'élément avec la race
    })
    .catch(error => {
        console.error('Il y a eu un problème avec votre requête:', error);
        especeElement.textContent = 'Race: Inconnue';  // Affiche un message d'erreur en cas de problème
    });
}
