function randomBG() {
  //const image = new Image();
  const images = ['BG/BG01_Big.png', 'BG/BG02_Big.png', 'BG/BG03_Big.png'];
  const chosenImg = images[Math.floor(Math.random() * images.length)];
  const bgImg = document.createElement('img');
  bgImg.classList.add('backImg');
  bgImg.src = `img/${chosenImg}`;

  document.body.append(bgImg);
}

randomBG();
