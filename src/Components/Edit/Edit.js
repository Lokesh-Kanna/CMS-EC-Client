import * as React from "react";
import "./Edit.css";
import { MiniDrawer } from "../../MiniDrawer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function EditPost() {
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
          />
          <TextField
            className="inputfields"
            id="outlined-basic"
            label="Type"
            variant="filled"
          />
          <TextField
            className="inputfields"
            id="outlined-basic"
            label="Author/Director"
            variant="filled"
          />
          <TextField
            className="inputfields"
            id="outlined-basic"
            label="Your rating out of 10"
            variant="filled"
          />

          <TextField
            className="inputfields"
            id="outlined-basic"
            label="Would you suggest this to others?"
            variant="filled"
          />
          <TextField
            className="inputfields"
            id="outlined-basic"
            label="Image URL"
            variant="filled"
          />
          <TextField
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Summary"
            variant="filled"
          />
          <Button variant="contained">Save Edit</Button>
        </Box>
      </div>
    </div>
  );
}

export { EditPost };
