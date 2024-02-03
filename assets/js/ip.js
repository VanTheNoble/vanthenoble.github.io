// js for client ip address
$.getJSON("https://api.ipify.org?format=json",

function(data) {

    $("#usrip").html(data.ip);

})

setInterval(function() {
    const current = $('#blinker').html();
    $('#blinker').html(current === '_' ? '' : '_');
},500);


console.log('___________.__         ____   ____              ');
console.log('\\__    ___/|  |__   ___\\   \\ /   /____    ____  ');
console.log('  |    |   |  |  \\_/ __ \\   Y   /\\__  \\  /    \\ ');
console.log('  |    |   |   Y  \\  ___/\\     /  / __ \\|   |  \\');
console.log('  |____|   |___|  /\\___  >\\___/  (____  /___|  /');
console.log('                \\/     \\/             \\/     \\/ ');
console.log('    ________                                    ');
console.log('    \\______ \\   _______  __                     ');
console.log('     |    |  \\_/ __ \\  \\/ /                     ');
console.log('     |    `   \\  ___/\\   /                      ');
console.log(' /\\ /_______  /\\___  >\\_/                       ');
console.log(' \\/         \\/     \\/                           ');