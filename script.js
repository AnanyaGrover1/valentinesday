$( document ).ready(function() {

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click( function() {
        open1();
    });


    function open1() {
        envelope.addClass("open")
           .removeClass("close");
    }



    var envelope2 = $('#envelope2');


    envelope2.click( function() {
        open2();
    });


    function open2() {
        envelope2.addClass("open")
           .removeClass("close");
    }


});