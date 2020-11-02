import { useEffect, useState } from "react";

//firebase
import { db } from "../../firebase";

//materia ui
import { Card, CardContent } from "@material-ui/core";
import useStyle from "./styles";

//components
import PostsList from "./PostsList";

const Posts = () => {
  const classes = useStyle();
  const [posts, setposts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((query) => {
      const postsList = [];
      for (const doc of query.docs) {
        postsList.push({ ...doc.data(), id: doc.id });
      }
      setposts(postsList);
    });
  }, [setposts]);

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <h1>Firebase</h1>
          {posts.map((post) => (
            <PostsList key={post.id} post={post} />
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default Posts;
