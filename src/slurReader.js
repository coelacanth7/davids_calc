var fs = require("fs");

// read slurs
var text = fs.readFileSync("./src/slurs.txt", "utf-8").split("\n");

// write slurs
var file = fs.createWriteStream("src/slurs.js");

file.write("const slurs = [")

text.forEach(function(v) {
	file.write(`"${v}",\n`);
});

file.on("finish", () => {
	console.log(`wrote all the array data to file`);
  file.write("]")
});

file.on("error", err => {
	console.error(`There is an error writing the file ${err}`);
});

file.end();
