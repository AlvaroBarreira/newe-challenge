import React, {useEffect} from "react";
import {useContext} from "react";
import {makeStyles} from "@mui/styles";
import {Grid, Hidden} from "@mui/material";

import {getPokemons} from "../Services/PokemonServices";
import {PokemonDataContext} from "../Contexts/PokemonDataProvider";
import {PokemonContextType, PokemonListType} from "../@Types/pokemon";
import PokemonCard from "../Components/PokemonCard/PokemonCard";
import PokemonItem from "../Components/PokemonItem/PokemonItem";
import Header from "../Components/Header/Header";
import Pagination from "../Components/Pagination/Pagination";

const useStyles = makeStyles({
  generalContainer: {
    backgroundColor: "#dbc4f9",
    height: "100vh",
    width: "100%",
  },
  materialContainer: {
    width: "90%",
    display: "flex",
    maxWidth: "1920px !important",
  },
  materialBoxList: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    width: "70%",
    height: "600px",
    overflowY: "scroll",
    margin: "50px auto",
    borderRadius: "10px",
    overflowX: "hidden",
  },
  ["@media (max-width: 1200px)"]: {
    generalContainer: {
      backgroundColor: "#dbc4f9",
      height: "fit-content",
      width: "100%",
    },
  },
  ["@media (max-width: 900px)"]: {
    generalContainer: {
      backgroundColor: "#dbc4f9",
      height: "fit-content",
      width: "100%",
    },
  },
  ["@media (max-width: 600px)"]: {
    // eslint-disable-line no-useless-computed-key
    generalContainer: {
      backgroundColor: "#dbc4f9",
      height: "fit-content",
      width: "100%",
    },
    materialBoxList: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      width: "400px !important",
      height: "600px",
      overflowY: "scroll",
      margin: "50px auto",
    },
  },
  materialBoxCard: {
    display: "table",
    width: "30%",
    height: "600px",
    margin: "auto !important",
  },
});

const Home = () => {
  const {offSet, setPokemonList, pokemonList, setCount} = useContext(
    PokemonDataContext,
  ) as PokemonContextType;

  const classes = useStyles();

  useEffect(() => {
    getPokemons(offSet, setPokemonList, setCount);
  }, [offSet]);

  return (
    <div className={classes.generalContainer}>
      <Header />
      <Grid container rowSpacing={1} sx={{height: "auto !important"}}>
        <Grid
          item
          className={classes.materialBoxList}
          component="div"
          lg={8}
          md={8}
          sm={8}
          sx={{margin: "20px auto", padding: "20px", backgroundColor: "#e0d4fb"}}
          xs={12}
        >
          {pokemonList?.map((pokemon: typeof pokemonList) => {
            return <PokemonItem key={pokemon.name} pokemon={pokemon} />;
          })}
        </Grid>
        <Grid item className={classes.materialBoxCard} lg={4} md={8} sm={8} xs={12}>
          <PokemonCard />
        </Grid>
        <Grid item lg={8} md={8} sm={8} xs={12}>
          <Pagination />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
