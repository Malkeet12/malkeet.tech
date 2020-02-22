const axios = require("axios");
const cheerio = require("cheerio");

const url =
  "https://www.codementor.io/@dariogarciamoya/understanding--this--in-javascript-du1084lyn?icn=post-8i1jca6jp&ici=post-du1084lyn";
axios
  .get(url)
  .then(function(response) {
    // handle success
    console.log(getData(response.data));
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .finally(function() {
    // always executed
  });

const getData = html => {
  let data = { content: "" };
  const $ = cheerio.load(html);
  $("p").each((index, elem) => {
    data.content += $(elem).text() + "\n\n";
  });

  return data;
};
