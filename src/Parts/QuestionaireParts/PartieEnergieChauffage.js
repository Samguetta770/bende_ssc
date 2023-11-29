// PartieEnergieChauffage.js
import React from 'react';
import '../Questionaire.css'
import icone_fioul from "../../Ressources/icone fioul.png";
import icone_eclair from "../../Ressources/icone eclair.png";
import icone_gaz from "../../Ressources/icone_gaz.png";
import icone_eau from "../../Ressources/icone eau.png";
import icone_pac from "../../Ressources/icone_pac.png";
import icone_charbon from "../../Ressources/icone_charbon.png";
import ProgressBar from "../../Ressources/ProgressBar";

const PartieEnergieChauffage = ({ setChauffage, chauffage ,handlePreviousPart,handleNextPart,partieFormulaire}) => {




    const handleChauffageChange = (event) => {
        setChauffage(event.target.value);
        if (event.target.value) {

        }
        handleNextPart()
    };

    const validateAndContinue = () => {
        if (chauffage) {
            // Si la surface est saisie, continuer
            handleNextPart();
        } else {
            // Sinon, afficher le message d'erreur

        }
    };

    const isButtonDisabled = !chauffage;








    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' ,alignItems:"column"}}>

            <form className="questionaire" >
                <ProgressBar step={partieFormulaire} totalSteps={3} />
                <button type="button" className = "buttonReturn" onClick={handlePreviousPart}>← Retour</button>
          <question>
            <h1 >Quelle est l’énergie de chauffage actuelle de votre logement ?</h1>
            <h2>Si vous avez plusieurs énergies de chauffage, indiquez-nous la principale</h2>
              <div style={{display : 'flex' ,textAlign:"center",flexDirection : 'row', justifyContent: 'center',paddingTop:'10px'}}>

                  <label className ="option">

                        <img className='w-10' src={icone_fioul} alt={"énergie fioul"} />
                        <p style={{textAlign:"center"}}>Chauffage au fioul</p>
                        <input
                          type="radio"
                          required
                          name={"chauffage"}
                          value="fioul"
                          checked={chauffage === 'fioul'}
                          onChange={handleChauffageChange}
                        />
                  </label>
                  <br />

                  <label className ="option">
                        <img className='w-10' src={icone_eclair} alt={"énergie bois chauffage bois"}/>
                        <p style={{justifyContent: 'center',textAlign:"center"}}>Chauffage électrique</p>
                        <input
                          type="radio"
                          required
                          name={"chauffage"}
                          value="électrique"
                          checked={chauffage === 'électrique'}
                          onChange={handleChauffageChange}
                        />
                  </label>
                  <br />

                  <label className ="option">
                        <img className='w-10' src={icone_gaz} alt={"énergie gaz gaziniere chauffage au gaz"} />
                        <p style={{textAlign:"center"}}>Chauffage au gaz</p>
                        <input
                          type="radio"
                          required
                          name={"chauffage"}
                          value="gaz"
                          checked={chauffage === 'gaz'}
                          onChange={handleChauffageChange}
                        />
                  </label>
                  <br />


              </div>
              <div style={{display : 'flex' ,flexDirection : 'row', justifyContent: 'center',paddingTop:'10px'}}>

                    <label className ="option">

                          <img className='w-10' src={icone_eau} alt={"énergie bois chauffage au bois cheminé"} />
                          <p style={{textAlign:"center"}}>Chauffage au bois</p>
                          <input
                            type="radio"
                            required
                            value="fioul"
                            name={"chauffage"}
                            checked={chauffage === 'fioul'}
                            onChange={handleChauffageChange}
                          />
                    </label>
                    <br />

                    <label className ="option">
                          <img className='w-10' src={icone_pac} alt={"énergie pompe a chaleur pompe a chaleur air/eau"}/>
                          <p style={{textAlign:"center"}}>Pompe à chaleur</p>
                          <input
                            type="radio"
                            required
                            name={"chauffage"}
                            value="pac"
                            checked={chauffage === 'pac'}
                            onChange={handleChauffageChange}
                          />
                    </label>
                    <br />

                    <label className ="option">
                          <img className='w-10' src={icone_charbon} alt={"énergie charbon chauffage au charbon"}/>
                          <p style={{textAlign:"center"}}>Chauffage au charbon</p>
                          <input
                            type="radio"
                            required
                            name={"chauffage"}
                            value="charbon"
                            checked={chauffage === 'charbon'}
                            onChange={handleChauffageChange}
                          />
                    </label>
                    <br />


                </div>
            </question>
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

        </form>
        </div>
    );
};

export default PartieEnergieChauffage;
