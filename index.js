var searchUsers = document.querySelector("#search-users"),
  users = document.querySelectorAll(".user"),
  usersData = document.querySelectorAll(".comment"),
  searchVal;
searchUsers.addEventListener("keyup", function () {
  searchVal = this.value.toLowerCase();
  for (var i = 0; i < users.length; i++) {
    if (
      !searchVal ||
      usersData[i].textContent.toLowerCase().indexOf(searchVal) > -1
    ) {
      users[i].style["display"] = "flex";
    } else {
      users[i].style["display"] = "none";
    }
  }
});

// Search Bar & Toggle
$(".search").on("click", function () {
  $(".search-users").toggle("display: inline-block");
});

//Video play
$(".video")
  .parent()
  .click(function () {
    if ($(this).children(".video").get(0).paused) {
      $(this).children(".video").get(0).play();
      $(this).children(".playpause").fadeOut();
    } else {
      $(this).children(".video").get(0).pause();
      $(this).children(".playpause").fadeIn();
    }
  });
