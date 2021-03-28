alert("HEllO EVs LOVERS");

document.write('<P> Welcome to the site!</P>');


var drivingLicense = prompt("Do you have a driving licence?");

function driving(userLincense) {
    while (userLincense != "yes") {
        userLincense = prompt("You should have a driving License");
    }
}

driving(drivingLicense);


var favoritEV = prompt("what's your favorit EV? Choose between  Tesla, Ford Mach-E, Mercedes-Benz EQC");

function favorit(userFavorit) {
    while (!(userFavorit == "tesla" || userFavorit == "ford Mach-E" || userFavorit == "mercedes-Benz EQC")) {

        if (userFavorit === "tesla") {
            alert("press on first link");
        }
        else if (userFavorit === "ford Mach-E") { alert("press on second link"); }

        else if (userFavorit === "mercedes-Benz EQC") { alert("press on third link"); }
    }
}

favorit(favoritEV);



var rating = prompt("please rate our page from 1 to 5");


var getRating=function () {
    while (rating > 5) {
        rating = prompt("please rate our page from 1 to 5");
    }
    var ratingResult = "";
    var stars = "";
    if (rating >= 0) {
        var stars = '<img src="stars/star.png" width="25px">';
    }
    
    
    for (var i = 0; i < rating; i++) {
        ratingResult += stars
    }
    return ratingResult;
}





 document.write(getRating());

 