setInterval(timeFunction, 1000);


function timeFunction() {
    let currentDate = new Date();
    // console.log(currentDate);
    let sunday = document.querySelector(".sunday");
    let monday = document.querySelector(".monday");
    let tuesday = document.querySelector(".tuesday");
    let wednesday = document.querySelector(".wednesday");
    let thrusday = document.querySelector(".thrusday");
    let friday = document.querySelector(".friday");
    let saturday = document.querySelector(".saturday");
    let day = currentDate.getDay();
    if (day === 0) {
        sunday.style.backgroundColor = "red";
    } else if (day === 1) {
        monday.style.backgroundColor = "red";
    } else if (day === 2) {
        tuesday.style.backgroundColor = "red";
    } else if (day === 3) {
        wednesday.style.backgroundColor = "red";
    } else if (day === 4) {
        thrusday.style.backgroundColor = "red";
    } else if (day === 5) {
        friday.style.backgroundColor = "red";
    } else if (day === 6) {
        saturday.style.backgroundColor = "red";
    }


    let second = currentDate.getSeconds();
    // console.log(second);

    let minute = currentDate.getMinutes();
    // console.log(minute);

    let hour = currentDate.getHours();
    // console.log(hour);

    let secc = document.querySelector(".digital-seconds");
    let min = document.querySelector(".digital-minutes");
    let hr = document.querySelector(".digital-hours");

    let ampm = document.querySelector(".am");

    hr.innerHTML = hour;
    min.innerHTML = minute;
    secc.innerHTML = second;

    if (hour < 10) {
        hr.innerHTML = "0" + hour;
    }
    if (minute < 10) {
        min.innerHTML = "0" + minute;
    }
    if (second < 10) {
        secc.innerHTML = "0" + second;
    }

    if (hour < 12) {
        ampm.innerHTML = 'AM';
    } else {
        ampm.innerHTML = 'PM';
    }

    if (hour == 0) {
        hr.innerHTML = "12";
    }
    if (hour > 12) {
        hr.innerHTML = (hour - 12);
    }
    // if ((hour - 12) < 10) {
    //     hr.innerHTML = "0" + (hour - 12);
    //  }

}
timeFunction();