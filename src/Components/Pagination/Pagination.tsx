import React, {useState, useEffect} from "react";
import {useContext} from "react";
import Stack from "@mui/material/Stack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import {prevPage, nextPage, initialPage} from "../../Utils/setPaginations.utils";
import {PokemonContextType} from "../../@Types/pokemon";
import {PokemonDataContext} from "../../Contexts/PokemonDataProvider";
import ButtonPagination from "../ButtonPagination/ButtonPagination";

const Pagination = () => {
  const {offSet, setOffSet, count} = useContext(PokemonDataContext) as PokemonContextType;

  const handlePrevPage = () => {
    prevPage(setOffSet, offSet);
  };

  const handleNextPage = () => {
    nextPage(setOffSet, offSet);
  };

  const handleInitalPage = () => {
    initialPage(setOffSet);
  };

  const [disabledButtonRight, setDisabledButtonRight] = useState(false);

  const [disabledButonLeft, setDisabledButtonLeft] = useState(false);

  useEffect(() => {
    offSet === 1120 ? setDisabledButtonRight(true) : setDisabledButtonRight(false);
    offSet === 0 ? setDisabledButtonLeft(true) : setDisabledButtonLeft(false);
  }, [offSet]);

  return (
    <Stack direction="row" spacing={2} sx={{margin: "20px auto", width: "fit-content"}}>
      <ButtonPagination
        Icon={ArrowBackIosNewIcon}
        disabled={disabledButonLeft}
        handleFunction={handlePrevPage}
        offSet={offSet}
        text={""}
      />
      <span>
        {offSet}-{offSet + 10}/{count}
      </span>
      <ButtonPagination
        Icon={ArrowForwardIosIcon}
        disabled={disabledButtonRight}
        handleFunction={handleNextPage}
        offSet={offSet}
        text={""}
      />
      <ButtonPagination
        Icon={""}
        disabled={false}
        handleFunction={handleInitalPage}
        offSet={offSet}
        text={"Reset"}
      />
    </Stack>
  );
};

export default Pagination;
