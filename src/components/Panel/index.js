import { Card, CardActions, Typography, TextField, Button } from "@material-ui/core";
import useStyle from "./styles";

const Panel = () => {
  const classes = useStyle();
  return (
    <>
      <Card className={classes.root}>
        <form action="#" className={classes.formStyle}>
          <TextField type="email" className={classes.field} id="Email" label="email" variant="outlined" size="small" />
          <TextField type="email" className={classes.field} id="Email" label="email" variant="outlined" size="small" />
          <CardActions>
            <Button variant="contained" color="primary">
              save
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
};

export default Panel;
