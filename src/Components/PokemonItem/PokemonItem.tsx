import React from "react";
import {useState, useEffect, useContext} from "react";
import axios from "axios";
import {makeStyles} from "@mui/styles";
import {CircularProgress} from "@mui/material";

import {PokemonDataContext} from "../../Contexts/PokemonDataProvider";
import {PokemonContextType} from "../../@Types/pokemon";
import ModalList from "../ModalList/ModalList";

const useStyles = makeStyles({
  materialImage: {
    display: "flex",
    width: "360px",
    height: "360px",
    margin: "auto",
  },
  ["@media (max-width: 1200px)"]: {
    // eslint-disable-line no-useless-computed-key
    materialImage: {
      display: "flex",
      width: "260px",
      height: "260px",
      margin: "auto",
    },
  },
  ["@media (max-width: 900px)"]: {
    // eslint-disable-line no-useless-computed-key
    materialImage: {
      display: "flex",
      width: "160px",
      height: "160px",
      margin: "auto",
    },
  },
  ["@media (max-width: 600px)"]: {
    // eslint-disable-line no-useless-computed-key
    materialImage: {
      display: "flex",
      width: "120px",
      height: "120px",
      margin: "auto",
    },
  },
});

interface pokemonType {
  pokemon: Record<string, unknown>;
}

interface pokemonDataType {
  name?: string | undefined;
  base_experience: number;
  abilities: Array<Record<string, unknown>>;
  id: number;
  sprites: any;
}

const PokemonItem = ({pokemon}: pokemonType) => {
  const {name, setName, setPokemonCardData} = useContext(PokemonDataContext) as PokemonContextType;

  const [pokemonData, setPokemonData] = useState<pokemonDataType>({
    name: "",
    base_experience: 0,
    abilities: [
      {
        ability: {
          name: "",
        },
      },
    ],
    id: 0,
    sprites: "",
  });

  const [loading, setLoading] = useState(true);
  const [visibilityValue, setVisibilityValue] = useState("hidden");
  const classes = useStyles();

  const handleClick = () => {
    setPokemonCardData({
      name: pokemonData.name,
      base_experience: pokemonData.base_experience,
      abilities: pokemonData.abilities,
      id: pokemonData.id,
      sprites: pokemonData.sprites.other.home.front_default,
    });
  };

  const handleModalActive = () => {
    setVisibilityValue("visible");
    setName(pokemonData.name);
  };

  const handleModalInactive = () => {
    setVisibilityValue("hidden");
    setName("");
  };

  useEffect(() => {
    const obtenerInformacionPoke = async () => {
      try {
        const url = await axios.get(`${pokemon.url}`);
        const data = url;

        setPokemonData(data.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerInformacionPoke();
  }, [pokemon]);

  return (
    <div>
      {loading ? (
        <div style={{width: "fit-content", display: "flex", margin: "auto"}}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <ModalList name={name} visibilityValue={visibilityValue} />
          <img
            alt={pokemonData.sprites.front_default}
            className={classes.materialImage}
            src={pokemonData.sprites.other["official-artwork"].front_default}
            style={{cursor: "pointer"}}
            onClick={handleClick}
            onMouseEnter={handleModalActive}
            onMouseLeave={handleModalInactive}
          />
        </>
      )}
    </div>
  );
};

export default PokemonItem;
