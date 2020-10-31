import { useState } from "react";

//firebase
import { db, storege } from "../../firebase";

//material ui
import { Card, CardActions, TextField, Button, FormControl, Typography, Divider } from "@material-ui/core";
import useStyle from "./styles";

//components
import Preview from "./Preview";

const Panel = () => {
  const classes = useStyle();

  const [previewSource, setPreviewSource] = useState();
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  const selectFile = () => {
    document.getElementById("fileInput").click();
  };

  const previewFile = (file) => {
    if (file === undefined) return;
    setFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSave = () => {
    if (file !== undefined) {
      const storageRef = storege.ref("/posts/" + file.name);
      const uploadFile = storageRef.put(file);

      uploadFile.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        async () => {
          console.log("file save to firebase");
          const downloadURL = await storageRef.getDownloadURL();
          createDocument(downloadURL);
        }
      );
    } else {
      createDocument();
    }
  };

  const createDocument = (file = "") => {
    db.collection("posts").add({
      images: file,
      description,
      email,
    });
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
          <Button color="primary" onClick={selectFile}>
            Add an image
          </Button>
          <Divider className={classes.divider} />

          <CardActions>
            <Button variant="contained" color="primary" onClick={handleSave}>
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
