var capture = {
    getVideo: function(vid){
        alert('Grabado');
    },
    errorVideo: function(err){
        navigator.notification.alert('Error: '+err.code,null,'Lo Sentimos','Aceptar');
    },
    captureVideo: function(){
        window.plugins.videocaptureplus.captureVideo(capture.getVideo,capture.errorVideo,{
            duration:40,
            frontcamera: true
        });
    }
}