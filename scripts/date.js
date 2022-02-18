`use strict`;
var datetime = new Date();
var today = new Date();
var day = today.getDay();
var daylist = ["Sun", "Mon", "Tue", "Wed ", "Thu", "Fri", "Sat"];
var monthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function refreshTime() {
  const timeDisplay = document.getElementById("time");
  var date = new Date();
  const dateString = date.toLocaleString();
  const newDateString = dateString.slice(11);
  const formattedString = newDateString;
  var d = date.getDay();
  var m = date.getMonth();
  timeDisplay.textContent =
    daylist[day] + " " + monthList[m] + " " + d + " " + formattedString;
}
refreshTime();
setInterval(refreshTime, 1000);
