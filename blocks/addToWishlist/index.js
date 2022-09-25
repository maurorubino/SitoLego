function addToWishlist() {
  var element = document.getElementById("addToWishlist");
  element.classList.add("liked");
}

function removeToWishlist() {
  var element = document.getElementById("addToWishlist");
  element.classList.remove("liked");
}