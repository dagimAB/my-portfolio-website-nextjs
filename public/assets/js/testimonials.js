document.addEventListener("DOMContentLoaded", function () {
  // Toggle author info on mobile
  document.querySelectorAll(".author-toggle").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const item = e.currentTarget.closest(".testimonial-item");
      if (!item) return;
      const left = item.querySelector(".testimonial-left");
      if (!left) return;
      // toggle visibility by changing display
      if (left.style.display === "block" || left.style.display === "") {
        left.style.display = "none";
        e.currentTarget.textContent = "Show Info";
      } else {
        left.style.display = "block";
        e.currentTarget.textContent = "Hide Info";
      }
    });
  });

  // Initialize Swiper for testimonials explicitly (in case default init didn't run)
  try {
    const container = document.querySelector(".testimonials .init-swiper");
    if (container && typeof Swiper !== "undefined") {
      const configEl = container.querySelector(".swiper-config");
      let config = {
        loop: true,
        speed: 600,
        autoplay: { delay: 5000 },
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        breakpoints: {
          768: { slidesPerView: 2, spaceBetween: 20 },
          1200: { slidesPerView: 3, spaceBetween: 30 },
        },
      };
      if (configEl) {
        try {
          const userConfig = JSON.parse(configEl.innerHTML.trim());
          // normalize slidesPerView if set to a string like "auto"
          if (userConfig.slidesPerView === "auto") {
            userConfig.slidesPerView = "auto";
          }
          config = Object.assign(config, userConfig);
        } catch (e) {
          /* ignore */
        }
      }
      // destroy previous instance if any
      if (container.swiper && typeof container.swiper.destroy === "function") {
        container.swiper.destroy(true, true);
      }

      // If slidesPerView set to 'auto' ensure CSS allows auto sizing (handled in CSS file)
      try {
        // eslint-disable-next-line no-undef
        const instance = new Swiper(container, config);
        // expose to DOM for debugging
        container.swiper = instance;
      } catch (e) {
        console.error("Swiper instantiation failed", e);
      }
    }
  } catch (err) {
    console.error("Swiper init error", err);
  }
});
// Run initializer immediately and when DOM becomes ready (safe for Next.js Script ordering)
(function initTestimonials() {
  function attachToggleHandlers() {
    document.querySelectorAll(".author-toggle").forEach(function (btn) {
      if (btn._hasListener) return;
      btn._hasListener = true;
      btn.addEventListener("click", function (e) {
        const item = e.currentTarget.closest(".testimonial-item");
        if (!item) return;
        const left = item.querySelector(".testimonial-left");
        if (!left) return;
        // toggle visibility by changing display
        if (left.style.display === "block" || left.style.display === "") {
          left.style.display = "none";
          e.currentTarget.textContent = "Show Info";
        } else {
          left.style.display = "block";
          e.currentTarget.textContent = "Hide Info";
        }
      });
    });
  }

  function initSwiperInstance() {
    try {
      const container = document.querySelector(".testimonials .init-swiper");
      if (!container || typeof Swiper === "undefined") return;

      const configEl = container.querySelector(".swiper-config");
      let config = {
        loop: true,
        speed: 600,
        autoplay: { delay: 5000 },
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        breakpoints: {
          768: { slidesPerView: 2, spaceBetween: 20 },
          1200: { slidesPerView: 3, spaceBetween: 30 },
        },
      };

      if (configEl) {
        try {
          const userConfig = JSON.parse(configEl.innerHTML.trim());
          if (userConfig.slidesPerView === "auto") {
            userConfig.slidesPerView = "auto";
          }
          Object.assign(config, userConfig);
        } catch (e) {
          /* ignore invalid JSON */
        }
      }

      if (container.swiper && typeof container.swiper.destroy === "function") {
        container.swiper.destroy(true, true);
      }

      // eslint-disable-next-line no-undef
      const instance = new Swiper(container, config);
      container.swiper = instance;
    } catch (err) {
      console.error("Swiper init error", err);
    }
  }

  // If DOM is already ready, run now; otherwise listen
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    attachToggleHandlers();
    initSwiperInstance();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      attachToggleHandlers();
      initSwiperInstance();
    });
  }

  // Also attempt init after a short delay in case scripts load late
  setTimeout(function () {
    attachToggleHandlers();
    initSwiperInstance();
  }, 800);
})();
