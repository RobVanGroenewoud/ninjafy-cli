#!/usr/bin/env node

const meow = require("meow");
const { ninjafy } = require("ninjafy");

const cli = meow(
  `
	Usage
	  $ ninjafy <input>

	Examples
	  $ ninjafy John Doe
	  Zumorito Temoku
`
);

if (cli.input.length) {
  const ninjafiedInput = cli.input.map(ninjafy).join(" ");
  console.log(ninjafiedInput);
} else {
  cli.showHelp(1);
}
