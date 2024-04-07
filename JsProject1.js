// Get the current date and time
var currentDate = new Date();

// Extract individual components (year, month, day, hour, minute, second)
var year = currentDate.getFullYear();
var month = currentDate.getMonth()+1; // Month is zero-indexed, so we add 1
var day = currentDate.getDate();
var hour = currentDate.getHours();
var minute = currentDate.getMinutes();
var second = currentDate.getSeconds();

// Format the date and time as desired
var formattedDateTime = "0"+day+" - 0"+month+" - "+year+" and "+hour + ":" + minute + ":" + second;

let user = 'Uday';
// let morningHours=[0,1,2,3,4,5,6,7,8,9,10,11,12];
let morningHours=[];
var noonHours=[];
let eveHours=[];
let nightHours=[];
// var i = morningHours;
for (var i = 0; i <= 12; i++) {
    morningHours.push(i);
}
for (var i = 12; i <= 17; i++) {
    noonHours.push(i);
}
for (var i = 17; i <= 20; i++) {
    eveHours.push(i);
}
for (var i = 20; i <= 24; i++) {
    nightHours.push(i);
}

// console.log('morning hours');
// console.log(morningHours);
// console.log('noon hours');
// console.log(noonHours);
// console.log('eve hours');
// console.log(eveHours);
// console.log('night hours');
// console.log(nightHours);

console.log("Current date and time: " + formattedDateTime);

for (var morningHour of morningHours) {
    // console.log(morningHour);
    if(morningHour === hour){
        var a="Good Morning Uday"
        // console.log("Good Morning", user)
    }

for (var noonHour of noonHours) {
    if(noonHour ===hour){
        var a="Good Afternoon Uday"
        // console.log("Good Night",user);
            }
}

for (var eveHour of eveHours) {
    if(eveHour === hour){
        var a="Good Evening Uday"

        //    console.log("Good Evening",user);
         }
}

for (var nightHour of nightHours) {
    if(nightHour ===hour){
        var a="Good Night Uday"

    //    console.log("Good Night",user);
         }
    }

}

var time = document.getElementById("time");
time.innerHTML = formattedDateTime ;
var greet = document.getElementById("alert");
greet.innerHTML = a ;
greet.textContent = formatDate;





    // else if(noonHours === hour) {
    // console.log("Good Afternoon",user);
    // }
    // else if(eveHours===hour){
    //     console.log("Good Evening",user);
    // }else if(nightHours===hour){
    //     console.log("Good Night",user);
    // }

