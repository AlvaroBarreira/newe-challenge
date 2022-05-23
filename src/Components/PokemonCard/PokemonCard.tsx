import React from "react";
import {useContext} from "react";
import {makeStyles} from "@mui/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import {PokemonDataContext} from "../../Contexts/PokemonDataProvider";
import {PokemonContextType} from "../../@Types/pokemon";
import "./PokemonCard.css";
const useStyles = makeStyles({
  materialCardImage: {
    backgroundSize: "contain",
  },
});

const PokemonCard = () => {
  const {pokemonCardData} = useContext(PokemonDataContext) as PokemonContextType;

  const classes = useStyles();

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "table-cell",
        verticalAlign: "middle",
        background: "transparent",
        border: "none",
        borderRadius: "0",
        boxShadow: "0",
        margin: "auto !important",
      }}
    >
      {pokemonCardData.sprites ? (
        <>
          <CardMedia
            alt="Paella dish"
            className={classes.materialCardImage}
            component="img"
            height="320px"
            image={pokemonCardData.sprites}
            sx={{objectFit: "contain", margin: "auto"}}
            width="320px"
            //   image={pokemonData.sprites.back_default}
          />
          <CardContent>
            <h1 style={{display: "flex", margin: "auto", width: "fit-content", fontSize: "1.1rem"}}>
              Pokemon information
            </h1>
            <div className="pokemon-card__information">
              <ul className="pokemon-card__list">
                Abilities:
                {pokemonCardData.abilities.map((abilitie: any) => {
                  return (
                    <li
                      key={abilitie.name}
                      className="pokemon-card__item"
                      style={{textTransform: "capitalize"}}
                    >
                      {abilitie.ability.name}
                    </li>
                  );
                })}
              </ul>
              <ul className="pokemon-card__additional-information">
                <div>
                  <span>Experience: {pokemonCardData.base_experience}</span>
                </div>
                <div>
                  <span>Name: {pokemonCardData.name}</span>
                </div>
              </ul>
            </div>
          </CardContent>
        </>
      ) : (
        <span style={{display: "flex", margin: "auto", width: "fit-content", fontSize: "1rem"}}>
          Please select a pokemon to view its information
        </span>
      )}
    </Card>
  );
};

export default PokemonCard;
