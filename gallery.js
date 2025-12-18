// Lightbox Gallery JavaScript
(function () {
  "use strict";

  // Gallery data for each project
  const galleries = {
    account: {
      images: [
        {
          src: "./images/account/Screenshot 2025-12-18 100543.png",
          caption: "หน้า Login Page",
        },
        {
          src: "./images/account/Screenshot 2025-12-18 100624.png",
          caption: "หน้า Dashboard หลัก",
        },
        {
          src: "./images/account/Screenshot 2025-12-18 100636.png",
          caption: "Sidebar Navigation",
        },
        {
          src: "./images/account/ดีไซน์ที่ยังไม่ได้ตั้งชื่อ (1).png",
          caption: "Form เพิ่มสินค้า",
        },
        {
          src: "./images/account/ดีไซน์ที่ยังไม่ได้ตั้งชื่อ (2).png",
          caption: "Form เพิ่มลูกค้า",
        },
      ],
    },
    report: {
      images: [
        {
          src: "./images/report/Screenshot 2025-12-18 095555.png",
          caption: "รายงานยอดขายรายเดือน",
        },
        {
          src: "./images/report/Screenshot 2025-12-18 095641.png",
          caption: "รายงานลูกค้า",
        },
        {
          src: "./images/report/Screenshot 2025-12-18 095654.png",
          caption: "รายงานสินค้าขายดี",
        },
        {
          src: "./images/report/Screenshot 2025-12-18 095721.png",
          caption: "กราฟสรุปยอดขาย",
        },
        {
          src: "./images/report/ดีไซน์ที่ยังไม่ได้ตั้งชื่อ.png",
          caption: "Design Mockup",
        },
      ],
    },
  };

  let currentGallery = null;
  let currentIndex = 0;
  let lightbox = null;

  // Initialize when DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    createLightboxHTML();
    initGalleryClicks();
    initLightboxControls();
  });

  function createLightboxHTML() {
    const lightboxHTML = `
      <div class="lightbox" id="lightbox">
        <div class="lightbox__content">
          <button class="lightbox__close" aria-label="Close">&times;</button>
          <button class="lightbox__nav lightbox__nav--prev" aria-label="Previous">&#10094;</button>
          <img class="lightbox__image" src="" alt="">
          <button class="lightbox__nav lightbox__nav--next" aria-label="Next">&#10095;</button>
          <p class="lightbox__caption"></p>
          <span class="lightbox__counter"></span>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", lightboxHTML);
    lightbox = document.getElementById("lightbox");
  }

  function initGalleryClicks() {
    document.querySelectorAll(".gallery-item").forEach(function (item) {
      item.addEventListener("click", function () {
        const galleryName = this.dataset.gallery;
        const index = parseInt(this.dataset.index, 10);
        openLightbox(galleryName, index);
      });
    });
  }

  function initLightboxControls() {
    // Close button
    lightbox
      .querySelector(".lightbox__close")
      .addEventListener("click", closeLightbox);

    // Navigation buttons
    lightbox
      .querySelector(".lightbox__nav--prev")
      .addEventListener("click", function (e) {
        e.stopPropagation();
        navigateLightbox(-1);
      });

    lightbox
      .querySelector(".lightbox__nav--next")
      .addEventListener("click", function (e) {
        e.stopPropagation();
        navigateLightbox(1);
      });

    // Click outside to close
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("active")) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          navigateLightbox(-1);
          break;
        case "ArrowRight":
          navigateLightbox(1);
          break;
      }
    });
  }

  function openLightbox(galleryName, index) {
    currentGallery = galleries[galleryName];
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
    currentGallery = null;
  }

  function navigateLightbox(direction) {
    if (!currentGallery) return;

    currentIndex += direction;

    // Loop around
    if (currentIndex < 0) {
      currentIndex = currentGallery.images.length - 1;
    } else if (currentIndex >= currentGallery.images.length) {
      currentIndex = 0;
    }

    updateLightboxContent();
  }

  function updateLightboxContent() {
    if (!currentGallery) return;

    const image = currentGallery.images[currentIndex];
    const imgEl = lightbox.querySelector(".lightbox__image");
    const captionEl = lightbox.querySelector(".lightbox__caption");
    const counterEl = lightbox.querySelector(".lightbox__counter");

    imgEl.src = image.src;
    imgEl.alt = image.caption;
    captionEl.textContent = image.caption;
    counterEl.textContent = `${currentIndex + 1} / ${
      currentGallery.images.length
    }`;
  }
})();
