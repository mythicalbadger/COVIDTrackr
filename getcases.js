const fetch = require("node-fetch");

var labels = [];
var cases = [];

async function getData(){
    const url = 'https://covid19.th-stat.com/api/open/timeline'
    const res = await fetch(url);
    const data = await res.json();//assuming data is json
    for (var i = 0; i < data["Data"].length; i++) {
        labels.push(data["Data"][i]["Date"]);
        cases.push(data["Data"][i]["NewConfirmed"]);
    }
}

getData();