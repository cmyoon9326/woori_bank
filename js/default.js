$(document).ready(function(){
  var swiper = new Swiper(".slide1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".paging",
      clickable: true,
    },
    navigation: {
      nextEl: ".slide1 .next",
      // class 명은 단순화 하되 어디에 상속되어 있는지 표시해야 함
      prevEl: ".slide1 .prev",
    },
  });
})