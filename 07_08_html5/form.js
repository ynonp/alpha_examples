/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 11/5/12
 * Time: 6:12 PM
 * To change this template use File | Settings | File Templates.
 */


(function(global) {

    global.PForm = function(form) {
        var inputs = form.querySelectorAll('input');
        var form_id = 'pform-' + form.getAttribute('id');

        form.addEventListener('input', function() {
            var info = {};

            for ( var i=0; i < inputs.length; i++ ) {
                var key   = inputs[i].getAttribute('id');
                var value = inputs[i].value;

                info[key] = value;
            }
            console.dir(info);
            localStorage.setItem( form_id,
                JSON.stringify(info));
        });

        var info = JSON.parse(localStorage.getItem( form_id ));

        if ( info ) {
            for ( var i=0; i < inputs.length; i++ ) {
                var key   = inputs[i].getAttribute('id');
                var value = info[key];

                if ( value ) {
                    inputs[i].value = value;
                }
            }
        }


    };


}(this));