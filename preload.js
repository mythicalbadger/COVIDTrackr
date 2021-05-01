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

            fetch("https://covid19.th-stat.com/api/open/timeline")
            .then(result => result.json())
            .then(json => {

                var latestCases = json["Data"][json["Data"].length - 1]["NewConfirmed"];
                var yesterdayCases = json["Data"][json["Data"].length - 2]["NewConfirmed"];
                var latestDeaths = json["Data"][json["Data"].length - 1]["NewDeaths"];
                var yesterdayDeaths = json["Data"][json["Data"].length - 2]["NewDeaths"];
                
                if (latestCases > yesterdayCases) {
                    if (document.getElementById("case-arrow").classList.contains("fa-chevron-down")) {
                        document.getElementById("case-arrow").classList.remove("fa-chevron-down")
                        document.getElementById("death-arrow").classList.remove("red")
                    }
                    else if (document.getElementById("case-arrow").classList.contains("fa-equals")) {
                        document.getElementById("case-arrow").classList.remove("fa-equals")
                    }
                    document.getElementById("case-arrow").classList.toggle("fa-chevron-up")
                    document.getElementById("case-arrow").classList.toggle("green")
                }
                else if (latestCases == yesterdayCases) {
                    if (document.getElementById("case-arrow").classList.contains("fa-chevron-down")) {
                        document.getElementById("case-arrow").classList.remove("fa-chevron-down")
                        document.getElementById("case-arrow").classList.remove("red")
                    }
                    else if (document.getElementById("case-arrow").classList.contains("fa-chevron-up")) {
                        document.getElementById("case-arrow").classList.remove("fa-chevron-up")
                        document.getElementById("case-arrow").classList.remove("green")
                    }
                    document.getElementById("case-arrow").classList.toggle("fa-equals")
                }
                else {
                    if (document.getElementById("case-arrow").classList.contains("fa-chevron-up")) {
                        document.getElementById("case-arrow").classList.remove("fa-chevron-up")
                        document.getElementById("death-arrow").classList.remove("green")
                    }
                    else if (document.getElementById("case-arrow").classList.contains("fa-equals")) {
                        document.getElementById("case-arrow").classList.remove("fa-equals")
                    }
                    document.getElementById("case-arrow").classList.toggle("fa-chevron-down")
                    document.getElementById("case-arrow").classList.toggle("red")
                }

                if (latestDeaths > yesterdayDeaths) {
                    if (document.getElementById("death-arrow").classList.contains("fa-chevron-down")) {
                        document.getElementById("death-arrow").classList.remove("fa-chevron-down")
                        document.getElementById("death-arrow").classList.remove("red")
                    }
                    else if (document.getElementById("death-arrow").classList.contains("fa-equals")) {
                        document.getElementById("death-arrow").classList.remove("fa-equals")
                    }
                    document.getElementById("death-arrow").classList.toggle("fa-chevron-up")
                    document.getElementById("death-arrow").classList.toggle("green")
                }
                else if (latestDeaths == yesterdayDeaths) {
                    if (document.getElementById("death-arrow").classList.contains("fa-chevron-down")) {
                        document.getElementById("death-arrow").classList.remove("fa-chevron-down")
                        document.getElementById("death-arrow").classList.remove("red")
                    }
                    else if (document.getElementById("death-arrow").classList.contains("fa-chevron-up")) {
                        document.getElementById("death-arrow").classList.remove("fa-chevron-up")
                        document.getElementById("death-arrow").classList.remove("green")
                    }
                    document.getElementById("death-arrow").classList.toggle("fa-equals")
                }
                else {
                    if (document.getElementById("death-arrow").classList.contains("fa-chevron-up")) {
                        document.getElementById("death-arrow").classList.remove("fa-chevron-up")
                        document.getElementById("death-arrow").classList.remove("green")
                    }
                    else if (document.getElementById("death-arrow").classList.contains("fa-equals")) {
                        document.getElementById("death-arrow").classList.remove("fa-equals")
                    }
                    document.getElementById("death-arrow").classList.toggle("fa-chevron-down")
                    document.getElementById("death-arrow").classList.toggle("red")
                }
            });

    });

});