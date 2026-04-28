document.getElementById("formAkan"). addEventListener("submit", function(e) {
    e.preventDefault();
}
let day = parseInt(document.getElementById("day").value);
let month = parseInt(document.getElementById("month").value);
let year = parseInt(document.getElementById("year").value);
let gender = parseInt(document.getElementById("result").value);

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
}

let maleNames = ["Kwasi", "K"]