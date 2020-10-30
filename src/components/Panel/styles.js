import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: "2em",
      [theme.breakpoints.down("285")]: {
        margin: ".5em",
        padding: ".5em",
        boxSizing: "border-box",
      },
    },
    formStyle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& .MuiTextField-root": {
        margin: `${theme.spacing(1)}px 0`,
      },
      "& .MuiInputBase-root": {
        borderRadius: "30px 30px",
      },
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  })
);

export default useStyles;
