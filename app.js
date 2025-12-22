function pointsAlert(message, imageUrl = null, duration = 4000) {
    $("#pointsAlert .msg").text(message);

    if (imageUrl) {
        $("#pointsAlert .alertImage")
            .attr("src", imageUrl)
            .show();
    } 
    else {
        $("#pointsAlert .alertImage").hide();
    }

    $("#pointsAlert").fadeIn(300);

    setTimeout(function () {
        $("#pointsAlert").fadeOut(300);
    }, duration);
}

$("#earnBtn").click(function () {
    pointsAlert(
        "You earned 20 points!",
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
    );
});

$("#pointsAlert .closeBtn").click(function () {
    $("#pointsAlert").fadeOut(300);
});


