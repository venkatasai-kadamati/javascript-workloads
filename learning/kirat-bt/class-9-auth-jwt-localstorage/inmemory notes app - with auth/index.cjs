// logic for backend
const express = require("express");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("./middleware.cjs");

const app = express();

// json middleware parser
app.use(express.json());

// holds arr of objects { note, username } — notes bound to a user
const notes = [];

// holds arr of objects {pass:_, username:_}
const users = [
  {
    username: "venkat",
    password: "venkat",
  },
];

// ! auth routes
// signup route -> post
app.post("/signup", (req, res) => {
  // grab the username, pass from body and set to users
  const username = req.body.username;
  const password = req.body.password;

  // what if the user already exists, reject the creation
  const userExists = users.find((user) => user.username === username);
  if (userExists) {
    return res.status(403).json({
      message: "User with this username already exists",
    });
  }

  const user = {
    username,
    password,
  };
  users.push(user);

  res.json({
    message: "you have signed up",
  });
});

// signin route -> post
app.post("/signin", (req, res) => {
  const enteredUsername = req.body.username;
  const enteredPassword = req.body.password;

  // only issue a token if credentials match a real user
  const userExists = users.find(
    (user) =>
      user.username === enteredUsername && user.password === enteredPassword,
  );

  if (!userExists) {
    return res.status(403).json({
      message: "Incorrect credentials",
    });
  }

  const token = jwt.sign(
    {
      username: enteredUsername,
    },
    "custom_key",
  );
  // sending the token back as respnose to the client, such that it can be saved in localStorage at client.
  res.json({
    token: token,
    message: "signined in",
  });
});

// get route -> fetch note // authenticated endpoint
app.get("/notes", authMiddleware, (req, res) => {
  // only this user's notes
  const userNotes = notes.filter((n) => n.username === req.username);

  res.json({
    notes: userNotes,
  });
});

// post route -> create note // authenticated endpoint
app.post("/createnote", authMiddleware, (req, res) => {
  // bind note to the logged-in user (from middleware)
  notes.push({
    note: req.body.note,
    username: req.username,
  });

  res.json({
    message: "note creation done",
  });
});

// ! serve files
// signup page
app.get("/signup", (req, res) => {
  res.sendFile(
    "/Users/venkatasaikadamati/Documents/codebase/jscd/learning/kirat-bt/class-9-auth-jwt-localstorage/inmemory notes app - with auth/public/signup.html",
  );
});

// signin page
app.get("/signin", (req, res) => {
  res.sendFile(
    "/Users/venkatasaikadamati/Documents/codebase/jscd/learning/kirat-bt/class-9-auth-jwt-localstorage/inmemory notes app - with auth/public/signin.html",
  );
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
