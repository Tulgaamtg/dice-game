// Тоглогчийн ээлжийг хадгалах хувьсагч.
var activePlayer = 1;

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тухайн хугацааны буултыг хадгалах хувьсагч
var roundScore = 0;

// Ð¨Ð¾Ð¾Ð½Ñ‹ Ð°Ð»ÑŒ Ñ‚Ð°Ð»Ð°Ð°Ñ€Ð°Ð° Ð±ÑƒÑƒÑÐ½Ñ‹Ð³ Ñ…Ð°Ð´Ð³Ð°Ð»Ð°Ñ… Ñ…ÑƒÐ²ÑŒÑÐ°Ð³Ñ‡ Ñ…ÑÑ€ÑÐ³Ñ‚ÑÐ¹, 1-6 Ð³ÑÑÑÐ½ ÑƒÑ‚Ð³Ñ‹Ð³ ÑÐ½Ñ Ñ…ÑƒÐ²ÑŒÑÐ°Ð³Ñ‡Ð¸Ð´ ÑÐ°Ð½Ð°Ð¼ÑÐ°Ñ€Ð³Ò¯Ð¹Ð³ÑÑÑ€ Ò¯Ò¯ÑÐ³ÑÐ¶ Ó©Ð³Ð½Ó©.
var dice = Math.floor(Math.random() * 6) + 1;

// ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼ ÑÑ…Ð»ÑÑ…ÑÐ´ Ð±ÑÐ»Ñ‚Ð³ÑÐµ
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

console.log("Шоо :" + dice);
