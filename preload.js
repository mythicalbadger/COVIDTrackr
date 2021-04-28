const fetch = require("node-fetch")

const IDList = ["daily-cases", "daily-deaths", "total-cases", "total-deaths", "last-updated"]
const APIList = ["NewConfirmed", "NewDeaths", "Confirmed", "Deaths", "UpdateDate"]

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }

    fetch("https://covid19.th-stat.com/api/open/today")
        .then(result => result.json())
        .then(json => {
            for (var i = 0; i < IDList.length; i++) {
                replaceText(IDList[i], json[APIList[i]]);
            }
            
    });

});