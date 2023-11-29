// PartieSurfaceHabitable.js
import React from 'react';
import  { useState } from 'react';
import '../Questionaire.css'
import ProgressBar from "../../Ressources/ProgressBar";

const PartieSurfaceHabitable = ({ handleNextPart, surfaceHabitable,setSurfaceHabitable, handlePreviousPart,partieFormulaire}) => {





    const handleSurfaceChange = (event) => {
        setSurfaceHabitable(event.target.value);
        if (event.target.value) {

        }

    };

    const validateAndContinue = () => {
        if (surfaceHabitable) {
            // Si la surface est saisie, continuer
            handleNextPart();
        } else {
            // Sinon, afficher le message d'erreur

        }
    };

    const isButtonDisabled = !surfaceHabitable;



    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <form className="questionaire" >
                <ProgressBar step={partieFormulaire} totalSteps={6} />
                <button type="button" className = "buttonReturn" onClick={handlePreviousPart}>← Retour</button>
          <question >
                <h1 >Quelle est la surface habitable de votre maison ?</h1>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',paddingTop:"50px" }}>
                    <input
                        type="number"
                        name="surfaceHabitable"
                        min="0"
                        value={surfaceHabitable}
                        onChange={handleSurfaceChange}
                        placeholder="Entrez la surface en m²"
                        style={{
                                  width: '80%',     // Ajustez selon la largeur souhaitée
                                  height:"40px",
                                  border: '1px solid #ccc',  // Couleur et style de bordure
                                  borderRadius: '4px', // Bords arrondis
                                  fontWeight:'bold'
                                  // Ajoutez ici d'autres styles si nécessaire
                              }}
                    />
                </div>

              <button type="submit"
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

export default PartieSurfaceHabitable;