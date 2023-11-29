import React from 'react';
import './CommentCaMarche.css'; // Importez le fichier CSS pour le style
import img1 from "./../Ressources/Logo_Ademe_Good.png";
import img2 from "./../Ressources/logo_rge_qualibat.avif";
import img3 from "./../Ressources/Logo_Effy.png"

function PartenaireSection() {
  return (

        <div className="partenaire">
            <h1 style={{color:"black",fontFamily: "Arial black"}}>Nos Partenaires : </h1>
            <div className="logos-container" style={{ display: 'flex', alignItems: 'flex-end' }}>
                <img src={img1} alt="Logo Partenaire 1" className="partenaire-logo1" />
                    <img src={img2} alt="Logo Partenaire 2" className="partenaire-logo" style={{marginBottom:"6.5vw"}}/>
                        <img src={img3} alt="Logo Partenaire 3" className="partenaire-logo1" />
            </div>
        </div>
)}

    export default PartenaireSection;