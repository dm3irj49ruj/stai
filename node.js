const url = require('url');

// Create a URL object
const myURL = new URL('https://www.GeneEG.com');

// You can also create a URL by specifying individual components
const customURL = new URL({
  protocol: 'https:',
  hostname: 'www.GeneEG.com',
  pathname: '/path/to/resource',
  search: 'param1=value1&param2=value2',
});

console.log(myURL.href); // Output the URL as a string
console.log(customURL.href); // Output the custom URL as a string
