import React from 'react';
import "./Temoignage.css"

function Temoignage()

{
  return (
    <div>
        <div className={"bloque"}>
            <h1>Nos clients en parlent le mieux :</h1>
            <div className="temoignage-container">

                <div className="temoignagemami">
                    <iframe title ="pompe a chaleur installation panneaux solaire" className="video-frame"   src="https://youtube.com/embed/QtXpIvMc_UI" frameBorder="0" allowFullScreen></iframe>
                    <p>"Je vais couvrir minimum<br/>
                            50% de ma facture d'électricité"<br/><br/>



                            - M.Tourniquet, pose de panneaux solaires
                    </p>
                </div>

                <div className="temoignagemami">
                    <iframe title ="pompe a chaleur installation panneaux solaire économie d'énergie" className="video-frame"  src="https://youtube.com/embed/Ia360H8uY_w" frameBorder="0" allowFullScreen></iframe>
                    <p>"Je suis à 720€ d'économies<br/>
                            par an"<br/><br/>



                            -  M.Bousquet, pose de panneaux solaires
                    </p>
                </div>

                <div className="temoignagemami">
                    <iframe title ="pompe a chaleur installation panneaux solaire PAC chauffage aide état" className="video-frame"  src="https://youtube.com/embed/1H9jfRoSDqc" frameBorder="0" allowFullScreen></iframe>
                    <p>"Tout a été vraiment très simple<br/>
                        dans la mise en oeuvre des travaux"<br/><br/>



                        -  Alexandre G, Pose de panneaux solaires
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Temoignage