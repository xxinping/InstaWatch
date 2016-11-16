// ==UserScript==
// @name         XunpungWatch
// @namespace    https://github.com/xxinping/XunpungWatch
// @include      https://www.instagc.com/watch/*
// @updateURL    https://raw.githubusercontent.com/xxinping/InstaWatch/master/instawatch.user.js#bypass=true
// @version      0.1.3
// @description  xunpung's watcher
// @author       xi xinping, aka xunpung
// @grant        none
// @require      https://raw.githubusercontent.com/kamranahmedse/jquery-toast-plugin/bd761d335919369ed5a27d1899e306df81de44b8/dist/jquery.toast.min.js
// @require      https://raw.githubusercontent.com/Xunpung/xuntool/master/xuntool.js
// ==/UserScript==

function injectStylesheet(url) {
    $('head').append('<link rel="stylesheet" href="'+url+'" type="text/css" />');
}

(function() {
    'use strict';

    //inject jqtoast
    injectStylesheet("https://cdn.rawgit.com/kamranahmedse/jquery-toast-plugin/bd761d335919369ed5a27d1899e306df81de44b8/dist/jquery.toast.min.css");
    $.toast({
        text: 'The InstaWatcher script is running!<br>thanks to xi xinping<br><a target="_blank" href="https://google.com">Google</a>',
        heading: 'InstaWatcher (xx)', // Optional heading to be shown on the toast
        loader: true,
        loaderBg: '#9EC600',
        showHideTransition: 'slide', // fade, slide or plain
        allowToastClose: true, // Boolean value true or false
        hideAfter: 10000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
        stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
        position: 'top-right',
        bgColor: '#444444',
        textColor: '#eeeeee'
    });

    //wait a second, then expand everything
    $(document).ready(()=>{
        setTimeout(()=>{
            console.log("Everything should be loaded, clicking show --xi");
            $(".playlist-show").click();
        }, 1000);
    });

    let refreshTime = 32*60*1000;
    setTimeout(function () {
        location.reload();
    }, refreshTime);
})();
