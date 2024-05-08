/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

const personnes = [
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

//Récuperer le premier formulaire du document
const formulaire = document.querySelector('form');

//Recupere le champ texte #nom et #prenom et #age et #localite
const txtNom = document.querySelector('#nom');
const txtPrenom = document.querySelector('#prenom');
const txtAge = document.querySelector('#age');
const txtLocalite = document.querySelector('#localite');

//Recupere le corps du tableau <tbody>
const tablebody = document.querySelector('tbody')

//tester de la recuperation des données HTML est ok
console.log(formulaire, txtNom, tablebody);

console.log(formulaire);

//Ecouter l'envoi du formulaire

formulaire.addEventListener('submit', function envoyer(event) {
    //Stopper l'envoi du formulaire
    event.preventDefault();

    //Créer le code HTML d'une nouvelle ligne de tableau
    let nouvelleLigne =
        `<tr>
            <td>${ txtPrenom.value }</td>
            <td>${ txtNom.value }</td>
            <td>${ txtAge.value }</td>
            <td>${ txtLocalite.value }</td>
        </tr>`;

    //ajouter la nouvelle personne à la fin du <tbody>
    tablebody.innerHTML += nouvelleLigne;

    //vide le formulaire
    formulaire.reset();

    //
});