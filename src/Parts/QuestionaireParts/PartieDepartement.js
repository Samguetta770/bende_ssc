import React from 'react';

import '../Questionaire.css'
import departements from "../../Ressources/departementData";
import ProgressBar from "../../Ressources/ProgressBar";
const PartieDepartement = ({ departement, setDepartement, handleNextPart ,handlePreviousPart,partieFormulaire}) => {




    const handleDepartementChange = (event) => {
    setDepartement(event.target.value);
    if (event.target.value) {

    }
};

    const validateAndContinue = () => {
        if (departement) {
            // Si la surface est saisie, continuer
            handleNextPart();
        } else {
            // Sinon, afficher le message d'erreur

        }
    };

    const isButtonDisabled = !departement;
















    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '50px' }}>
        <form className="questionaire" >
            <ProgressBar step={partieFormulaire} totalSteps={5} />
            <button className = "buttonReturn" onClick={handlePreviousPart}>← Retour</button>
                  <question >
                        <h1 >Dans quel département se situe le logement concerné par les travaux ?</h1>
                        <h2>Le montant de vos aides peut varier en fonction de votre localisation.</h2>

                        <div style={{
                                        display: 'flex',
                                        flexDirection: 'column', // Changez la direction de flex en colonne
                                        alignItems: 'flex-start', // Alignez les éléments au début
                                        justifyContent: 'center',
                                        paddingTop: "50px",
                                        width: '80%', // Définissez une largeur pour aligner les éléments à l'intérieur
                                        marginLeft: 'auto', // Ces deux propriétés centrent la div elle-même
                                        marginRight: 'auto'
                                    }}>
                          <h3>Numéro de département</h3>
                            <input
                                type="number"
                                name="departement"
                                min="0"

                                max="95"
                                placeholder="Entrez les 2 premiers chiffres du code postal..."
                                value={departement}
                                onChange={handleDepartementChange}
                                style={{
                                          width: '80%',     // Ajustez selon la largeur souhaitée
                                          height:"40px",
                                          border: '1px solid #ccc',  // Couleur et style de bordure
                                          borderRadius: '4px', // Bords arrondis
                                          fontWeight:'bold'
                                          // Ajoutez ici d'autres styles si nécessaire
                                      }}
                            />
                           {departement && (
                               <h4 className="ma-phrase">
                                 La maison à prendre en charge se trouve <span
                                   className="{departements[departementNum] ? '' : 'departement-non-reconnu'}">{departements[departement] || "dans un département non reconnu"}</span>.
                               </h4>
                          )}
                        </div>
                      <button type="button"
                      className={"buttonContinue"}
                      onClick={validateAndContinue}
                      disabled={isButtonDisabled}
                      title={isButtonDisabled ? "Veuillez remplir le champ afin de continuer" : ""}
                      style={{
                        backgroundColor: isButtonDisabled ? '#ccc' : '', // Grisé si désactivé
                        // Autres styles
                             }}
                       >Continuer</button>
                    </question>
        </form>
        </div>
    );
};

export default PartieDepartement;