  (function () {
    const header = document.querySelector('.header');
    const burger = document.querySelector('.burger');
    const navList = document.getElementById('nav-list');

    // открытие/закрытие меню
    burger.addEventListener('click', () => {
      const isOpen = header.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(isOpen));
      document.documentElement.classList.toggle('no-scroll', isOpen);
    });

    // закрывать по клику на ссылку
    navList.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        header.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        document.documentElement.classList.remove('no-scroll');
      }
    });

    // тень при прокрутке
    const onScroll = () => {
      header.style.boxShadow = (window.scrollY > 2)
        ? '0 2px 12px rgba(0,0,0,.06)'
        : 'none';
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
  })();

  document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".gallery__button");
  const grid = document.querySelector(".gallery__grid");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox_img");
  const lightboxClose = document.querySelector(".lightbox_close");

  // Показать ещё
  btn.addEventListener("click", () => {
    grid.classList.toggle("show");
    if (grid.classList.contains("show")) {
      btn.textContent = "Скрыть";
    } else {
      btn.textContent = "Показать ещё";
    }
  });

  // Открыть картинку в лайтбоксе
  grid.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  // Закрыть лайтбокс
  lightboxClose.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Закрытие по клику вне картинки
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  // Закрытие по Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.style.display = "none";
    }
  });
});

const video = document.getElementById('myVideo');
  const btn = document.getElementById('playPauseBtn');

  btn.addEventListener('click', () => {
    if(video.paused){
      video.play();
      btn.textContent = '❚❚'; // Иконка паузы
    } else {
      video.pause();
      btn.textContent = '▶️'; // Иконка play
    }
  });

  // Автосмена кнопки при клике на видео
  video.addEventListener('click', () => {
    if(video.paused){
      video.play();
      btn.textContent = '❚❚';
    } else {
      video.pause();
      btn.textContent = '▶️';
    }
  });

  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const consent = form.consent.checked;

    if (!name || !phone) {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    if (!consent) {
      alert('Пожалуйста, дайте согласие на обработку данных.');
      return;
    }

    // Здесь можно добавить отправку через fetch/AJAX
    alert('Форма успешно отправлена!');

    form.reset();
  });
