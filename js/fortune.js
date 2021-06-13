const quotes = [
  `If you feel you are right, stand firmly by your convictions.`,
  `A short stranger will soon enter your life with blessings to share.`,
  `The man or woman you desire feels the same about you.`,
  `You will marry your lover.`,
  `You must try, or hate yourself for not trying.`,
];

const quote = document.querySelector('#fortune span:last-child');

const fortune = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = fortune;
