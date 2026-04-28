document.getElementById("formAkan"). addEventListener("submit", function(e) {
    e.preventDefault();

let day = parseInt(document.getElementById("day").value);
let month = parseInt(document.getElementById("month").value);
let year = parseInt(document.getElementById("year").value);
let gender = parseInt(document.getElementById("gender").value);

let result = document.getElementById("result");

if (day < 1 || day > 31 ) {
    alert("Invalid day");
    return;
}

if (month < 1 || month >12 ) {
    alert("Invalid month");
    return;
}

if (!gender) {
    alert("Please select gender");
    return;
}

let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let CC = Math.floor(year / 100);
let YY = year % 100;
let MM = month;
let DD = day;

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

result.textContent = "Your Akan name is: " +akanName;
});




