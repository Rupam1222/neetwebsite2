let date = document.querySelectorAll("#date");
let time = document.querySelectorAll("#time");



function updateClock(){
    
    const d = new Date();
    setTimeout(updateClock, 1000);

if(d.getMonth() == 0){
    document.getElementById("month").innerHTML = "January";
}else if(d.getMonth() == 1){
    document.getElementById("month").innerHTML = "February";
}else if(d.getMonth() == 2){
    document.getElementById("month").innerHTML = "March";
}else if(d.getMonth() == 3){
    document.getElementById("month").innerHTML = "April";
}else if(d.getMonth() == 4){
    document.getElementById("month").innerHTML = "May";
}else if(d.getMonth() == 5){
    document.getElementById("month").innerHTML = "June";
}else if(d.getMonth() == 6){
    document.getElementById("month").innerHTML = "July";
}else if(d.getMonth() == 7){
    document.getElementById("month").innerHTML = "August";
}else if(d.getMonth() == 8){
    document.getElementById("month").innerHTML = "September";
}else if(d.getMonth() == 9){
    document.getElementById("month").innerHTML = "October";
}else if(d.getMonth() == 10){
    document.getElementById("month").innerHTML = "November";
}else if(d.getMonth() == 11){
    document.getElementById("month").innerHTML = "December";
}

document.getElementById("date").innerHTML = d.getDate() + "-";

document.getElementById("year").innerHTML = "-" + d.getFullYear();

let hour = d.getHours();
let min = d.getMinutes();
let seceond = d.getSeconds();


document.getElementById("time").innerHTML = d.getHours() + ":" + d.getMinutes();

}
updateClock();


$('.menu-icon').click(function() {
    $(this).toggleClass('active');
});
