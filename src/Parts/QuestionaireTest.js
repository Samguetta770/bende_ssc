import React, { useState } from 'react';
import PartieDateConstruction from "./QuestionaireParts/PartieDateConstruction"; // Importez vos sous-composants

import PartieEnergieChauffage from './QuestionaireParts/PartieEnergieChauffage';
import PartieDepartement from './QuestionaireParts/PartieDepartement';
import PartieRevenue from "./QuestionaireParts/PartieRevenue";
import PartieContact from "./QuestionaireParts/PartieContact";

import PartieFin from "./QuestionaireParts/PartieFin";



function QuestionaireTest() {



    const [chauffage, setChauffage] = useState('');
    const [departement, setDepartement] = useState('');
    const [dateConstruction, setDateConstruction] = useState('');
    const [revenue, setRevenue] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [surname, setSurname] = useState('');
    const [lastname, setLastname] = useState('');
    // Ajoutez d'autres états pour les autres parties du questionnaire

    // ... vos autres fonctions ...

    const handleSubmit = async() => {
        const formObject = {

            chauffage,
            departement,
            mail,
            phone,
            surname,
            lastname,
            revenue,
            // Ajoutez d'autres clés pour les autres réponses
        };
        console.log(formObject);

        // Traitement du formulaire ici (envoi à un serveur, par exemple)
    try {
            const response = await fetch('https://ecosolution.vercel.app/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject), // Convertit l'objet en chaîne JSON
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const jsonResponse = await response.json();
            console.log('Réponse du serveur:', jsonResponse);
            // Ici, vous pouvez gérer la réponse - par exemple, afficher un message de succès ou de redirection
        } catch (error) {
            console.error('Erreur lors de la soumission des données:', error);
            // Ici, vous pouvez gérer les erreurs - par exemple, afficher un message d'erreur à l'utilisateur
        }

        console.log(formObject);
};



















  const [partieFormulaire, setPartieFormulaire] = useState(1);


  // ... vos autres fonctions ...
  const handleNextPart = () => {
  setPartieFormulaire(partieFormulaire + 1);
  // Ajoutez ici d'autres actions si nécessaire
                                };
  const handlePreviousPart = () => {
  setPartieFormulaire(partieFormulaire - 1);
  // Ajoutez ici d'autres actions si nécessaire
                                };


  return (
    <div id = "debutForm">
      {partieFormulaire === 1 && (
        <PartieDateConstruction

          dateConstruction={dateConstruction}
          setDateConstruction={setDateConstruction}
          handleNextPart={handleNextPart}
          partieFormulaire={partieFormulaire}
        />
      )}

      {partieFormulaire === 2 && (
        <PartieEnergieChauffage
          setChauffage={setChauffage}
          chauffage={chauffage}
          handlePreviousPart={handlePreviousPart}
          handleNextPart={handleNextPart}
          partieFormulaire={partieFormulaire}
        />
      )}
      {partieFormulaire === 3 && (
        <PartieDepartement
          departement={departement}
          setDepartement={setDepartement}
          handleNextPart={handleNextPart}
          handlePreviousPart={handlePreviousPart}
          partieFormulaire={partieFormulaire}
        />
      )}
      {partieFormulaire === 4 && (
        <PartieRevenue
        revenue={revenue}
        setRevenue={setRevenue}
        handleNextPart={handleNextPart}
        handlePreviousPart={handlePreviousPart}
        partieFormulaire={partieFormulaire}
        />
      )}
      {partieFormulaire===5 && (
        <PartieContact
        mail={mail}
        setMail={setMail}
        phone={phone}
        setPhone={setPhone}
        handleNextPart={handleNextPart}
        handlePreviousPart={handlePreviousPart}
        partieFormulaire={partieFormulaire}
        surname={surname}
         setSurname={setSurname}
         lastname={lastname}
         setLastname={setLastname}

         handleSubmit ={handleSubmit}

        />

      )}

        {partieFormulaire===6&&(
        <PartieFin
        partieFormulaire={partieFormulaire}/>)}

    </div>
  );
}

export default QuestionaireTest;