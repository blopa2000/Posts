import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import useStyle from "./styles";

const Preview = ({ previewSource, description, title }) => {
  const classes = useStyle();

  if (description === "" && title === "" && previewSource === undefined) return null;

  return (
    <Card className={classes.root}>
      <CardHeader title="Preview" />
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" className={classes.typographyText}>
          <strong>Title:</strong> {title}
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
