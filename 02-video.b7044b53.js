const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.ready().then((()=>{const e=localStorage.getItem("lastPlayedTime"),a=e?parseFloat(e):0;t.setCurrentTime(a)})),window.addEventListener("beforeunload",(()=>{t.getCurrentTime().then((e=>{localStorage.setItem("lastPlayedTime",e.toString())}))}));
//# sourceMappingURL=02-video.b7044b53.js.map
