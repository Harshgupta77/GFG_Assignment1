const images = ['Image1.avif', 'Image2.avif', 'Image3.avif', 'Image4.avif'];
    let currentIndex = 0;

    const previousBtn = document.getElementById('prevbtn');
    const nextBtn = document.getElementById('nxtbtn');
    const image = document.getElementById('imgss');

    previousBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      image.src = images[currentIndex];
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      image.src = images[currentIndex];
    });







