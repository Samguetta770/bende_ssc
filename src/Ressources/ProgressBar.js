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
                width: '100%',
                backgroundColor: '#ddd',
                borderRadius: '5px',
                marginBottom: '10px'
            }}>
                <div
                    style={{
                        width: `${progress}%`,
                        backgroundImage: 'linear-gradient(to right, orange, orangered)',
                        height: '20px',
                        borderRadius: '5px'
                    }}
                ></div>
            </div>
            <span style={{
                display: 'block',
                fontSize: '12px',
                color: '#666',
                fontFamily: 'Arial, sans-serif',
                fontStyle: 'italic',
                textAlign: 'center',
                marginTop: '10px'
            }}>
                {message}<br/> Étape {step}/{totalSteps}
            </span>
        </div>
    );
};

export default ProgressBar;