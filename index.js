function showTime(){
    let date=new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let seconds=date.getSeconds();
    let session='AM';
    if(hour==0)
    {
        hour=12;
    }
    if(hour>12)
    {
        hour-=12;
        session='PM';
    }
    hour=(hour<10) ? '0'+hour :hour;
    minute=(minute<10) ? '0'+minute :minute;
    seconds=(seconds<10) ? '0'+seconds :seconds;
    let time=hour+':'+minute+':'+seconds+' '+session;
    document.getElementById('MyClockDisplay').innerText=time;
    document.getElementById('MyClockDisplay').textContent=time;
    setTimeout(showTime, 1000);

    
}
showTime();