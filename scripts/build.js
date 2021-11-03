import fs from "fs/promises";
import fetchHtml from "./fetchHtml.js";
import generateTypes from "./generateTypes.js";
import parseDocs from "./parseDocs.js";

const main = async () => {
  const html = await fetchHtml("https://api-docs.igdb.com/");
  const api = await parseDocs(html);
  const types = await generateTypes(api);

  await Promise.all([
    fs.writeFile("./api.json", JSON.stringify(api, null, 2)),
    fs.writeFile("./index.ts", types),
  ]);
};

main();
