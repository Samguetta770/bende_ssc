import React from 'react';
import carteFrance from "./../Ressources/Départements_de_France-simple (1).svg";
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const FranceMap = ({ onDepartmentClick }) => {
  const mapUrl = carteFrance; // Remplacez par l'URL de votre carte SVG

  return (
    <ComposableMap>
      <Geographies geography={mapUrl}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onClick={() => onDepartmentClick(geo)}
              style={{
                default: { fill: "#D6D6DA", outline: "none" },
                hover: { fill: "#F53", outline: "none" },
                pressed: { fill: "#E42", outline: "none" },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default FranceMap;