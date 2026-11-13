const express = require("express");

// creating the first server with the standard naming app (application server)
const app = express();

// boilerplate
// when a request hits this specific route, call this function
// sample request: https://localhost:3000/sum?a=1&b=2 (uses query param)
// note: query params can be easily accessed using "request.query.a"
// note: query params accessed are by default of type String
// solution: handle the conversion using global functions like for string -> int we use parseInt
app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

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
