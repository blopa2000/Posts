import { Grid } from "@material-ui/core";
import Panel from "./components/Panel";

function App() {
  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Panel />
      </Grid>
      <Grid item xs={12} md={8}>
        <p>firebase</p>
      </Grid>
    </Grid>
  );
}

export default App;
