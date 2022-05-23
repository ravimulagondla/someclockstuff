setInterval(() => {
    d = new Date();
    chour = d.getHours();
    cmin = d.getMinutes();
    csec = d.getSeconds();
    msec = d.getMilliseconds();

    hmov = 30*chour + (cmin/2);
    mmov = 6*cmin + (csec/10);

    smov = 6*csec ;
    
    console.log(csec);

    hour.style.transform = `rotate( ${hmov}deg )`;
    minute.style.transform = `rotate( ${mmov}deg )`;
    second.style.transform = `rotate( ${smov}deg )`;

    var html = "anyway the time is " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    document.getElementById("anyway").innerHTML = html;

}, 1000);