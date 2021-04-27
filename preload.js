const fetch = require("node-fetch")

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }

    fetch("https://covid19.th-stat.com/api/open/today")
        .then(result => result.json())
        .then(json => {
            replaceText("daily-cases", json["NewConfirmed"]);
        });

});