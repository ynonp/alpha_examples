/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 11/7/12
 * Time: 6:21 PM
 * To change this template use File | Settings | File Templates.
 */


var img = new Image();
img.setAttribute('src', 'turtle.jpg');

img.addEventListener('load', function() {
    var can = document.querySelector('canvas');
    var ctx = can.getContext('2d');
    ctx.drawImage(img, 0, 0);

    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, 300, 20);
    ctx.fillRect(280, 0, 20, 300);
});