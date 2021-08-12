const checkTime = (i) => {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

const startTime = () => {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();          

    m = checkTime(m);
    s = checkTime(s);
    let timeType = 'PM';
    if(h < 12){
        timeType = 'AM';
    }

    document.getElementById('time').innerHTML =
    `${h}:${m}:${s} ${timeType}`;
    var t = setTimeout(startTime, 500);
}

const displayDate = () => {
    const days = ['Monday', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']

    var months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "Sept", "October", "November", "December"
    ];

    var today = new Date();    
    var date = `${days[today.getDay() - 1]}, ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
    document.getElementById('date-display').innerHTML = date;
}

export {startTime, displayDate}