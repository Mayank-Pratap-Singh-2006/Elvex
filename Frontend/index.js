let like_status = "unliked";

function like_func() {
  const like_img = document.getElementById("like_btn");
  if (like_status === "unliked") {
    like_img.src = "assets/liked_icon.png"; 
    like_status = "liked";
  } else {
    like_img.src = "assets/like_icon.png"; 
    like_status = "unliked"; 
  }
}
