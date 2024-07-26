// hover animation 
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fade-in');
        }, index * 100); // Stagger animation timing
    });
});

// circle text 

const circleType = new CircleType(
    document.getElementById("rotated")
).radius(80);

$(window).scroll(function() {
    var offset = $(window).scrollTop();
    offset = offset * 0.4;

    $(".circular-text").css({
        "-moz-transform": "rotate(" + offset + "deg)",
        "-webkit-transform": "rotate(" + offset + "deg)",
        "-o-transform": "rotate(" + offset + "deg)",
        "-ms-transform": "rotate(" + offset + "deg)",
        transform: "rotate(" + offset + "deg)"
    });
});
