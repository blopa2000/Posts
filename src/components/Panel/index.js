import { useState } from "react";
import { Card, CardActions, TextField, Button, FormControl, Typography, Divider } from "@material-ui/core";
import useStyle from "./styles";

import Preview from "./Preview";

const Panel = () => {
  const classes = useStyle();

  const [previewSource, setPreviewSource] = useState();
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  const selecFile = () => {
    document.getElementById("fileInput").click();
  };

  const previewFile = (file) => {
    if (file === undefined) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  return (
    <>
      <Card className={classes.root}>
        <FormControl action="#" className={classes.formStyle}>
          <Typography variant="h3" color="primary">
            Add a post
          </Typography>
          <TextField type="email" id="Email" label="email" variant="outlined" size="small" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField type="text" id="Description" label="Description" multiline rows={4} variant="outlined" size="small" value={description} onChange={(e) => setDescription(e.target.value)} />

          <input
            type="file"
            style={{ display: "none" }}
            id="fileInput"
            onChange={(e) => {
              previewFile(e.currentTarget.files[0]);
            }}
          />
          <Button color="primary" onClick={selecFile}>
            Add an image
          </Button>
          <Divider className={classes.divider} />

          <CardActions>
            <Button variant="contained" color="primary">
              save
            </Button>
          </CardActions>
        </FormControl>
      </Card>

      <Preview previewSource={previewSource} description={description} email={email} />
    </>
  );
};

export default Panel;
