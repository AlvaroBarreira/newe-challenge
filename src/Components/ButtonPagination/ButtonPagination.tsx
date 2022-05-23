import React from "react";
import Button from "@mui/material/Button";
import {makeStyles} from "@mui/styles";
interface buttonProps {
  handleFunction: () => void;
  Icon: any;
  text: string;
  offSet: number;
  disabled: boolean;
}

const useStyles = makeStyles({
  materialButton: {
    backgroundColor: "#e8d7fb !important",
    color: "black !important",
    "&:hover": {
      backgroundColor: "#a284da !important",
    },
  },
});

const ButtonPagination = ({handleFunction, Icon, text, offSet, disabled}: buttonProps) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.materialButton}
      disabled={disabled}
      variant="contained"
      onClick={handleFunction}
    >
      {text && text}
      {Icon && <Icon />}
    </Button>
  );
};

export default ButtonPagination;
