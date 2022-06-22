function getDateNow(){
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDay();
    var ddate = d.getDate();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août','Septembre', 'Octobre', 'Novembre', 'Décembre'];
    const days = ['Dimanche','Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'] ;
    if(ddate.toString().length == 1){
        ddate = '0' +ddate;
    };
    if(hour.toString().length == 1){
        hour = '0' +hour
    };
    if(minute.toString().length == 1){
        minute = '0' +minute;
    };
    if(second.toString().length == 1){
        second = '0' +second;
    };
    let dateTime = (days[day]+ ' ' + ddate+ ' ' +months[month]+ ' ' +year+ ' / ' +hour+ ':' +minute+ ':' +second+ ' GMT');
    return (dateTime);
};

setInterval(function(){
    document.getElementById("getdate").innerHTML = getDateNow();
}, 1000);
