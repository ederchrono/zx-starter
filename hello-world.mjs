#!/usr/bin/env zx

try {
  await $`mkdir my-folder`;
} catch (error) {
  // folder already created
}

let numFiles = await question("how many pokemon will we fetch? ");

let promises = [];
for (let index = 1; index < parseInt(numFiles) + 1; index++) {
  promises.push(fetchAndWritePokemon(index));
}

async function fetchAndWritePokemon(index) {
  let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
  let content = "couldn't fetch this pokemon";
  if (resp.ok) {
    content = await resp.text();
  }
  await fs.writeFile(`./my-folder/file-${index}.json`, content);
}

await Promise.all(promises);
console.log(chalk.green(`All done! ${numFiles} files written`));
