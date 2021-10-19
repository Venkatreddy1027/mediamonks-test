var responsiveSlider = function() {
// creating the variables
var slider = document.getElementById("slider");
var sliderWidth = slider.offsetWidth;
var slideList = document.getElementById("slideWrap");
var count = 1;
var items = slideList.querySelectorAll("li").length;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

window.addEventListener('resize', function() {
  sliderWidth = slider.offsetWidth;
});
var nextSlide = function() {
  //on clicking increasing slides if it is not a last slide
  if(count < items) {
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
  // on clicking next returning to first slide if it is last slide
  else if(count = items) {
    slideList.style.left = "0px";
    count = 1;
  }
};
var prevSlide = function() {
  // on clicking prev returning to next slide if it is first slide
  if(count > 1) {
    count = count - 2;
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
// on clicking prev returning to last slide if it is first slide
  else if(count = 1) {
    count = items - 1;
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
};
//next event listener
next.addEventListener("click", function() {
  nextSlide();
});
//prev event listener
prev.addEventListener("click", function() {
  prevSlide();
});
//setting time interval as 8000ms
setInterval(function() {
  nextSlide()
}, 8000);

};
//creating a onload event
window.onload = function() {
responsiveSlider();  
}