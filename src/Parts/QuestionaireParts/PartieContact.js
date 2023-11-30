// PartieSurfaceHabitable.js
import React from 'react';
import '../Questionaire.css'
import ProgressBar from "../../Ressources/ProgressBar";

const PartieContact = ({ mail,setMail,phone,setPhone,handleNextPart ,handlePreviousPart, partieFormulaire,surname,setSurname, lastname,setLastname,handleSubmit}) => {




    const handleMailChange = (event) => {
        setMail(event.target.value);
        if (event.target.value) {

        }
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
        if (event.target.value) {

        }
    };

    const validateAndContinue = () => {
        if (mail && phone && surname && lastname) {
            handleSubmit();
            handleNextPart();
        } else {

        }
    };

    const isButtonDisabled = (!mail) || (!phone) ||(!surname) || (!lastname);





    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
        if (event.target.value) {

        }
    };

    const handleLastnameChange = (event) => {
        setLastname(event.target.value);
        if (event.target.value) {

        }
    };




















    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <form className="questionaire" >
            <ProgressBar step={partieFormulaire} totalSteps={3} />
            <button className = "buttonReturn" type={"button"} onClick={handlePreviousPart}>← Retour</button>
          <question >
                <h1 >Coordonnées de Contact </h1>
                <h2>Pour garantir un suivi personnalisé et sécurisé, nous avons besoin de vos coordonnées de contact.</h2>
 <div style={{
    display: 'flex',
    justifyContent: 'center',
    paddingTop: "1vw",
    width: '100%', // Prendre toute la largeur
     flexDirection: 'column',
  }}>

<div style={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      marginRight:'5vw',
      alignItems: 'center' ,
    }}>

                <div style={{
                                        display: 'flex',
                                        flexDirection: 'column', // Changez la direction de flex en colonne
                                        alignItems: 'flex-start', // Alignez les éléments au début
                                        justifyContent: 'center',
                                        paddingTop: "0px",
                                        width: '100%', // Définissez une largeur pour aligner les éléments à l'intérieur
                                        marginLeft: 'auto', // Ces deux propriétés centrent la div elle-même
                                        marginRight: 'auto'
                                    }}>
                    <h3>Mail</h3>
                    <input
                        type="email"
                        name="mail"
                        min="0"
                        value={mail}
                        onChange={handleMailChange}
                        placeholder="Votre email"
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                        title="Veuillez entrer une adresse email valide."
                        required
                        style={{
                                  width: '80%',     // Ajustez selon la largeur souhaitée
                                  height:"40px",
                                  border: '1px solid #ccc',  // Couleur et style de bordure
                                  borderRadius: '4px', // Bords arrondis
                                  fontWeight:'bold',

                                  // Ajoutez ici d'autres styles si nécessaire
                              }}
                    />
                     <p id="message-erreur" style={{color: "red"}}></p>
                </div>




                <div style={{
                                        display: 'flex',
                                        flexDirection: 'column', // Changez la direction de flex en colonne
                                        alignItems: 'flex-start', // Alignez les éléments au début
                                        justifyContent: 'center',
                                        paddingTop: "0px",
                                        width: '100%', // Définissez une largeur pour aligner les éléments à l'intérieur
                                        marginLeft: 'auto', // Ces deux propriétés centrent la div elle-même
                                        marginRight: 'auto'
                                    }}>
                    <h3>Téléphone</h3>
                    <input
                        type="tel"
                        name="phone"
                        min="0"
                        required
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="Votre numéro de téléphone"
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
                <br/> <br/>


</div>
            <div style={{
                          display: 'flex',
                          flexDirection: 'row',
                          width: '100%',
                          paddingTop:"0.3vw"// Largeur de la colonne
                        }}>




              <div style={{
                                        display: 'flex',
                                        flexDirection: 'column', // Changez la direction de flex en colonne
                                        alignItems: 'flex-start', // Alignez les éléments au début
                                        justifyContent: 'center',
                                        paddingTop: "0px",
                                        width: '100%', // Définissez une largeur pour aligner les éléments à l'intérieur
                                        marginLeft: 'auto', // Ces deux propriétés centrent la div elle-même
                                        marginRight: 'auto'
                                    }}>
                    <h3>Prenom</h3>
                    <input
                        type="name"
                        name="surname"
                        min="0"
                        value={surname}
                        placeholder="Votre prénom"
                        onChange={handleSurnameChange}
                        required
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
                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column', // Changez la direction de flex en colonne
                                        alignItems: 'flex-start', // Alignez les éléments au début
                                        justifyContent: 'center',
                                        paddingTop: "0px",
                                        width: '100%', // Définissez une largeur pour aligner les éléments à l'intérieur
                                        marginLeft: 'auto', // Ces deux propriétés centrent la div elle-même
                                        marginRight: 'auto'
                                    }}>
                    <h3>Nom de famille</h3>
                        <input
                        type="name"
                        name="lastname"
                        value={lastname}
                        onChange={handleLastnameChange}
                        required
                        min="0"
                        placeholder="Votre nom"
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

</div>
 </div>

                              <h4 style ={{fontSize: "11px", fontStyle: "italic",textAlign: "center"}}>Nous ne réalisons aucun démarchage téléphonique et vous rappelons que, conformément à l’article L.223-2 du Code de la consommation,<br/> vous avez le droit de vous inscrire gratuitement sur une liste d’opposition au démarchage téléphonique.</h4>


              <button type="submit"
                      className={"buttonContinue"}
                      onClick={validateAndContinue}
                      disabled={isButtonDisabled}
                      title={isButtonDisabled ? "Veuillez remplir tous les champs afin de finaliser." : ""}
                      style={{
                        backgroundColor: isButtonDisabled ? '#ccc' : '', // Grisé si désactivé
                        // Autres styles
                             }}
                       >Envoyer ma demande de devis</button>

            </question>
        </form>
        </div>
    );
};

export default PartieContact;