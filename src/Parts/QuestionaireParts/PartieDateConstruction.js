import React from 'react';
import { useEffect } from 'react';
import '../Questionaire.css'
import img1 from "../../Ressources/schedule.png";
import ProgressBar from "../../Ressources/ProgressBar";
const PartieDateConstruction = ({ dateConstruction, setDateConstruction ,handleNextPart,partieFormulaire}) => {




    const handleDateConstructionChange = (event) => {
        setDateConstruction(event.target.value);
        if (event.target.value) {

        }
        handleNextPart()
    };

    const validateAndContinue = () => {
        if (dateConstruction) {
            // Si la surface est saisie, continuer
            handleNextPart();

        } else {
            // Sinon, afficher le message d'erreur

        }
    };

    const isButtonDisabled = !dateConstruction;


    useEffect(() => {
      const script = document.createElement('script');
      script.src = "https://www.googletagmanager.com/gtag/js?id=AW-11421461091";
      script.async = true;
      document.body.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'AW-11421461091');

      return () => {
        document.body.removeChild(script);
      }
    }, []);




    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>

            <form  className="questionaire" >
                <p className={"pp"} style={{fontWeight: "bold" ,color:"darkblue",textAlign:"center"}}>Remplissez notre formulaire pour vérifier si vous pouvez bénéficier des aides pour obtenir un système solaire combiné pour 1 € symbolique !</p>
                <ProgressBar step={partieFormulaire} totalSteps={5} />
                  <question>

                        <h1 >Sélectionnez de quand date la construction du logement <br/>concerné par les travaux ?</h1>
                        <div style={{display : 'flex' ,flexDirection : 'row', justifyContent: 'center',paddingTop:'1vw'}}>

                              <label className ="option">

                                    <img className='w-10' src={img1} alt ="date de la maison économie d'énergie pompe a chaleur"/>
                                    <p2 style={{textAlign:"center",fontWeight: "bold" }}>Moins de 2 ans</p2>
                                    <input
                                      type="radio"
                                      name={"ageMaison"}
                                      value="Moins de 2 ans"
                                      checked={dateConstruction === 'Moins de 2 ans'}
                                      onChange={handleDateConstructionChange}
                                      required

                                    />
                              </label>
                              <br />

                              <label className ="option">
                                    <img className='w-10' src={img1} alt={"aide état économie d'énergie pompe a chaleur devis gratuit"}/>
                                    <p2 style={{textAlign:"center",fontWeight: "bold" }}>Entre 2 ans et 15 ans</p2>
                                    <input
                                      type="radio"
                                      name={"ageMaison"}
                                      value="Entre 2 ans et 15 ans"
                                      checked={dateConstruction === 'Entre 2 ans et 15 ans'}
                                      onChange={handleDateConstructionChange}
                                      required
                                    />
                              </label>
                              <br />

                              <label className ="option">
                                    <img className='w-10' src={img1} alt={"pompe a chaleur panneaux solaire aide gouvernement réduction"}/>
                                    <p2 style={{textAlign:"center",fontWeight: "bold" }}>Plus de 15 ans</p2>
                                    <input
                                      type="radio"
                                      value="Plus de 15 ans"
                                      name={"ageMaison"}
                                      checked={dateConstruction === 'Plus de 15 ans'}
                                      onChange={handleDateConstructionChange}
                                      required
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

export default PartieDateConstruction;