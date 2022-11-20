$(document).ready(function () {
    var current = 0;
    var setInterval;

    timer();
    function timer() {
        setIntervalId = setInterval(function () {
            var n = current + 1;
            if (n == 2) {
                n = 0;
            }
            move(n);
        }, 2000)
    }

    function move(i) {
        if (i == current) return;

        var currentEl = $('#profile_b .pic li').eq(current);

        var nextEl = $('#profile_b .pic li').eq(i);

        currentEl.css({ left: '0%' }).animate({ left: '-100%' });
        nextEl.css({ left: '100%' }).animate({ left: '0%' });
        current = i;
    }
});