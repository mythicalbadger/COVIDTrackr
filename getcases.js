const fetch = require("node-fetch");

var labels = [];
var cases = [];

async function getData(){
    const url = 'https://covid19.th-stat.com/api/open/timeline'
    const res = await fetch(url);
    const data = await res.json();//assuming data is json
    console.log(data["Data"][0]["Date"].split("/"))
}

getData();