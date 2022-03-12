function showTime(){
    var date = new Date();
    h=date.getHours();
    m=date.getMinutes();
    s=date.getSeconds();
    var session="AM";
    if(h==0){
        h=12;
    }
    if(h>12){
        h=h-12;
        session="PM"
    }
    h=(h<10)?"0"+  h : h;
    m=(m<10)?"0" + m : m;
    s=(s<10)?"0" + s : s;
    var time =h+":"+m+":"+s+" "+session;
    document.getElementById("displayclock").innerText=time;
    document.getElementById("displayclock").innerContent=time;
    setInterval(showTime,1000);
 }
 showTime();