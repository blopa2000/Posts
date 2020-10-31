import { Card, CardContent } from "@material-ui/core";
import useStyle from "./styles";

const Posts = () => {
  const classes = useStyle();
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <h1>Firebase</h1>
        </CardContent>
      </Card>
    </>
  );
};

export default Posts;
