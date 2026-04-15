document.addEventListener('DOMContentLoaded', function() {
    bottonActive();
    configEditor();
    console.log(2);
});

function bottonActive() {
    var currentPage = document.body.getAttribute('data-page')
    var links = document.querySelectorAll('[data-page-link]')
    
    links.forEach(function (link) {
        if (link.getAttribute('data-page-link') === currentPage) {
            link.classList.add('active-link');
        }
    });
}


       
function configEditor() {
    if (!window.APP_CONFIG) return;
    var publishLinks = document.querySelectorAll('[data-role="publish-link"]')
    var viewLinks = document.querySelectorAll('[data-role="view-link"]')

    publishLinks.forEach(function (link) {
        link.href= window.APP_CONFIG.publishLinks;
    });
    viewLinks.forEach(function (link) {
        link.href= window.APP_CONFIG.viewLink;
    });
}

function configEditor() {
    if (!window.APP_CONFIG) return;
    var highlight = document.getElementsByClassName('highlight')
    var days = document.getElementsByClassName('days')
    var dollar = document.getElementsByClassName('dollar')
    var option = window.APP_CONFIG.

}