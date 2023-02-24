

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.ready().then(() =>{
    const savedTime = localStorage.getItem('lastPlayedTime');
    const initialTime = savedTime ? parseFloat(savedTime) : 0;
    player.setCurrentTime(initialTime);
});

window.addEventListener('beforeunload', () => {
    player.getCurrentTime().then((currentTime) => {
localStorage.setItem('lastPlayedTime', currentTime.toString());
    });
});

// player.on('play', function() {
//     console.log('played the video!');
// });

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });

// let lastPlayedTime = 0;
// iframe.addEventListener('timeupdate', () =>{
//     lastPlayedTime = iframe.currentTime;
// })
// document.addEventListener('beforeunload', () => {
//     localStorage.setItem('lastPlayedTime', lastPlayedTime);
// })
// document.addEventListener('load', () => {
//     const savedTime = localStorage.getItem('lastPlayedTime');
//     if (savedTime) {
//         iframe.currentTime = savedTime;
//     }
// })
