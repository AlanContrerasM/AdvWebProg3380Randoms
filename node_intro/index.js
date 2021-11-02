
const fs = require('fs');//for native modules...
//using superheroes
const superheroes = require("superheroes");
// import * as superheroes from "superheroes"; //not working
const pokemon = require("pokemon");

fs.copyFileSync("file1.txt", "file2.txt");//if it exist it overrides

const name = superheroes.random();
const pokeName = pokemon.random();
console.log("Hello World!!");
console.log(name, pokeName);