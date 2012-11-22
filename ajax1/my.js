/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 11/21/12
 * Time: 6:51 PM
 * To change this template use File | Settings | File Templates.
 */


$(function() {
    var template = Handlebars.compile($('#tmpl-form').html());
    $.ajax({
        url: 'http://ajaxexample-ynonp.dotcloud.com/ex4/user',
        dataType: 'JSON',
        success: function(ctx) {
            var result = template(ctx);
            $('#main').html(result);
        },

        error: function(err) {
            alert('Oh no: ' + err);
        }
    })


}());