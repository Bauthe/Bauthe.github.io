var HTML = document.querySelector("html");

//setting up the home button
var homeButton = document.getElementById("homeButton");
homeButton.addEventListener("click", function(){location.assign("index.html");});

//setting up the icon links
var github = document.getElementById("githubLink");
github.addEventListener("click", function(){location.assign("https://github.com/Bauthe");});
github.addEventListener("mouseenter", function(){github.setAttribute("src", "assets/imgs/icons/github-grey.png");});
github.addEventListener("mouseleave", function(){github.setAttribute("src", "assets/imgs/icons/github-white.png");});

var linkedin = document.getElementById("linkedinLink");
linkedin.addEventListener("click", function(){location.assign("https://www.linkedin.com/in/baudouin-th%C3%A9obald-01aa22181/");});
linkedin.addEventListener("mouseenter", function(){linkedin.setAttribute("src", "assets/imgs/icons/linkedin-grey.png");});
linkedin.addEventListener("mouseleave", function(){linkedin.setAttribute("src", "assets/imgs/icons/linkedin-white.png");});