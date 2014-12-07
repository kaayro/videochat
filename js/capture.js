var capture = {
    getVideo: function(vid){
        alert('Grabado');
    },
    errorVideo: function(err){
        navigator.notification.alert('Error: '+err.code,null,'Lo Sentimos','Aceptar');
    },
    captureVideo: function(){
        navigator.device.capture.captureVideo(capture.getVideo,capture.errorVideo,{duration:140});
    }
}