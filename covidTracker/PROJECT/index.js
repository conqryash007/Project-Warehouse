"use strict";
const axios = require("axios");

// Async function
// Gets the data related COVID
// API USED : https://api.rootnet.in
// endpoint : https://api.rootnet.in/covid19-in/stats/history

const getData = async () => {
  try {
    let response = await axios.get(
      "https://api.rootnet.in/covid19-in/stats/history"
    );
    let covid_data = response["data"];
    covid_data = covid_data["data"];
    return covid_data;
  } catch (err) {
    throw Error("Something went wrong!");
  }
};

exports.getDetails = async (month = 3, year = 2020) => {
  // Date format in API 2020-05-20 (YYYY-MM-DD)
  try {
    const data = await getData();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    let req_time = `${year}-${month}`;

    const req_data = data.filter((curr) => {
      if (req_time === curr.day.slice(0, -3)) {
        return curr;
      }
    });

    let n = req_data.length - 1;

    let finalData = {
      date: req_time,
      positiveCasesMonthly:
        req_data[n].summary.total - req_data[0].summary.total,
      recoveredMonthly:
        req_data[n].summary.discharged - req_data[0].summary.discharged,
      deathsMonthly: req_data[n].summary.deaths - req_data[0].summary.deaths,
      totalPositive: req_data[n].summary.total,
      totalRecovered: req_data[n].summary.discharged,
      totalDeaths: req_data[n].summary.deaths,
    };

    return finalData;
  } catch (err) {
    console.log("NOT ABLE TO FETCH DATA");
    throw Error("NOT ABLE TO FETCH DATA");
  }
};
