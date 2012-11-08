/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 11/7/12
 * Time: 7:06 PM
 * To change this template use File | Settings | File Templates.
 */


var can = document.querySelector('canvas');
var ctx = can.getContext('2d');


function smile() {
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(75, 75, 40, 0, Math.PI * 2 );
    ctx.fill();

    ctx.beginPath();
    ctx.arc(225, 75, 40, 0, Math.PI * 2 );
    ctx.fill();

    ctx.beginPath();
    ctx.arc(150, 180, 50, 0, Math.PI );
    ctx.stroke();
}

function smile_st(s, tx, ty) {
    ctx.save();
    ctx.scale(s, s);
    ctx.translate(tx, ty );
    smile();
    ctx.restore();
}

smile_st(0.5, 0, 0);
smile_st(0.5, 240, 0);
smile_st(0.5, 0, 240);
smile_st(0.5, 240, 240);
