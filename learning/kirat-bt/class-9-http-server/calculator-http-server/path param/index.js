const express = require("express");

// creating the first server with the standard naming app (application server)
const app = express();

// boilerplate
// when a request hits this specific route, call this function
// sample request: https://localhost:3000/sum/1/2 (uses path param)
// the idea is first path param is fixed(/sum), rest should be captured as anthing, anything
// solution: use (dynamic route) written as ":routename" & then inside the function "req.params"
app.get("/sum/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  const sum = a + b; // ! caution: a,b are string by default

  // output in json
  // res.json({
  //   answer: sum,
  // });

  // send the output as text
  res.send(sum.toString());

  // send html as response
  // res.send("<b><u>" + sum + "</u></b>");
});

// app.get("/sub");
// app.get("/mul");
// app.get("/div");

app.listen(3000);
