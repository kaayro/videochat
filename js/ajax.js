var send = {
    videoName: function(name){
        if(name.buttonIndex == 1){
            $('#chat').append('<span class="pending">Respondiendo...</span>');
            $.ajax({
                type: 'POST',
                url: 'http://carlos.igitsoft.com/apps/test.php',
                // data to be added to query string:
                data: { nom: name.input1, tel: 'tel', mail: 'mail' },
                success: function(data){
                    if(data==1)
                        $('#chat .pending').text(name.input1);
                },
                error: function(xhr, type){
                    alert('Ajax error!')
                }
            })
            alert(name.input1);
        }
    }
}