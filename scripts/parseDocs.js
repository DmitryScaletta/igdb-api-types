import cheerio from "cheerio";

const parseTable = ($, el) => {
  const rows = $("tbody", el);
  const table = [];

  for (const row of rows.children()) {
    const rowData = [];

    for (const cell of $(row).children()) {
      rowData.push($(cell).text().trim());
    }

    table.push(rowData);
  }

  return table;
};

const HEADERS = {
  EndpointTitle: 1,
  RequestPath: 2,
  Enums: 3,
};

const parseDocs = async (data) => {
  const $ = cheerio.load(data);
  const content = $(".page-wrapper > .content");

  const api = [];
  let active = false;
  let currentHeader;

  for (const el of content.children()) {
    if (el.name === "h1" && $(el).attr("id") === "endpoints") active = true;
    if (el.name === "h1" && $(el).attr("id") === "reference") active = false;

    if (!active) continue;

    if (el.name === "h2") {
      currentHeader = HEADERS.EndpointTitle;

      api.push({
        id: $(el).attr("id"),
        title: $(el).text().trim(),
        description: "",
        requestPath: "",
        responseFields: null,
        enums: [],
      });
    }

    if (el.name === "h3") {
      const elText = $(el).text().trim();

      if (elText === "Request Path") currentHeader = HEADERS.RequestPath;
      if (elText.endsWith("Enums")) currentHeader = HEADERS.Enums;
    }

    if (el.name === "p") {
      if (currentHeader === HEADERS.EndpointTitle) {
        api[api.length - 1].description = $(el).text().trim();
      }

      if (currentHeader === HEADERS.RequestPath) {
        api[api.length - 1].requestPath = $(el).text().trim();
      }

      if (currentHeader === HEADERS.Enums) {
        api[api.length - 1].enums.push({
          name: $(el).text().trim(),
          values: [],
        });
      }
    }

    if (el.name === "table") {
      if (currentHeader === HEADERS.RequestPath) {
        api[api.length - 1].responseFields = parseTable($, el);
      }

      if (currentHeader === HEADERS.Enums) {
        const apiLast = api[api.length - 1];
        const enumLast = apiLast.enums[apiLast.enums.length - 1];

        enumLast.values = parseTable($, el);
      }
    }
  }

  return api;
};

export default parseDocs;
