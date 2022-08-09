function radioCheck() {
    var hire = document.getElementById('hiring');
    var label = document.getElementById('rate_label');
    var rate = document.getElementById('rate');

    if (hire.checked) {
        label.removeAttribute("hidden");
        rate.removeAttribute("hidden");
    } else {
        label.setAttribute("hidden", "hidden");
        rate.setAttribute("hidden", "hidden");
    }
}