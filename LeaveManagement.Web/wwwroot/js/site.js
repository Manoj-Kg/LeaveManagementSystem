$(function () {


    var galleryImage = $(".gallery").find("img").first();

 
    var images = [
        "images/image2.png",
        "images/leave-management.png",
        "images/image4.png",
        "images/corporateleave.png"        
        
    ];


    var i = 0;

    var galleryImage = $(".gallery").find("img")
    galleryImage.on("click", switchToNextImage);

    function switchToNextImage() {
        i = (i + 1) % images.length;
        galleryImage.fadeOut(function () {
            galleryImage.attr("src", images[i]).fadeIn();
        });
    }

});

function logEvent() {
    console.log("Mouse was clicked");
}
