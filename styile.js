window.addEventListener('scroll', function () {
    const images = document.querySelectorAll('.parallax-image');
    const scrollY = window.scrollY;

    images.forEach((img, index) => {
      // كل صورة تتحرك بسرعة مختلفة
      const speed = (index + 1) * 0.3; // غيّر الرقم حسب التأثير المطلوب
      img.style.transform = translateY(${scrollY * speed}px);
    });
  });