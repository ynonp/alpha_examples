/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 11/7/12
 * Time: 6:02 PM
 * To change this template use File | Settings | File Templates.
 */


var can = document.querySelector('canvas');
var ctx = can.getContext('2d');

ctx.strokeStyle = 'red';
ctx.lineWidth = 10;

ctx.strokeRect(10, 10, 80, 80);

ctx.beginPath();
ctx.moveTo( 100, 100 );
ctx.lineTo( 200, 200 );
ctx.stroke();

var images = document.querySelectorAll('img');
for ( var i=0; i < images.length; i++ ) {
    images[i].setAttribute('src', can.toDataURL());
}
