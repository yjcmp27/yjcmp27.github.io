document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector("[data-alma-gallery]");
  const dataElement = document.getElementById("alma-gallery-data");

  if (!gallery || !dataElement) {
    return;
  }

  let photos;

  try {
    photos = JSON.parse(dataElement.textContent);
  } catch (error) {
    console.error("Could not read Alma Maters gallery data.", error);
    return;
  }

  if (!Array.isArray(photos) || photos.length === 0) {
    return;
  }

  const image = gallery.querySelector(".alma-photo");
  const caption = gallery.querySelector(".alma-caption");
  const current = gallery.querySelector("[data-alma-current]");
  const total = gallery.querySelector("[data-alma-total]");
  const previousButton = gallery.querySelector(".alma-prev");
  const nextButton = gallery.querySelector(".alma-next");

  let index = 0;
  let touchStartX = null;

  function preloadImage(i) {
    if (i < 0 || i >= photos.length) {
      return;
    }

    const preload = new Image();
    preload.src = photos[i].src;
  }

  function render() {
    const photo = photos[index];

    image.src = photo.src;
    image.alt = photo.alt || photo.caption || `Photo ${index + 1}`;

    caption.textContent = photo.caption || "";

    current.textContent = index + 1;
    total.textContent = photos.length;

    previousButton.disabled = index === 0;
    nextButton.disabled = index === photos.length - 1;

    preloadImage(index - 1);
    preloadImage(index + 1);
  }

  function previousPhoto() {
    if (index > 0) {
      index -= 1;
      render();
    }
  }

  function nextPhoto() {
    if (index < photos.length - 1) {
      index += 1;
      render();
    }
  }

  previousButton.addEventListener("click", previousPhoto);
  nextButton.addEventListener("click", nextPhoto);

  document.addEventListener("keydown", function (event) {
    const activeElement = document.activeElement;
    const tagName = activeElement ? activeElement.tagName : "";

    if (
      tagName === "INPUT" ||
      tagName === "TEXTAREA" ||
      tagName === "SELECT"
    ) {
      return;
    }

    if (event.key === "ArrowLeft") {
      previousPhoto();
    }

    if (event.key === "ArrowRight") {
      nextPhoto();
    }
  });

  gallery.addEventListener(
    "touchstart",
    function (event) {
      touchStartX = event.changedTouches[0].screenX;
    },
    { passive: true }
  );

  gallery.addEventListener(
    "touchend",
    function (event) {
      if (touchStartX === null) {
        return;
      }

      const touchEndX = event.changedTouches[0].screenX;
      const difference = touchEndX - touchStartX;

      if (Math.abs(difference) > 50) {
        if (difference > 0) {
          previousPhoto();
        } else {
          nextPhoto();
        }
      }

      touchStartX = null;
    },
    { passive: true }
  );

  render();
});
