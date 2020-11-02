import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import useStyle from "./styles";

const Preview = ({ previewSource, description, email }) => {
  const classes = useStyle();

  if (description === "" && email === "" && previewSource === undefined) return null;

  return (
    <Card className={classes.root}>
      <CardHeader title="Preview" />
      <CardContent className={classes.cardContent}>
        <Typography variant="body2">
          <strong>Email:</strong> {email}
        </Typography>
        {previewSource && <img src={previewSource} alt="preview" width="100%" />}

        <Typography variant="body2" className={classes.typographyText}>
          <strong>Description:</strong> {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Preview;
