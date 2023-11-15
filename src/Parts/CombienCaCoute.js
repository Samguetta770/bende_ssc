import React from 'react';
import './CommentCaMarche.css'; // Importez le fichier CSS pour le style
import img1 from "./../Ressources/image_ssc_2.png";
function CombienCaCoute() {
  return (
    <div className="ccc" >

        <div className="image-section">
            <img src={img1} className={"w-12"} alt="femme faisant des economies d'énergie"/>
        </div>

        <div className={"text-section"}>
            <h1>Combien ça coûte ?</h1>
            <p>Pour l'installation d'un système solaire combiné, il faudra débourser <strong>entre 12 000 et 22 000 € </strong>(hors aides). Ce prix varie en fonction de la puissance, la technologie mais également des contraintes du chantiers. Les dépenses seront plus ou moins élevées selon la complexité de l’installation.</p>

            <p>
                <strong>Le saviez-vous ? </strong>Grâce à la Prime Effy (CEE) et à MaPrimeRénov’, vous pouvez payer vos travaux quasi gratuitement !<br/> En effet, si vous êtes éligible à ce programme d'état, ce projet pourrait être intégralement financé et vous revenir à un reste à charge d'1 € symbolique !<br/><strong>Faites une simulation gratuite en 2 minutes !</strong>
            </p>
            <button className={"buttonContinue"} onClick={() => document.getElementById('debutForm').scrollIntoView()}>Vérifiez si vous pouvez bénéficier du système solaire combiné à 1 €</button>
        </div>

    </div>
  );
}

export default CombienCaCoute;