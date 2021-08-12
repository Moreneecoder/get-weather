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

export default startTime