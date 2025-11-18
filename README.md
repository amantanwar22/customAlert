1) Trigger Point  
The alert is triggered at line 9 in app.js:

```js
$("#earnBtn").click(function() {
    showPointsAlert(20);
});
```

2) Function Called  
The function that actually shows the alert is at line 1 in app.js:

```js
function showPointsAlert(points) {
    $("#pointsAlert .msg").text("You earned " + points + " points!");
    $("#pointsAlert").fadeIn(300);

    setTimeout(function() {
        $("#pointsAlert").fadeOut(300);
    }, 4000);
}
```




