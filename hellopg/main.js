/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 11/19/12
 * Time: 7:21 PM
 * To change this template use File | Settings | File Templates.
 */

function getContactsCount() {
    return 0;
}

window.onload = function() {
    window.addEventListener('deviceready', function() {
        alert('ready !');
        // find out how many contacts a user has
        var contacts = getContactsCount();

        var el = document.querySelector('#friends-number');
        el.innerHTML = contacts;
    });
};

