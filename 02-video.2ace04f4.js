!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.ready().then((function(){var e=localStorage.getItem("lastPlayedTime"),n=e?parseFloat(e):0;t.setCurrentTime(n)})),window.addEventListener("beforeunload",(function(){t.getCurrentTime().then((function(e){localStorage.setItem("lastPlayedTime",e.toString())}))}))}();
//# sourceMappingURL=02-video.2ace04f4.js.map
