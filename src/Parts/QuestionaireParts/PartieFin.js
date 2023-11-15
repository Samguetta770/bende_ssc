import React from 'react';
import '../Questionaire.css'


const PartieFin =(partieFormulaire)=>{
    return (
        <div >
            <div className={"questionaire"} style={{height:"auto",marginRight:"350px"}}>
            <h1 style={{fontSize:"28px"}}>Demande de devis soumise avec succès !</h1>

            <h2 style={{fontSize:"20px"}}>Merci !
                Votre demande de devis à été soumise avec succès.<br/>

                Nous traitons actuellement votre demande et vous contacterons sous 3 jours ouvrable afin de vous communiqué le montant de votre devis. Si vous avez des questions ou besoin d'assistance supplémentaire, n'hésitez pas à consulter le bas de la page web.


                Nous vous remercions pour votre intérêt et sommes impatients de travailler avec vous.
            </h2>
                </div>
        </div>


    )


}
export default PartieFin