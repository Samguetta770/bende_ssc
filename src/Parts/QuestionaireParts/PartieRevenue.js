import React from 'react';
import '../Questionaire.css'
import img1 from "../../Ressources/+50K image.png";
import img2 from "../../Ressources/25K_50K image.png";
import img3 from "../../Ressources/25Kimage.png";
import ProgressBar from "../../Ressources/ProgressBar";



const PartieRevenue = ({ revenue,setRevenue, handleNextPart ,handlePreviousPart,partieFormulaire}) => {



    const handleRevenue = (event) => {
        setRevenue(event.target.value);
        if (event.target.value) {

        }
        handleNextPart()
    };

    const validateAndContinue = () => {
        if (revenue) {
            // Si la surface est saisie, continuer
            handleNextPart();
        } else {
            // Sinon, afficher le message d'erreur

        }
    };

    const isButtonDisabled = !revenue;











    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '50px' }}>

            <form className="questionaire" >
                <ProgressBar step={partieFormulaire} totalSteps={6} />

                <button className = "buttonReturn" onClick={handlePreviousPart}>← Retour</button>
          <question>
            <h1 >À combien s'élève le revenu total de votre foyer fiscal ?</h1>
              <h2>Le revenu fiscal de référence est utilisé pour calculer le montant de vos aides au plus juste.</h2>
              <div style={{display : 'flex' ,flexDirection : 'row', justifyContent: 'center',paddingTop:'10px'}}>

                  <label className ="option">

                        <img className='w-11' src={img3} alt={"revenue précaire"}/>
                        <p>Moins de 25 000 €</p>
                        <input
                          type="radio"
                          name={"revenue"}
                          required
                          value="Moins de 25K"
                          checked={revenue === 'Moins de 25 000 €'}
                          onChange={handleRevenue}
                        />
                  </label>

                  <br />

                  <label className ="option">
                        <img className='w-11' src={img2} alt={"revenue normal imposition "}/>
                        <p>Entre 25 000 € et 50 0000 €</p>
                        <input
                          type="radio"
                          name={"revenue"}
                          required
                          value="Entre 25 000 € et 50 0000 €"
                          checked={revenue === 'Entre 25K et 50K'}
                          onChange={handleRevenue}
                        />
                  </label>
                  <br />

                  <label className ="option">
                        <img className='w-11' src={img1} alt={"revenue classique argent "} />
                        <p>Plus de 50 000 €</p>
                        <input
                          type="radio"
                          value="Plus de 50K ans"
                          name={"revenue"}
                          required
                          checked={revenue === 'Plus de 50 000 €'}
                          onChange={handleRevenue}
                        />
                  </label>
                  <br />
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

export default PartieRevenue;