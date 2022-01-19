import * as React from "react";
import "./Edit.css";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MiniDrawer } from "../../MiniDrawer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function EditPost({ datum, addData }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = datum[id];

  const [title, setTitle] = useState(data.title);
  const [type, setType] = useState(data.type);
  const [auth, setAuth] = useState(data.auth);
  const [yourRating, setYourRating] = useState(data.yourRating);
  const [recommend, setRecommend] = useState(data.recommend);
  const [img, setImg] = useState(data.img);
  const [summary, setSummary] = useState(data.summary);
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
            defaultValue={data.title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            className="inputfields"
            id="outlined-basic"
            label="Type"
            variant="filled"
            defaultValue={data.type}
            onChange={(event) => setType(event.target.value)}
          />
          <TextField
            className="inputfields"
            id="outlined-basic"
            label="Author/Director"
            variant="filled"
            defaultValue={data.auth}
            onChange={(event) => setAuth(event.target.value)}
          />
          <TextField
            className="inputfields"
            id="outlined-basic"
            label="Your rating out of 10"
            variant="filled"
            defaultValue={data.yourRating}
            onChange={(event) => setYourRating(event.target.value)}
          />

          <TextField
            className="inputfields"
            id="outlined-basic"
            label="Would you suggest this to others?"
            variant="filled"
            defaultValue={data.recommend}
            onChange={(event) => setRecommend(event.target.value)}
          />
          <TextField
            className="inputfields"
            id="outlined-basic"
            label="Image URL"
            variant="filled"
            defaultValue={data.img}
            onChange={(event) => setImg(event.target.value)}
          />
          <TextField
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            variant="filled"
            defaultValue={data.summary}
            onChange={(event) => setSummary(event.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              const updatedPost = {
                title,
                type,
                auth,
                yourRating,
                recommend,
                img,
                summary,
              };
              const editedPost = [...datum];
              editedPost[id] = updatedPost;
              addData(editedPost);
              navigate("/profile");
            }}
          >
            Save Edit
          </Button>
        </Box>
      </div>
    </div>
  );
}

export { EditPost };
