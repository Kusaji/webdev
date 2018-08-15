IsPictureChanged = false;



function changePicture(event) {

    if (IsPictureChanged == false) {
        event.srcElement.src = "./img/kusajiLogo.png";
        IsPictureChanged = true;
    }
    else if (IsPictureChanged == true) {
        event.srcElement.src = "./img/zackPhoto.jpg";
        IsPictureChanged = false;
    }
}