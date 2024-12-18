var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  const nav = document.querySelector('#nav');
  const navBtn = document.querySelector('#nav-btn');
  const navBtnImg = document.querySelector('#nav-btn-img');
  
  navBtn.onclick = () => {
    if (nav.classList.toggle('open')){
      navBtnImg.src = './img/headerImg/backgroundHeader.png';
      document.body.classList.add('no-scroll'); // Блокировка скролла
    } else {
      navBtnImg.src = './img/headerImg/headerOpen.png';
      document.body.classList.remove('no-scroll'); // Разблокировка скролла
    }
  }