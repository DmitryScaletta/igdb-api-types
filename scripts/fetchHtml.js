import https from "https";

const fetchHtml = (url) =>
  new Promise((resolve) => {
    https.get(url, (res) => {
      let responseBody = "";

      res.setEncoding("utf8");
      res.on("data", (chunk) => (responseBody += chunk));
      res.on("end", () => resolve(responseBody));
    });
  });

export default fetchHtml;
