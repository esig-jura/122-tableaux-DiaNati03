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
    }
];

// Récupère le 1er formulaire du document
const formulaire = document.querySelector('form');
// Récupère les champs textes
const txtNom = document.querySelector('#nom');
const txtPrenom = document.querySelector('#prenom');
const txtAge = document.querySelector('#age');
const txtLocalite = document.querySelector('#localite');
// Récupère le premier corps de tableau <tbody>
const tableBody = document.querySelector('tbody');
// Test si la récupération des éléments HTML est OK
console.log(formulaire, txtNom, tableBody);

//fonction qui créé un tableau HTML a partir du tableau JS des personnes
function construireTableau()
{
    //Vide le tableau
    tableBody.innerHTML = "";

    //Parcours le tableau d'objets tabPersonnes
    for( let personne of tabPersonnes) {
        tableBody.innerHTML+= `
        <tr>
            <td>${ personne.prenom }</td>
            <td>${ personne.nom }</td>
            <td>${ personne.age }</td>
            <td>${ personne.localite }</td>
        </tr>`;
    }
}

//Ecoute la fin de chargement de page
window.addEventListener('load', construireTableau)

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