console.log("page loaded...");
function previewON(exampleVideo){
    exampleVideo.muted = true;
    exampleVideo.play();
}
function previewOFF(exampleVideo){
    exampleVideo.pause();
    exampleVideo.currentTime = 0;
}