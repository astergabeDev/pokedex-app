import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;
  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="card-body">
        <div className="pokemon-type">
          <div>#{pokemon.type}</div>
        </div>
        <div className="card-botton"></div>
      </div>
    </div>
  );
};

export default Pokemon;
