var images = ["airdrop.jpg", "airfield.jpg", "lonely.jpg", "woodenhouse.jpg"];
function GetImage() {
    return "Backgrounds/" + images[Math.floor(Math.random()*images.length)];
}

function SetImage(path) {
    document.getElementById("backpicture").src=path;
}

window.onload  = function() {
    SetImage(GetImage());
}
