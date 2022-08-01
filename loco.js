const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

// Scroll update all pages

document.addEventListener("DOMContentLoaded", function () {
  function ScrollUpdateDelay() {
    setTimeout(function () {
      scroll.update();
    }, 500);
  }

  ScrollUpdateDelay();
});

// Scroll Update trigger

function ScrollUpdateTrig() {
  setTimeout(function () {
    scroll.update();
  }, 500);
}

document.addEventListener("lazyloaded", function () {
  locoScroll.update();
});

imagesLoaded(currentScrollContainer, { background: true }, function () {
  scroll.update();
});











