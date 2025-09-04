var ramadanStartDate = moment("2026-02-18");
var now = moment();
var formattedDate = moment(ramadanStartDate).format('LL');

document.getElementById("ramadan-start-date").innerText = formattedDate;
var inputs = document.querySelectorAll("input");

function calender() {
    var duration = moment.duration(ramadanStartDate.diff(moment()));
    inputs[0].value = duration.months();
    inputs[1].value = duration.days();
    inputs[2].value = duration.hours();
    inputs[3].value = duration.minutes();
    inputs[4].value = duration.seconds();

}

calender();

setInterval(() => {
    calender();
}, 1000);








