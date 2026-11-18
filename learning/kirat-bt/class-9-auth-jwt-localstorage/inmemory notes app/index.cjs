const express = require("express");
const app = express();

app.use(express.json());

const notes = [];
// routes
// get route -> fetchs note
app.get("/notes", (req, res) => {
  res.json({
    notes,
  });
});

// post route -> creates note
app.post("/createpost", (req, res) => {
  notes.push(req.body.note);

  console.log("note created");

  res.json({
    message: "DONE",
  });
});

// serve html on landing route
app.get("/", (req, res) => {
  res.sendFile(
    "/Users/venkatasaikadamati/Documents/codebase/jscd/learning/kirat-bt/class-9-auth-jwt-localstorage/inmemory notes app/public/index.html",
  );
});

app.listen(3000, () => console.log("server up on port: 3000"));
