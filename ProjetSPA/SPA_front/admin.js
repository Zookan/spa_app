const apiUrl = "http://localhost:8000"; // Remplace par l'URL de ton API

// Fonction pour gérer la rétractation des formulaires
document.querySelectorAll('h2').forEach((header) => {
    header.addEventListener('click', function () {
        const form = this.nextElementSibling;
        if (form.style.display === 'none' || form.style.display === '') {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
        }
    });
});

// Créer une Race (POST)
document.getElementById('createForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const espece = document.getElementById('espece').value;
    const description = document.getElementById('description').value;
    const picture = document.getElementById('picture').value;

    const url = `${apiUrl}/animal/create?name=${encodeURIComponent(name)}&espece=${encodeURIComponent(espece)}&description=${encodeURIComponent(description)}&picture=${encodeURIComponent(picture)}`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Erreur:', error));
});

// Rechercher une Race (GET)
document.getElementById('getForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const id = document.getElementById('getId').value;

    fetch(`${apiUrl}/race/${id}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Erreur:', error));
});

// Afficher toutes les Races (GET)
document.getElementById('getAllBtn').addEventListener('click', function() {
    fetch(`${apiUrl}/races`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Erreur:', error));
});

// Supprimer une Race (DELETE)
document.getElementById('deleteForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const id = document.getElementById('deleteId').value;

    fetch(`${apiUrl}/race/${id}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Erreur:', error));
});

// Mettre à jour une Race (PUT)
document.getElementById('updateForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const id = document.getElementById('updateId').value;
    const name = document.getElementById('updateName').value;
    const espece = document.getElementById('updateEspece').value;
    const description = document.getElementById('updateDescription').value;
    const picture = document.getElementById('updatePicture').value;

    const url = `${apiUrl}/animal/create?id=${encodeURIComponent(id)}&name=${encodeURIComponent(name)}&espece=${encodeURIComponent(espece)}&description=${encodeURIComponent(description)}&picture=${encodeURIComponent(picture)}`;

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Erreur:', error));
});

// Créer un Animal (POST)
document.getElementById('createAnimalForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('animalName').value;
    const age = document.getElementById('age').value;
    const race = document.getElementById('race').value;
    const color = document.getElementById('color').value;
    const sex = document.getElementById('sex').value;
    const vaccined = document.getElementById('vaccined').value;
    const description = document.getElementById('animalDescription').value;
    const picture = document.getElementById('animalPicture').value;

    const url = `${apiUrl}/animal/update?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}&race=${encodeURIComponent(race)}&color=${encodeURIComponent(color)}&sex=${encodeURIComponent(sex)}&vaccined=${encodeURIComponent(vaccined)}&description=${encodeURIComponent(description)}&picture=${encodeURIComponent(picture)}`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Erreur:', error));
});

// Rechercher un Animal (GET)
document.getElementById('getAnimalForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const id = document.getElementById('getAnimalId').value;

    fetch(`${apiUrl}/animal/${id}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Erreur:', error));
});

// Afficher tous les Animaux (GET)
document.getElementById('getAllAnimalsBtn').addEventListener('click', function() {
    fetch(`${apiUrl}/animals`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Erreur:', error));
});

// Supprimer un Animal (DELETE)
document.getElementById('deleteAnimalForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const id = document.getElementById('deleteAnimalId').value;

    fetch(`${apiUrl}/animal/${id}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Erreur:', error));
});

// Mettre à jour un Animal (PUT)
document.getElementById('updateAnimalForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const id = document.getElementById('updateAnimalId').value;
    const name = document.getElementById('updateAnimalName').value;
    const age = document.getElementById('updateAge').value;
    const race = document.getElementById('updateRace').value;
    const color = document.getElementById('updateColor').value;
    const sex = document.getElementById('updateSex').value;
    const vaccined = document.getElementById('updateVaccined').value === 'true';
    const description = document.getElementById('updateAnimalDescription').value;
    const picture = document.getElementById('updateAnimalPicture').value;

    const url = `${apiUrl}/animal/update?id=${encodeURIComponent(id)}&name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}&race=${encodeURIComponent(race)}&color=${encodeURIComponent(color)}&sex=${encodeURIComponent(sex)}&vaccined=${encodeURIComponent(vaccined)}&description=${encodeURIComponent(description)}&picture=${encodeURIComponent(picture)}`;

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Erreur:', error));
});