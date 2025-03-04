import fsp from "fs/promises";
import generateTypes from "./generateTypes.ts";
import parseDocs from "./parseDocs.ts";

const main = async () => {
  const html = await fsp.readFile("./data/api-docs.html", "utf8");
  const api = parseDocs(html);
  const types = generateTypes(api);

  await Promise.all([
    fsp.writeFile("./api.json", JSON.stringify(api, null, 2)),
    fsp.writeFile("./index.ts", types),
  ]);
};

main();
