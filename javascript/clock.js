setInterval(() => {
    let clock = document.getElementById("clock");
    let daydisplay=document.getElementById("day");
    let date1=document.getElementById("date");
    let month=document.getElementById("month");
    let year=document.getElementById("year");


    const date=new Date()
    console.log(date);
    
    let hours=date.getHours();

    let minutes=date.getMinutes();
    if(minutes <9){
        minutes=`0${minutes}`;
    }

    let seconds=date.getSeconds();
    
        if(seconds<9){
        seconds =`0${seconds}`;
    }

    let cmonth= date.getMonth()+1;
    let cyear= date.getFullYear();

    let day=date.getDay();
    let d=date.getDate();

    let dayName=["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]; 
    if(hours<12){
        document.getElementById("amOrpm").innerHTML="AM";
    }else{
        document.getElementById("amOrpm").innerHTML="PM";
    }
    clock.innerHTML=`${hours}: ${minutes}: ${seconds}`;

    daydisplay.innerHTML=dayName[day];

    date1.innerHTML=`${d}`;

    month.innerHTML=`${cmonth}`;

    year.innerHTML=`${cyear}`;

}, 1000);