console.log("Analog Clock")
function timeUpdate(){
    d = new Date();
    console.log(d)
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();
    msTime = d.getMilliseconds();
    hRotation = 30*hTime + mTime/2 + sTime/120 + msTime/120000;
    mRotation = 6*mTime + sTime/10 + msTime/10000;
    sRotation = 6*sTime + (6/1000)*msTime;
    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    seconds.style.transform = `rotate(${sRotation}deg)`;
}

timeUpdate();
setInterval(timeUpdate, 1000);