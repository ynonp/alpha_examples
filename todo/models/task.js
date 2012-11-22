/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 11/21/12
 * Time: 7:38 PM
 * To change this template use File | Settings | File Templates.
 */

(function(global) {

    global.models = global.models || {};


    global.models.Task = Backbone.Model.extend({
        defaults: {
            name: 'Unknown Task',
            done: false
        }
    });

    var t = new global.models.Task();






}(this));