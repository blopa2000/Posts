import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: "2em 2em 2em 0",
      [theme.breakpoints.down("sm")]: {
        margin: "0 2em",
      },
      [theme.breakpoints.down("285")]: {
        margin: ".5em 0",
        padding: ".5em",
        boxSizing: "border-box",
      },
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
  })
);

export default useStyles;
