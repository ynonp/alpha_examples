/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 11/21/12
 * Time: 7:45 PM
 * To change this template use File | Settings | File Templates.
 */


(function(global) {

    global.views = global.views || {};


    global.views.TaskView = Backbone.View.extend({
        tagName: 'div',

        render: function() {
            var result = this.template( this.model.toJSON() );
            this.$el.html( result );
            return this.$el;
        },

        template: Handlebars.compile($('#tmpl-task').html())
    });

}(this));