/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 11/7/12
 * Time: 6:21 PM
 * To change this template use File | Settings | File Templates.
 */


var src = window.localStorage.getItem('img');

if ( src ) {
    document.querySelector('img').setAttribute('src', src);
} else {
    var img = new Image();
    img.setAttribute('src', 'http://sanaakosirickylee.files.wordpress.com/2012/02/tortoise.jpg');

    img.addEventListener('load', function() {
        var can = document.querySelector('canvas');
        var ctx = can.getContext('2d');
        ctx.drawImage(img, 0, 0);
        var data_url = can.toDataURL();

        window.localStorage.setItem('img', data_url);
        console.log( data_url );
    });
}