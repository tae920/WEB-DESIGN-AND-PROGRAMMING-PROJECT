// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $('.container').addClass('container-fluid').removeClass('container');
});

//var newSection = document.createElement('section');
//// Add the row class to this section to have Bootstrap 4x3 grid for 12 images

//newSection.className = 'row';
//newSection.style = 'padding: 20px 20px 20px 20px;';

//// Add 12 images to this new section with Bootstrap columns for responsive design

//var companyName = ["Alphabet (Google)", "Amazon", "Apple", "C3.AI", "DocuSign", "IBM", "Meta Platforms",
//    "MicronTechnology", "Microsoft", "Nvidia", "Oracle", "Siemens"];

//var companyImage = ["alphabet", "amazon", "apple", "c3ai", "docusign", "ibm", "metaplatforms",
//    "micron", "microsoft", "nvidia", "oracle", "siemens"];

//let lengthOfCom = companyName.length;

//var companyLink = ["Home/Companies/#google",
//    "Home/Companies/#amazon",
//    "Home/Companies/#apple",
//    "Home/Companies/#c3ai",
//    "Home/Companies/#docusign",
//    "Home/Companies/#ibm",
//    "Home/Companies/#metaplatforms",
//    "Home/Companies/#micron",
//    "Home/Companies/#microsoft",
//    "Home/Companies/#nvidia",
//    "Home/Companies/#oracle",
//    "Home/Companies/#siemens",
//];

//// Implement a function for adding an image to container element

//function addImage(container, imageFilename, imageCaption, imageLink) {
//    container.innerHTML +=
//        "<div class='col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6' style='padding-top: 0px;padding-bottom: 12px;'>" +
//        "   <a href= '" + imageLink + "'>" +
//        "<figure id='home12PicFig'>" +
//        "   <img width='100%' height='100%' src='files/images/companies/" + imageFilename + ".jpg' />" +
//        "   <figcaption id='home12PicFigCap'>" + imageCaption + "</figcaption>" +
//        "</figure></a>" +
//        "</div>";

//}



//for (var i = 0; i < lengthOfCom; i++) {
//    var imageFilename = companyImage[i];
//    var imageCaption = companyName[i];
//    var imageLink = companyLink[i];
//    addImage(newSection, imageFilename, imageCaption, imageLink);
//}

//// Add the new section to the body of the page

//var body = document.getElementById('12Companies');
//body.appendChild(newSection);
