/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 11/21/12
 * Time: 7:51 PM
 * To change this template use File | Settings | File Templates.
 */

(function(global) {
    var feed_the_fish = new global.models.Task({
        name: 'Feed My Fish'
    });


    var view = new global.views.TaskView({ model: feed_the_fish });

    var $el = view.render();

    $('#container').append($el);
}(this));
