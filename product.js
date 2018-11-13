(function () {
    var scrollcounter = 0;
    // Function to scroll the background.
    function scroll() {
        if (scrollcounter === 2133) {
            scrollcounter = 0;
        }
        $("#ssbg").css("transform", "translate(" + -scrollcounter + "px)");
        $("#ssbg").css("-webkit-transform", "translate(" + -scrollcounter + "px)");
        $("#ssbg").css("-moz-transform", "translate(" + -scrollcounter + "px)");
        $("#ssbg").css("-ms-transform", "translate(" + -scrollcounter + "px)");
        $("#ssbg").css("-o-transform", "translate(" + -scrollcounter + "px)");
        scrollcounter += 1;
    }
    
     window.onload = function () {
        scroll = setInterval(scroll, 50);
    };
}());