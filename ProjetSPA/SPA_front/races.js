const racesPerPage = 7;  // Nombre de races par page
let currentPage = 1;
let races = [];

function get_all_races() {
    const url = 'http://127.0.0.1:8000/races';
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        races = data.map(item => item.__data__);  // Extraire les données pertinentes
        displayRaces();  // Affiche les races sur la page
    })
    .catch(error => {
        console.error('Il y a eu un problème avec votre requête:', error);
    });
}

function displayRaces() {
    const raceList = document.getElementById('race-list');
    raceList.innerHTML = '';  // Vide la liste

    // Calcul de la pagination
    const start = (currentPage - 1) * racesPerPage;
    const end = start + racesPerPage;
    const paginatedRaces = races.slice(start, end);

    paginatedRaces.forEach(race => {
        const li = document.createElement('li');
        li.className = 'race-item';

        // Création de l'image
        const img = document.createElement('img');
        img.src = race.picture;
        img.alt = race.name;

        // Création du conteneur des détails
        const details = document.createElement('div');
        details.className = 'race-details';

        // Nom de la race
        const name = document.createElement('h2');
        name.textContent = race.name;

        details.appendChild(name);
        li.appendChild(img);
        li.appendChild(details);

        // Ajout d'un événement click pour afficher les détails
        li.addEventListener('click', () => {
            displayRaceDetails(race);
        });

        raceList.appendChild(li);
    });

    updatePagination();
}

function displayRaceDetails(race) {
    const raceDetails = document.getElementById('race-details');
    raceDetails.innerHTML = '';  // Vide les détails existants

    // Création de l'image
    const img = document.createElement('img');
    img.setAttribute('id', 'imgAnimal');
    img.src = race.picture;
    img.alt = race.name;

    // Nom de la race
    const name = document.createElement('h2');
    name.textContent = race.name;

    // Espèce
    const espece = document.createElement('p');
    espece.textContent = `Espèce: ${race.espece}`;

    // Description
    const description = document.createElement('p');
    description.textContent = `Description: ${race.description}`;

    // Ajout des éléments au DOM
    raceDetails.appendChild(img);
    raceDetails.appendChild(name);
    raceDetails.appendChild(espece);
    raceDetails.appendChild(description);
}

function updatePagination() {
    const pageInfo = document.getElementById('page-info');
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');

    pageInfo.textContent = `Page ${currentPage} sur ${Math.ceil(races.length / racesPerPage)}`;

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === Math.ceil(races.length / racesPerPage);
}

document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayRaces();
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    if (currentPage < Math.ceil(races.length / racesPerPage)) {
        currentPage++;
        displayRaces();
    }
});

// Appelle la fonction pour récupérer et afficher les données
get_all_races();
