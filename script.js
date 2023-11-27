let hambugerMenu = false;
function hamburger(){
    if (!hambugerMenu){
    document.getElementById("menu").style.display = "inherit";
    document.getElementById("hamburger").src = "imgs/close.png";
    hambugerMenu = true;
    } else {
        document.getElementById("menu").style.display = "none";

        document.getElementById("hamburger").src = "imgs/Hamburger_icon.png";
        hambugerMenu = false;
    }
}