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
            limit: 1,
            duration: 40,
            highquality: true,
            frontcamera: true,
            // you'll want to sniff the useragent/device and pass the best overlay based on that.. assuming iphone here
            portraitOverlay: '',
            landscapeOverlay: ''
        });
    }
}