/**
 * Created by Admin on 12/19/2016.
 */
//alert("Hello Jane!");

//console.log("This is a log");

var welcomeTag = document.getElementById("welcome");

welcomeTag.innerHTML= "Welcome C4E7";


function makedate(y,m,d) {

    return new Date(y,(m-1),d)

}

function getDOB() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value - 1;
    var year = document.getElementById("year").value;
    var date = new Date(year,month,day);
    //document.getElementById("result").innerHTML = makedate(year,8,23)
    //document.getElementById("try").innerHTML = date;
    if (makedate(year,7,23) <= date && date <= makedate(year,8,22)) {
       document.getElementById("result").innerHTML = "Leo";
    }
    else if (makedate(year,8,23) <= date && date <= makedate(year,9,22)) {
        document.getElementById("result").innerHTML = "Virgo";
    }
    else if (makedate(year,9,23) <= date && date <= makedate(year,10,22)) {
        document.getElementById("result").innerHTML = "Libra";
    }
    else if (makedate(year,10,23) <= date && date <= makedate(year,11,21)) {
        document.getElementById("result").innerHTML = "Scorpio";
    }

    else if (makedate(year,11,22) <= date && date <= makedate(year,12,21)) {
        document.getElementById("result").innerHTML = "Sagittarius";
    }

    else if (makedate(year-1,12,22) <= date && date <= makedate(year,1,19)) {
        document.getElementById("result").innerHTML = "Capricorn";
    }

    else if (makedate(year,1,20) <= date && date <= makedate(year,2,18)) {
        document.getElementById("result").innerHTML = "Aquarius";
    }

    else if (makedate(year,2,19) <= date && date <= makedate(year,3,20)) {
        document.getElementById("result").innerHTML = "Pisces";
    }

    else if (makedate(year,3,21) <= date && date <= makedate(year,4,19)) {
        document.getElementById("result").innerHTML = "Aries";
    }

    else if (makedate(year,4,20) <= date && date <= makedate(year,5,20)) {
        document.getElementById("result").innerHTML = "Taurus";
    }

    else if (makedate(year,5,21) <= date && date <= makedate(year,6,20)) {
        document.getElementById("result").innerHTML = "Gemini";
    }

    else if (makedate(year,6,21) <= date && date <= makedate(year,7,22)) {
        document.getElementById("result").innerHTML = "Pisces";
    }

}

var horo = document.getElementById("result").value;
    document.getElementById("test").innerHTML=horo;
//function getinfo() {

   // var horo = document.getElementById("result").value;
  //  document.getElementById("test").innerHTML=horo;
//}

