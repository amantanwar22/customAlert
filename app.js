function pointsAlert(message, duration = 4000) {
    $("#pointsAlert .msg").text(message);
    $("#pointsAlert").fadeIn(300);

    setTimeout(function () {
        $("#pointsAlert").fadeOut(300);
    }, duration);
}

$("#earnBtn").click(function () {
    pointsAlert("You earned 20 points!");
});

$("#pointsAlert .closeBtn").click(function () {
    $("#pointsAlert").fadeOut(300);
});


