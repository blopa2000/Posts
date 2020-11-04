//material ui
import { Card, CardContent, CardMedia, CardHeader, Typography } from "@material-ui/core";
import useStyle from "./styles";

const PostsList = ({ post }) => {
  const classes = useStyle();

  return (
    <Card className={classes.post} elevation={0}>
      <CardHeader title={post.email} />
      {post.images && <CardMedia className={classes.media} image={post.images} />}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.typographyText}>
          {post.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostsList;
