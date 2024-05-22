/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

const tabPersonnes = [
    {
        nom: 'Doe',
        prenom: 'John',
        age: 25,
        localite: 'New York',
    },
    {
        nom: 'Doe',
        prenom: 'Jane',
        age: 30,
        localite: 'Los Angeles',
    },
    {
        nom: 'Doe',
        prenom: 'Jack',
        age: 28,
        localite: 'Chicago',
    },
    {
        nom: 'Doe',
        prenom: 'Jill',
        age: 35,
        localite: 'Miami',
    },
    {
        nom: 'Doe',
        prenom: 'Jim',
        age: 40,
        localite: 'San Francisco',
    },
    {
        nom: 'Smith',
        prenom: 'Emily',
        age: 22,
        localite: 'Houston',
    },
    {
        nom: 'Smith',
        prenom: 'Michael',
        age: 33,
        localite: 'Phoenix',
    },
    {
        nom: 'Smith',
        prenom: 'Sarah',
        age: 27,
        localite: 'Philadelphia',
    },
    {
        nom: 'Smith',
        prenom: 'David',
        age: 36,
        localite: 'San Antonio',
    },
    {
        nom: 'Smith',
        prenom: 'Emma',
        age: 29,
        localite: 'San Diego',
    },
    {
        nom: 'Johnson',
        prenom: 'John',
        age: 24,
        localite: 'Dallas',
    },
    {
        nom: 'Johnson',
        prenom: 'Jane',
        age: 31,
        localite: 'Austin',
    },
    {
        nom: 'Johnson',
        prenom: 'Jack',
        age: 28,
        localite: 'Fort Worth',
    },
    {
        nom: 'Johnson',
        prenom: 'Jill',
        age: 34,
        localite: 'Columbus',
    },
    {
        nom: 'Johnson',
        prenom: 'Jim',
        age: 41,
        localite: 'Charlotte',
    },
    {
        nom: 'Williams',
        prenom: 'Emily',
        age: 26,
        localite: 'Indianapolis',
    },
    {
        nom: 'Williams',
        prenom: 'Michael',
        age: 32,
        localite: 'Seattle',
    },
    {
        nom: 'Williams',
        prenom: 'Sarah',
        age: 23,
        localite: 'Denver',
    },
    {
        nom: 'Williams',
        prenom: 'David',
        age: 38,
        localite: 'Washington',
    },
    {
        nom: 'Williams',
        prenom: 'Emma',
        age: 27,
        localite: 'Boston',
    },
    {
        nom: 'Brown',
        prenom: 'John',
        age: 25,
        localite: 'El Paso',
    },
    {
        nom: 'Brown',
        prenom: 'Jane',
        age: 30,
        localite: 'Detroit',
    },
    {
        nom: 'Brown',
        prenom: 'Jack',
        age: 28,
        localite: 'Nashville',
    },
    {
        nom: 'Brown',
        prenom: 'Jill',
        age: 35,
        localite: 'Memphis',
    },
    {
        nom: 'Brown',
        prenom: 'Jim',
        age: 40,
        localite: 'Portland',
    },
    {
        nom: 'Davis',
        prenom: 'Emily',
        age: 22,
        localite: 'Oklahoma City',
    },
    {
        nom: 'Davis',
        prenom: 'Michael',
        age: 33,
        localite: 'Las Vegas',
    },
    {
        nom: 'Davis',
        prenom: 'Sarah',
        age: 27,
        localite: 'Louisville',
    },
    {
        nom: 'Davis',
        prenom: 'David',
        age: 36,
        localite: 'Baltimore',
    },
    {
        nom: 'Davis',
        prenom: 'Emma',
        age: 29,
        localite: 'Milwaukee',
    },
    {
        nom: 'Miller',
        prenom: 'John',
        age: 24,
        localite: 'Albuquerque',
    },
    {
        nom: 'Miller',
        prenom: 'Jane',
        age: 31,
        localite: 'Tucson',
    },
    {
        nom: 'Miller',
        prenom: 'Jack',
        age: 28,
        localite: 'Fresno',
    },
    {
        nom: 'Miller',
        prenom: 'Jill',
        age: 34,
        localite: 'Sacramento',
    },
    {
        nom: 'Miller',
        prenom: 'Jim',
        age: 41,
        localite: 'Kansas City',
    },
    {
        nom: 'Moore',
        prenom: 'Emily',
        age: 26,
        localite: 'Mesa',
    },
    {
        nom: 'Moore',
        prenom: 'Michael',
        age: 32,
        localite: 'Atlanta',
    },
    {
        nom: 'Moore',
        prenom: 'Sarah',
        age: 23,
        localite: 'Omaha',
    },
    {
        nom: 'Moore',
        prenom: 'David',
        age: 38,
        localite: 'Raleigh',
    },
    {
        nom: 'Moore',
        prenom: 'Emma',
        age: 27,
        localite: 'Colorado Springs',
    }
];

// Récupère le 1er formulaire du document
const formulaire = document.querySelector('form');
// Récupère les champs textes depuis l'id
const txtNom = document.querySelector('#nom');
const txtPrenom = document.querySelector('#prenom');
const txtAge = document.querySelector('#age');
const txtLocalite = document.querySelector('#localite');
const txtRechercher = document.querySelector('#rechercher');
// Récupère le premier corps de tableau <tbody>
const tableBody = document.querySelector('tbody');
// Test si la récupération des éléments HTML est OK
console.log(formulaire, txtNom, tableBody, txtRechercher);

//Fonction qui filtre le tableau par prénom ou par nom
function filtreTableau(){
    if(txtRechercher.value == ''){
        return tabPersonnes;
    }
    return tabPersonnes.filter(function(obj){
        return obj.prenom.toLowerCase().includes(txtRechercher.value.toLowerCase()) ||
            obj.nom.toLowerCase().includes(txtRechercher.value.toLowerCase());
    });
}

//fonction qui créé un tableau HTML à partir du tableau JS des personnes
function construireTableau()
{
    //Vide le tableau
    tableBody.innerHTML = "";

    //Filtrer le tableau tabPersonnes
    let tabFiltre = filtreTableau();

    //Parcours le tableau d'objets tabPersonnes
    for( let personne of tabFiltre) {
        tableBody.innerHTML+= `
        <tr>
            <td>${ personne.prenom }</td>
            <td>${ personne.nom }</td>
            <td>${ personne.age }</td>
            <td>${ personne.localite }</td>
        </tr>`;
    }
}

// Ecouter l'envoi du formulaire
formulaire.addEventListener('submit', function envoyer(event) {
    // Stopper l'envoi du formulaire
    event.preventDefault();

    //Ajoute un objet à tabPersonnes
    tabPersonnes.push({
        prenom: txtPrenom.value,
        nom: txtNom.value,
        age: txtAge.value,
        localite: txtLocalite.value,
    });
    construireTableau();
    // Vide tous les champs du formulaire
    formulaire.reset();
    // Focus sur le prénom
    txtPrenom.focus();
});

//Ecouter le changement de valeur du champ rechercher
txtRechercher.addEventListener('input', function (){
    construireTableau();
})


//Ecoute la fin de chargement de page
window.addEventListener('load', construireTableau)

