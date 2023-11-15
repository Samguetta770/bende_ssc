import React from 'react';
import './Header.css'; // Assurez-vous d'avoir un fichier CSS correspondant
import img1 from "./../Ressources/EcoSolution.png";
import img2 from"./../Ressources/Logo_Effy.png"
import img3 from"./../Ressources/logo_rge_qualibat.avif"
import img4 from"./../Ressources/Logo_Ademe_Good.png"

const Header = () => {
  return (<div className="header">
    <img className='logo' src={img1} alt="Logo Principal" />

    <div className="partner-logos">
        <img className='partner-logo-1' src={img4} alt="Partenaire 3" />
        <img className='partner-logo' src={img2} alt="Partenaire 1" />
        <img className='partner-logo-3' src={img3} alt="Partenaire 2" />

    </div>
</div>)
};

export default Header;

