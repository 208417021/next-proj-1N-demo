function myFunction(){
    var x = document.getElementById("myTopnav");
    console.log(x.className);

    if (x.className === "topnav") {
        x.className += " responsive";
        console.log(x.className);
    } else {
        x.className = "topnav";
    }
}