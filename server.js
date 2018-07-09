// Atlassian Developer Documentation for Jira Cloud -  API Token Auth
//
// https://developer.atlassian.com/cloud/jira/platform/jira-rest-api-basic-authentication/

const fetch = require('fetch').fetchUrl;
const btoa = require('btoa');

// Atlassian API token - Obtained from id.atlassian.net
// My username - complete email. ie. xxxx@domain.com
// Atlassian domain where my Jira Cloud instance lives. ie. <domain>.atlassian.net
const token = process.env.API_TOKEN;
const username = process.env.USERNAME;
const domain = process.env.DOMAIN;


const encoded = btoa(username+':'+token)
// console.log(encoded)


// == Fetch from the Jira Cloud projects API endpoint ==

fetch(`https://${domain}.atlassian.net/rest/api/2/project`, {
  headers: {
    'Authorization': `Basic ${encoded}`
  }
}, (error, meta, body) => {
  if (body) {
    const response = JSON.parse(body.toString())
    // console.log(response);
  
    console.log('Your Projects:')
    response.forEach(item => console.log(item.name))  
  }
})