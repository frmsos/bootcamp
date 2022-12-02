
function addLike(_queryElement){
    var element = document.querySelector(_queryElement);
    var likeCount = element.innerText;
    likeCount++;
    element.innerText = likeCount;
}