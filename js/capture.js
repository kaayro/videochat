var capture = {
    getVideo: function(vid){
        $('#chat').data('pending',vid[0].fullPath);
        navigator.notification.prompt('Nombre del Video',send.videoName,'Nombre',['Nombrar','Cancelar']);
    },
    errorVideo: function(err){
        navigator.notification.alert('Error: '+err.code,null,'Lo Sentimos','Aceptar');
    },
    captureVideo: function(){
        window.plugins.videocaptureplus.captureVideo(capture.getVideo,capture.errorVideo,{
            duration:40,
            frontcamera: false
        });
    }
}