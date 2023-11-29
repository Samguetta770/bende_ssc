import React from 'react';

const ProgressBar = ({ step, totalSteps }) =>  {
    const progress = (step / totalSteps) * 100;

    let message;
    if (step === 1 ) {
        message = "La barre de chargement indique votre progression dans le formulaire.";
    } else if (step === 2 || step === 3) {
        message = "Vous êtes déjà à la moitié !";
    } else {
        message = "Bravo, vous avez pratiquement fini !";
    }

    return (
        <div>
            <div style={{
                width: '50vw',
                backgroundColor: '#ddd',
                borderRadius: '5px',
                marginBottom: '0.8em'
            }}>
                <div
                    style={{
                        width: `${progress}%`,
                        backgroundImage: 'linear-gradient(to right, orange, orangered)',
                        height: '1.6em',
                        borderRadius: '5px'
                    }}
                ></div>
            </div>
            <span style={{
                display: 'block',
                fontSize: '0.8em',
                color: '#666',
                fontFamily: 'Arial, sans-serif',
                fontStyle: 'italic',
                textAlign: 'center',
                marginTop: '0.8em'
            }}>
                {message}<br/> Étape {step}/{totalSteps}
            </span>
        </div>
    );
};

export default ProgressBar;