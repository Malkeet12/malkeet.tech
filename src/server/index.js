const axios = require('axios');
const cheerio = require('cheerio');

const url =
  'https://medium.com/javascript-in-plain-english/overriding-tostring-function-of-javascript-objects-dd3545ba6254';
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

getData = html => {
  let data = { content: '' };
  const $ = cheerio.load(html);
  $('p').each((index, elem) => {
    data.content += $(elem).text() + '\n\n';
  });

  return data;
};
