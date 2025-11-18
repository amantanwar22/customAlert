 function showPointsAlert(points) {
        $("#pointsAlert .msg").text("You earned " + points + " points!");
        $("#pointsAlert").fadeIn(300);
    setTimeout(function() {
            $("#pointsAlert").fadeOut(300);
    }, 4000);
    }

    $("#earnBtn").click(function(){
        showPointsAlert(20);
    });

   
    $("#pointsAlert .closeBtn").click(function(){
        $("#pointsAlert").fadeOut(300);
    });

    