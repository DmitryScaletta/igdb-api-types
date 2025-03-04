import { JSDOM } from "jsdom";

const parseTable = (el: Element) => {
  const rows = el.querySelectorAll("tbody > tr");
  const table: string[][] = [];

  for (const row of rows) {
    const rowData: string[] = [];

    for (const cell of row.querySelectorAll("td")) {
      rowData.push(cell.textContent!.trim());
    }

    table.push(rowData);
  }

  return table;
};

const HEADERS = {
  None: 0,
  EndpointTitle: 1,
  RequestPath: 2,
  Enums: 3,
} as const;

export type Endpoint = {
  id: string;
  title: string;
  description: string;
  requestPath: string;
  responseFields: string[][];
  enums: { name: string; values: string[][] }[];
};

const parseDocs = (html: string) => {
  const {
    window: { document },
  } = new JSDOM(html);

  const api: Endpoint[] = [];
  let active = false;
  let currentHeader: (typeof HEADERS)[keyof typeof HEADERS] = HEADERS.None;

  const els = document.querySelectorAll(".page-wrapper > .content > *");

  for (const el of els) {
    if (el.tagName === "H1" && el.id === "endpoints") active = true;
    if (el.tagName === "H1" && el.id === "popscore") active = false;

    if (!active) continue;

    if (el.tagName === "H2") {
      currentHeader = HEADERS.EndpointTitle;

      api.push({
        id: el.id,
        title: el.textContent!.trim(),
        description: "",
        requestPath: "",
        responseFields: [],
        enums: [],
      });
    }

    if (el.tagName === "H3") {
      const elText = el.textContent!.trim();
      if (elText === "Request Path") currentHeader = HEADERS.RequestPath;
      if (elText.endsWith("Enums")) currentHeader = HEADERS.Enums;
    }

    const endpoint = api.at(-1)!;

    if (el.tagName === "P") {
      if (currentHeader === HEADERS.EndpointTitle) {
        endpoint.description = el.textContent!.trim();
      }
      if (currentHeader === HEADERS.RequestPath) {
        endpoint.requestPath = el.textContent!.trim();
      }
      if (currentHeader === HEADERS.Enums) {
        endpoint.enums.push({
          name: el.textContent!.trim(),
          values: [],
        });
      }
    }

    if (el.tagName === "TABLE") {
      if (currentHeader === HEADERS.RequestPath) {
        endpoint.responseFields = parseTable(el);
      }
      if (currentHeader === HEADERS.Enums) {
        endpoint.enums.at(-1)!.values = parseTable(el);
      }
    }
  }

  return api;
};

export default parseDocs;
