import Vimeo from '@vimeo/player';
// import Player from '@vimeo/player';
console.log(Vimeo.prototype);
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
