import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [reversed, setReversed] = useState(false)

  return (
    <Card>
      <div>
        <div className="image">
          <img src = {reversed ? pokemon.sprites.back : pokemon.sprites.front} alt="oh no!" onClick={() => setReversed(!reversed)} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
