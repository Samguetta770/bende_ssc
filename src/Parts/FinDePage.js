import React from 'react';
import './CommentCaMarche.css'; // Importez le fichier CSS pour le style

function FinDePage() {
  return (
    <div className="fdp" >

        <div className={"text-section"}>
            <h1>Et maintenant ? À vous de jouer !</h1>
            <p>Grâce à notre simulateur, calculez en 2 minutes votre montant d'aides, et estimez gratuitement votre devis afin de savoir si vous pouvez beneficier du systeme solaire composé à 1 €!

            </p>
            <button className={"buttonContinue"} onClick={() => document.getElementById('debutForm').scrollIntoView()}>Vérifiez si vous pouvez bénéficier du système solaire combiné à 1 €</button>
        </div>

    </div>
  );
}

export default FinDePage;