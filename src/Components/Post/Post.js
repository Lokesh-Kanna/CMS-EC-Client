import * as React from "react";
import "./Post.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MiniDrawer } from "../../MiniDrawer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function NewPost({ datum, addData }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [type, setType] = useState();
  const [auth, setAuth] = useState();
  const [rating, setRating] = useState();
  const [recommend, setRecommend] = useState();
  const [img, setImg] = useState();
  const [summary, setSummary] = useState();
  return (
    <div>
      <MiniDrawer />
      <div id="input-field">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            className="inputfields"
            id="outlined-basic"
            label="Title"
            variant="filled"
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            className="inputfields"
            id="outlined-basic"
            label="Type"
            variant="filled"
            onChange={(event) => setType(event.target.value)}
          />
          <TextField
            className="inputfields"
            id="outlined-basic"
            label="Author/Director"
            variant="filled"
            onChange={(event) => setAuth(event.target.value)}
          />
          <TextField
            className="inputfields"
            id="outlined-basic"
            label="Your rating out of 10"
            variant="filled"
            onChange={(event) => setRating(event.target.value)}
          />

          <TextField
            className="inputfields"
            id="outlined-basic"
            label="Would you suggest this to others?"
            variant="filled"
            onChange={(event) => setRecommend(event.target.value)}
          />
          <TextField
            className="inputfields"
            id="outlined-basic"
            label="Image URL"
            variant="filled"
            onChange={(event) => setImg(event.target.value)}
          />
          <TextField
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Summary"
            variant="filled"
            onChange={(event) => setSummary(event.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              const newPost = {
                title,
                type,
                auth,
                rating,
                recommend,
                img,
                summary,
              };
              const addedPost = [...datum, newPost];
              addData(addedPost);
              navigate("/dashboard");
            }}
          >
            Publish
          </Button>
        </Box>
      </div>
    </div>
  );
}

export { NewPost };
