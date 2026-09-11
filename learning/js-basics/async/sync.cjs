const fs = require("fs");
const path = require("path");

const correctPath = path.join(__dirname, "a.txt");

const fileContent = fs.readFileSync(correctPath, "utf-8");
console.log(fileContent);
