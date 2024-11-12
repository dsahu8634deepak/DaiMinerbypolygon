// -----------------------------------------include Header--------------------------------
$(function () {
    $("#header").load("layout/header.html");
    $("#footer").load("layout/footer.html");
});
//****************************************** */ include Header****************************


//---------------------------------------- use it header color change---------------------
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 70) {
            $(".NavbarMain").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".NavbarMain").removeClass("active");
        }
    });
});
//*****************************************/ header color change****************************
$('.slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1.3
        },
        600: {
            items: 2
        },
        1000: {
            items: 1
        }
    }
})
//  -----------------------------------Time -------------------------------------------------------
var second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

var startTime = localStorage.getItem('startTime');
if (!startTime) {
    startTime = new Date().getTime();
    localStorage.setItem('startTime', startTime);
}

var x = setInterval(function () {
    var now = new Date().getTime(),
        elapsed = now - startTime;

    document.getElementById('days').innerText = Math.floor(elapsed / (day)),
        document.getElementById('hours').innerText = Math.floor((elapsed % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((elapsed % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((elapsed % (minute)) / second);

}, second);
// copy text
document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copyButton');
    const addressInput = document.getElementById('addressInput');

    copyButton.addEventListener('click', function () {
        // Select the text in the input field
        addressInput.select();
        addressInput.setSelectionRange(0, 99999); /*For mobile devices*/

        // Copy the selected text
        document.execCommand('copy');

        // Deselect the text
        addressInput.setSelectionRange(0, 0);

        // Alert the user that the text has been copied (optional)
        alert('Copied the text: ' + addressInput.value);
    });
});

// 

var fm = new FluidMeter();
fm.init({
    targetContainer: document.getElementById("fluid-meter"),
    fillPercentage: 15 // 15%
});


// **********************************************************
    var fm = new FluidMeter();
    fm.init({
        targetContainer: document.getElementById("fluid-meter"),
    fillPercentage: 15,
    options: {
        fontFamily: "Raleway",
    drawPercentageSign: false,
    drawBubbles: true,
    size: 300,
    borderWidth: 19,
    backgroundColor: "#e2e2e2",
    foregroundColor: "#fafafa",
    foregroundFluidLayer: {
        fillStyle: "purple",
    angularSpeed: 100,
    maxAmplitude: 12,
    frequency: 30,
    horizontalSpeed: -150
    },
    backgroundFluidLayer: {
        fillStyle: "pink",
    angularSpeed: 100,
    maxAmplitude: 9,
    frequency: 30,
    horizontalSpeed: 150
    }
  }
});

    var fm2 = new FluidMeter();
    fm2.init({
        targetContainer: document.getElementById("fluid-meter-2"),
    fillPercentage: 75,
    options: {
        fontFamily: "Oxygen",
    drawPercentageSign: true,
    drawBubbles: true,
    size: 300,
    borderWidth: 10,
    backgroundColor: "#262626",
    foregroundColor: "#4C4A4A",
    foregroundFluidLayer: {
        fillStyle: "#55DD10",
    angularSpeed: 90,
    maxAmplitude: 11,
    frequency: 25,
    horizontalSpeed: -200
    },
    backgroundFluidLayer: {
        fillStyle: "#CDDD10",
    angularSpeed: 100,
    maxAmplitude: 13,
    frequency: 23,
    horizontalSpeed: 230
    }
  }
});

    var fm3 = new FluidMeter();
    fm3.init({
        targetContainer: document.getElementById("fluid-meter-3"),
    fillPercentage: 45,
    options: {
        fontSize: "30px",
    drawPercentageSign: true,
    drawBubbles: false,
    size: 300,
    borderWidth: 19,
    backgroundColor: "#e2e2e2",
    foregroundColor: "#fafafa",
    foregroundFluidLayer: {
        fillStyle: "#16E1FF",
    angularSpeed: 30,
    maxAmplitude: 5,
    frequency: 30,
    horizontalSpeed: -20
    },
    backgroundFluidLayer: {
        fillStyle: "#4F8FC6",
    angularSpeed: 100,
    maxAmplitude: 3,
    frequency: 22,
    horizontalSpeed: 20
    }
  }
});

    window.onload = function () {
        document.getElementById("submit-percentage-1").onclick = function () {
            fm.setPercentage(Number(document.getElementById('percentage-1').value))
        }
  document.getElementById("submit-percentage-2").onclick = function () {
        fm2.setPercentage(Number(document.getElementById('percentage-2').value))
    }
    document.getElementById("submit-percentage-3").onclick = function () {
        fm3.setPercentage(Number(document.getElementById('percentage-3').value))
    }
};



// ******************************
