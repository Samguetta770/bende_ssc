import React from 'react';
import './CommentCaMarche.css'; // Importez le fichier CSS pour le style
import img1 from "./../Ressources/ccm_img1.png";
function CommentCaMarche() {
  return (
    <div className="ccm" >
        <div className={"text-section"}>
            <h1>Comment ça marche ?</h1>
            <p>Le système solaire combiné <strong>assure une partie du chauffage centralisé </strong>et <strong>la production d'eau chaude sanitaire </strong>grâce à des panneaux solaires thermiques.</p>

            <p>Il doit servir d'appareil d'appoint, couplé avec <strong>un autre système de chauffage.</strong>.</p>

            <p>Les panneaux captent la chaleur du soleil et la redistribue à un ballon de stockage qui est rattaché au système de chauffage central et à la tuyauterie.</p>
            <p>En moyenne, à la suite de l'installation d'un système solaire combiné, un foyer français <strong>réalise entre 40 à 50% d'économie sur sa facture de chauffage.</strong><br/><br/>Pourquoi pas vous ?</p>
            <button className={"buttonContinue"} onClick={() => document.getElementById('debutForm').scrollIntoView()} >Vérifiez si vous pouvez bénéficier du système solaire combiné à 1 €</button>
        </div>

        <div className="image-section">
            <img src={img1} className={"w-12"} alt="Travailleurs installant des travaux énergie économie"/>
        </div>


    </div>
  );
}

export default CommentCaMarche;