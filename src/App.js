import { Grid } from "@material-ui/core";
import Panel from "./components/Panel";
import Posts from "./components/Posts";

function App() {
  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Panel />
      </Grid>
      <Grid item xs={12} md={8}>
        <Posts />
      </Grid>
    </Grid>
  );
}

export default App;
