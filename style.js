var id = 1;

function capturar(){
    if (id >=17) id = 1;
    var video = document.querySelector('video');
    var canvas = document.getElementById('canvas'+id);
    var context = canvas.getContext('2d');;

    var width, height;

    ratio = video.videoWidth / video.videoHeight;
	width = 210;
    height = parseInt(width / ratio);
	
    canvas.width = width;
	canvas.height = height;			

    context.fillRect(0, 0, width, height);
	context.drawImage(video, 0, 0, width, height);
    
    var currTime = video.currentTime;
    document.getElementById("time"+id).innerHTML = currTime.toFixed(2);
    id++;
}

function cambiar(obj){
    var imgId = obj.id;
    var videoSrc = document.querySelector('source');
    var videoSrcArray = document.querySelectorAll("source");
    var video = document.querySelector("video");
    var nameFile = videoSrc.getAttribute("src").split(".")[0];
    
    if (nameFile != imgId) {
        if (imgId == "video2") {
            videoSrcArray[0].setAttribute("src", imgId+".webm");
            videoSrcArray[1].setAttribute("src", imgId+".mp4");
            video.setAttribute("poster","video2.png");
        }         
        if (imgId == "mvi_2170") {
            videoSrcArray[0].setAttribute("src", imgId+".webm");
            videoSrcArray[1].setAttribute("src", imgId+".mp4");
            video.setAttribute("poster","video1.png");
        }
        video.load();
        //opcionalmente: se pude solo cambiar el poster y poner el video parado load() y después encender pinchando el botón play o bien se pude encender el video inmediatamente play()
        video.play();
    }
}