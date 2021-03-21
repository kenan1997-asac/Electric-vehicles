alert ("HEllO EVs LOVERS");

var drivinglicense= prompt ("Do you have a driving licence?");
while (drivinglicense!= "yes"){
    drivinglicense=prompt("You should have a driving License");  
}

var favoritEV= prompt ("what's your favorit EV? Choose between  Tesla, Ford Mach-E, Mercedes-Benz EQC");


while (!(favoritEV== "tesla" || favoritEV== "ford Mach-E" || "favoritEV== mercedes-Benz EQC")){

if (favoritEV==="tesla"){
    alert("press on first link");
}
else if (favoritEV==="ford Mach-E")
{alert("press on second link");}

else if (favoritEV==="mercedes-Benz EQC"){alert("press on third link");} }

document.write('<P> Welcome to the site!</P>');


var rating= prompt("please rate our page from 1 to 5");
while (rating>5){
    rating=prompt("please rate our page from 1 to 5");
}
var ratingResult="";
var stars="";
if (rating>=0){
var stars = '<img src="stars/star.png" width="250px">';}


for(var i=0;i<rating;i++){
    ratingResult+=stars
}

document.write(ratingResult);