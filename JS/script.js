/***Trigger Nav Modal***/

$('.logo-title img').click(function () {
  $('#nav-modal').fadeIn(500);
})

/***Trigger About Modal***/

$('.nav-item:nth-of-type(5)').click(function () {
  $('#about-modal').fadeIn(500);
})

/***About Modal Tabs***/

const tabs = document.querySelectorAll(".modal-tab");
const contents = document.querySelectorAll(".modal-tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    contents.forEach((content) => {
      content.classList.toggle("active", content.id === target);
    });
  });
});

//Close all modals

$('#about-close, #nav-close, #img-close').click(function (e) {
    e.preventDefault();
    $('#img-modal').fadeOut(500);
    $('#about-modal').fadeOut(500);
    $('#nav-modal').fadeOut(500);
});

/***Fade in Splash Screen on Load***/

function showDivInner() {
  $(".splash-inner").fadeIn(500);
}

$(document).ready(function () {
  const splashSeen = sessionStorage.getItem("splashSeen");

  if (!splashSeen) {
    // Show splash container
    $(".splash-container")
      .css("display", "flex")
      .hide()
      .fadeIn();

    // Delay inner content
    setTimeout(showDivInner, 2000);

    // When user proceeds
    $(".splash-close").on("click", function () {
      sessionStorage.setItem("splashSeen", "true");
      $(".splash-container").fadeOut();
    });
  } else {
    // Skip splash entirely
    $(".splash-container").hide();
  }
});


/***Close Splash Screen***/

$('.splash-close').click(function () {
    $('.splash-container').fadeOut(700);
})





