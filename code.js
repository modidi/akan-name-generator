document.querySelector("#formAkan") .addEventListener("submit", (event) => {
    event.preventDefault();

let day = Number(document.getElementById("day").value);
let month = Number(document.getElementById("month").value);
let gender = (document.getElementById("gender").value);
let year = Number(document.getElementById("year").value);
let result = document.getElementById("result");


if (!day || day < 1 || day > 31 ) {
    alert("Invalid day");
    return;
}

if (!month || month < 1 || month >12 ) {
    alert("Invalid month");
    return;
}

const currentYear = new Date().getFullYear();

if (!year || year < 1900 || year > currentYear) {
  alert("Invalid year");
  return;
}

if (!gender) {
    alert("Please select gender");
    return;
}

let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let CC = Math.floor(year / 100);
let YY = year % 100;
let DD = day;
let MM = month;


let dayofWeek = Math.floor(
    (((CC / 4) - (2 * CC) - 1) + ((5 * YY) / 4) + ((26 * (MM + 1)) / 10) + DD) % 7 
);

if (dayofWeek < 0) {
    dayofWeek = (dayofWeek + 7) % 7;
}

let akanName;

 if (gender === "male") {
    akanName = maleNames[dayofWeek];
 } else {
    akanName = femaleNames[dayofWeek];
 }

 let dayName = days[dayofWeek];

result.textContent = "You were born on " + dayName + " - Your Akan Name is " +akanName;


});



