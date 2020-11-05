import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: "2em 2em 2em 0",
      "& h1": {
        paddingLeft: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "0 2em",
      },
      [theme.breakpoints.down("285")]: {
        margin: ".5em 0",
        padding: ".5em",
        boxSizing: "border-box",
      },
    },
    postListStyle: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      overflow: "scroll",
      height: "100vh",
    },
    post: {
      width: "20em",
      border: "1px solid #d7d7d7",
      margin: ".2em",
      "& .MuiTypography-h5": {
        [theme.breakpoints.down("xs")]: {
          fontSize: ".6em",
        },
      },
    },
    typographyText: {
      wordBreak: "break-all",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
  })
);

export default useStyles;
