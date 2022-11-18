import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Textarea from "@mui/joy/Textarea";
import blok from "../assets/blok.png";
import { BlogContext } from "../context/BlogContext";

import { AddContact } from "../helpers/functions";

const NewBlog = () => {
  const { info, setInfo } = React.useContext(BlogContext);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    console.log(info);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    AddContact(info);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={blok} alt="blog" />
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AddPhotoAlternateIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          New Blog
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="title"
            name="title"
            autoComplete="title"
            autoFocus
            value={info.title || ""}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="img_url"
            label="Img-URL"
            name="img_url"
            autoComplete="img-url"
            autoFocus
            value={info.img_url || ""}
            onChange={handleChange}
          />
          {/* <TextField
            margin="normal"
            required
            fullWidth
            name="content"
            label="content"
            type="text"
            id="content"
            autoComplete="current-password"
          /> */}
          <Textarea
            color="primary"
            minRows={2}
            size="lg"
            label="content"
            placeholder="content"
            name="content"
            value={info.content || ""}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NewBlog;
