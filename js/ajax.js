var send = {
    videoName: function(name){
        if(name.buttonIndex == 1){
            $('#chat').append('<span class="pending" rel="'+$('#chat').data('pending')+'">Respondiendo...</span>');
            $.ajax({
                type: 'POST',
                url: 'http://carlos.igitsoft.com/apps/test.php',
                // data to be added to query string:
                data: { nom: name.input1, tel: 'tel', mail: 'mail' },
                context: $('#chat .pending'),
                success: function(data){
                    if(data==1)
                        this.html('<a class="video" href="#" rel="'+this.attr('rel')+'">'+name.input1+'</a>');
                },
                error: function(xhr, type){
                    alert('Ajax error!')
                }
            })
        }
    }
}