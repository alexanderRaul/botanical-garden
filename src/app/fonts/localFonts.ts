import localFont from 'next/font/local';

const lightFont = localFont({
  src: './NeueHaasDisplayLight.ttf',
  display: 'swap',
});

const mediumFont = localFont({
  src: './NeueHaasDisplayMediu.ttf',
  display: 'swap',
});

const romanFont = localFont({
  src: './NeueHaasDisplayRoman.ttf',
  display: 'swap',
});

const alpinaFine = localFont({
  src: './GT-Alpina-Fine-Standard-Light-Italic-Trial.otf'
});

export { lightFont, mediumFont, romanFont, alpinaFine };
