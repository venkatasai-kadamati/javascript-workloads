const express = require("express");

// creating the first server with the standard naming app (application server)
const app = express();

// default home route -> render the html response
// solution: use "res.sendFile("html_file")
app.get("/", (req, res) =>
  res.sendFile(
    "/Users/venkatasaikadamati/Documents/codebase/jscd/learning/kirat-bt/class-9-http-server/calculator-http-server/serving html to frontend/fullstack simulation/index.html",
  ),
);

app.get("/sum/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  const sum = a + b; // ! caution: a,b are string by default

  // output in json
  res.json({
    answer: sum,
  });

  // send the output as text
  // res.send(sum.toString());

  // send html as response
  // res.send("<b><u>" + sum + "</u></b>");
});

// app.get("/sub");
// app.get("/mul");
// app.get("/div");

app.listen(3000);
