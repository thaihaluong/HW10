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
    var Leo={name: "Leo",desc: "Inspiring",img:"https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_leo.png"};
    var Aries = {name: "Aries",desc: "Obnoxious", img:"https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_aries.png"};
    var Taurus = {name:"Taurus",desc: "Steadfast", img: "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_taurus.png"};
    var Gemini = {name:"Gemini",desc: "Changeable", img: "http://www.mixbox365.com/wp-content/uploads/2016/10/az_img_horoscope_gemini.png"};
    var Cancer = {name: "Cancer",desc: "Loyal", img: "http://www.mixbox365.com/wp-content/uploads/2016/10/az_img_horoscope_cancer.png"};
    var Virgo = {name: "Virgo",desc: "Critical" ,img: "http://www.mixbox365.com/wp-content/uploads/2016/10/az_img_horoscope_virgo-1.png"};
    var Libra = {name:"Libra",desc: "Uninteresting", img: "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_libra.png"};
    var Scorpio = {name:"Scorpio",desc: "Overated" ,img: "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_scorpio.png"};
    var Sagittarius = {name:"Sagittarius",desc: "Disloyal", img: "http://cdn.playbuzz.com/cdn/65d8ccdc-a332-47a3-83bd-3483ed4bd102/c5765556-b365-468f-8061-74aff941cc20.png"};
    var Capricorn = {name:"Capricorn",desc: "Angelic", img: "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_capricorn.png"};
    var Aquarius = {name:"Aquarius",desc: "Genius", img: "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_aquarius.png"};
    var Pisces = {name:"Pisces",desc: "Underestimated" ,img: "http://cdn.playbuzz.com/cdn/65d8ccdc-a332-47a3-83bd-3483ed4bd102/66c582fd-e568-4444-94c2-bb802bc6a93c.png"};

    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value - 1;
    var year = document.getElementById("year").value;
    var date = new Date(year,month,day);
    //document.getElementById("result").innerHTML = makedate(year,8,23)
    //document.getElementById("try").innerHTML = date;
    if (makedate(year,7,23) <= date && date <= makedate(year,8,22)) {
       document.getElementById("result").innerHTML = Leo.name;
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

    /*else if (makedate(year-1,12,22) <= date && date <= makedate(year,1,19)) {
        document.getElementById("result").innerHTML = "Capricorn";
    }*/

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
    else {document.getElementById("result").innerHTML = "Capricorn";}


}

function getinfo() {

    var horo = document.getElementById("result").value ;
    document.getElementById("testing").innerHTML = horo;
    var Leo={name: "Leo",desc: "Inspiring",img:"https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_leo.png"};
    var Aries = {name: "Aries",desc: "Obnoxious", img:"https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_aries.png"};
    var Taurus = {name:"Taurus",desc: "Steadfast", img: "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_taurus.png"};
    var Gemini = {name:"Gemini",desc: "Changeable", img: "http://www.mixbox365.com/wp-content/uploads/2016/10/az_img_horoscope_gemini.png"};
    var Cancer = {name: "Cancer",desc: "Loyal", img: "http://www.mixbox365.com/wp-content/uploads/2016/10/az_img_horoscope_cancer.png"};
    var Virgo = {name: "Virgo",desc: "Critical" ,img: "http://www.mixbox365.com/wp-content/uploads/2016/10/az_img_horoscope_virgo-1.png"};
    var Libra = {name:"Libra",desc: "Uninteresting", img: "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_libra.png"};
    var Scorpio = {name:"Scorpio",desc: "Overated" ,img: "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_scorpio.png"};
    var Sagittarius = {name:"Sagittarius",desc: "Disloyal", img: "http://cdn.playbuzz.com/cdn/65d8ccdc-a332-47a3-83bd-3483ed4bd102/c5765556-b365-468f-8061-74aff941cc20.png"};
    var Capricorn = {name:"Capricorn",desc: "Angelic", img: "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_capricorn.png"};
    var Aquarius = {name:"Aquarius",desc: "Genius", img: "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_aquarius.png"};
    var Pisces = {name:"Pisces",desc: "Underestimated" ,img: "http://cdn.playbuzz.com/cdn/65d8ccdc-a332-47a3-83bd-3483ed4bd102/66c582fd-e568-4444-94c2-bb802bc6a93c.png"};

    var array = [Leo,Aries,Taurus,Gemini,Cancer,Virgo,Libra,Scorpio,Sagittarius,Capricorn,Aquarius,Pisces];


    var x;
    /*for (x=0;x<12;x++ ) {

        if (horo=array[x].name) {

            document.getElementById("desc").innerHTML = array[x].desc;
            document.getElementById("pic").setAttribute("src", array[x].img);
        }


    }*/

   document.getElementById("testing1").innerHTML = array[0].name;

}
