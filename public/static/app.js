$(document).ready(function (){

    const socket = io.connect('http://localhost:1337');

    socket.on('res', (data) => {
        $('#amount').empty();
        $('#amount').html(data.donation)
    })

    $('#give').click(function() {
        socket.emit('give')
    })
    socket.on('update', function(data) {
        $('#amount').empty();
        $('#amount').html(data.donation)
    })

    $('#take').click(function() {
        socket.emit('take')
    })

    socket.on('update', function(data) {
        $('#amount').empty();
        $('#amount').html(data.donation)
    })
});