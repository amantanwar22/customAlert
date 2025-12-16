1) Trigger Point  
The alert is triggered at line 9 in app.js:

```js
$("#earnBtn").click(function() {
    pointsAlert("You earned 20 points!");
});
```

2) Function Called  
The function that actually shows the alert is at line 1 in app.js:

```js
function pointsAlert(message, duration = 4000) {
    $("#pointsAlert .msg").text(message);
    $("#pointsAlert").fadeIn(300);

    setTimeout(function () {
        $("#pointsAlert").fadeOut(300);
    }, duration);
}
```




