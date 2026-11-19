// logic for backend
const express = require("express");
const app = express();

// json middleware parser
app.use(express.json());
// holds many strings
const notes = ["first note", "second note"];
// get route -> fetch note
app.get("/notes", (req, res) => {
  res.json({
    notes,
  });
});

// post route -> create note
app.post("/createnote", (req, res) => {
  // add the input note sent through body
  const newNote = req.body.note;
  notes.push(newNote);

  res.json({
    message: "note creation done",
  });
});
// default route -> landing html served
app.get("/", (req, res) => {
  const path = "";
  res.sendFile(
    "/Users/venkatasaikadamati/Documents/codebase/jscd/learning/kirat-bt/class-9-auth-jwt-localstorage/inmemory notes app - with auth/public/index.html",
  );
});

app.listen(3000, () => {
  console.log("server running on port: 3000");
});
