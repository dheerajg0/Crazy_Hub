function updateTime(){
    let d = new Date();
    //USA
    usaTime.innerHTML = d.toLocaleTimeString("en-US",{timeZone: "America/New_York"});
    usaDate.innerHTML = d.toDateString("en-US",{timeZone: "America/Chicago"});
    //India
    indiaTime.innerHTML = d.toLocaleTimeString("en-US", {timeZone: "Asia/Kolkata"});
    indiaDate.innerHTML = d.toDateString("en-US",{timeZone: "Asia/Kolkata"});
    //China
    chinaTime.innerHTML = d.toLocaleTimeString("en-US", {timeZone: "Asia/Tokyo"});
    chinaDate.innerHTML = d.toDateString("en-US",{timeZone: "Asia/Tokyo"});
    
    //Alarm
    let alarmHour = alarmInput.value.split(':')[0];
    let alarmMinute = alarmInput.value.split(':')[1];
    if (d.getHours()==alarmHour && d.getMinutes()==alarmMinute){
        alarmMessage.innerHTML = 'Alarm Ringing';
    }
    else{
        alarmMessage.innerHTML = '';
    }
}
updateTime();
setInterval(updateTime, 1000);
