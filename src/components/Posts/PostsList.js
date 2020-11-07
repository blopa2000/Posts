//firebase
import { db } from "../../firebase";

//material ui
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  Button,
} from "@material-ui/core";
import useStyle from "./styles";

const PostsList = ({ post }) => {
  const classes = useStyle();

  const handleDelete = async (id) => {
    await db.collection("posts").doc(id).delete();
  };

  return (
    <Card className={classes.post} elevation={0}>
      <CardHeader title={post.title} />
      {post.images && <CardMedia className={classes.media} image={post.images} />}
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.typographyText}
        >
          {post.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" onClick={() => handleDelete(post.id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostsList;
