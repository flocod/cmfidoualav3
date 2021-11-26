$(window).bind("beforeunload", function () {
  $(body).css("overflow", "hidden");
  $(".loading_container").css("display", "flex");
});

$(window).on("load", function () {
  $(".loading_container").css("display", "none");

  $("body").css("overflow-y", "auto");
});

// Toggle language button
$("#toggle_lang").bind("click", function () {
  $("#toggle_lang_switch").toggleClass("active");
  temp_text = $(".toggle_lang_box__text").text();
  if (temp_text == "EN") {
    $(".toggle_lang_box__text").text("FR");
  } else {
    $(".toggle_lang_box__text").text("EN");
  }
});

// select actual page
$(".navigation li").bind("click", function () {
  $(".navigation li").removeClass("active");
  $(this).addClass("active");
});

// Toggle language button script
//   Full heigth carousel
Window_height = $(window).innerHeight();

if (Window_height <= 500) {
  $("#home_carousel").css("height", "540px");
} else {
  $("#home_carousel").css("height", Window_height + "px");
}

$("#close_new_letter_box").bind("click", function () {
  $("#close_new_letter_box").parent().css("display", "none");
});

//************** 3d animation*/
function anime3d(element) {
  // to animate  block element and also all child's element....
  $("body").on("mousemove", function (t) {
    let vertical = -($(window).innerWidth() / 2 - t.pageX) / 100,
      horizontal = ($(window).innerHeight() / 2 - t.pageY) / 100;
    $(element).attr(
      "style",
      "transform:rotateX(" +
        vertical +
        "deg) rotateY(" +
        horizontal +
        "deg) translateX(" +
        vertical +
        "px) translateY(" +
        horizontal +
        "px)"
    );
  });
}

function pro_anime3d(element) {
  // to animate only a block element....
  const box = document.querySelector(element);
  const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
  const THRESHOLD = 15;

  function handleHover(e) {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    box.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
  }

  function resetStyles(e) {
    box.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  }

  if (!motionMatchMedia.matches) {
    box.addEventListener("mousemove", handleHover);
    box.addEventListener("mouseleave", resetStyles);
  }
}

//  cacher et montrer l'element after du side menu au scroll.......
let progress_state;
$(document).ready(function () {
  totalheight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function () {
    progress = (window.pageYOffset / totalheight) * 100;
    progress = Math.round(Number(progress));
    progress = progress + "%";
    vertical_menu = $("#vertical_menu");

    if (progress_state < progress) {
      vertical_menu.addClass("vertical_menu_after");
      console.log("scroll to bottom");
    } else if (window.pageYOffset == 0) {
      vertical_menu.removeClass("vertical_menu_after");
    }
    progress_state = progress;
  };
});

state_carousel = 0;
images = $("#home_carousel_images img");
textes = $(".carousel_slider__struct--carous_text");
image1 = $(".carousel_image1");
image2 = $(".carousel_image2");
image3 = $(".carousel_image3");
image4 = $(".carousel_image4");

text1 = $(".carousel_text1");
text2 = $(".carousel_text2");
text3 = $(".carousel_text3");
text4 = $(".carousel_text4");

function carousel_right() {
  if (state_carousel == 0) {
    images.removeClass("active");
    textes.removeClass("active");
    image1.addClass("active");
    text1.addClass("active");

    state_carousel = 1;
  } else if (state_carousel == 1) {
    images.removeClass("active");
    textes.removeClass("active");
    image2.addClass("active");
    text2.addClass("active");
    state_carousel = 2;
  } else if (state_carousel == 2) {
    images.removeClass("active");
    textes.removeClass("active");
    image3.addClass("active");
    text3.addClass("active");
    state_carousel = 3;
  } else if (state_carousel == 3) {
    images.removeClass("active");
    textes.removeClass("active");
    image4.addClass("active");
    text4.addClass("active");
    state_carousel = 0;
  }
}

function carousel_left() {
  if (state_carousel == 3) {
    state_carousel = 1;
    carousel_right();
  } else if (state_carousel == 2) {
    state_carousel = 0;
    carousel_right();
  } else if (state_carousel == 1) {
    state_carousel = 3;
    carousel_right();
  } else if (state_carousel == 0) {
    state_carousel = 2;
    carousel_right();
  }
}

// setInterval(carousel_right, 2000);

$(document).on("click", ".control_carousel_right", carousel_right);

$(document).ready(function () {
  $(".control_carousel_left").bind("click", function () {
    carousel_left();
  });
});

$(document).ready(function () {
  owltype1 = $(".owltype1");
  owltype1.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    autoplay: true,
    margin: 10,
    responsive: {
      459: {
        items: 1,
      },
      600: {
        items: 2,
      },
      769: {
        items: 3,
      },
      1041: {
        items: 4,
      },
    },
  });

  $(".owltype1_btn_left").click(function () {
    owltype1.trigger("prev.owl.carousel");
  });

  $(".owltype1_btn_right").click(function () {
    owltype1.trigger("next.owl.carousel");
  });
});

$(document).ready(function () {
  owl_bookstore = $(".owl_bookstore");

  owl_bookstore.owlCarousel({
    items: 1,
    loop: true,
    center: true,
    nav: false,
    autoplay: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      517: {
        items: 2,
      },

      809: {
        items: 3,
      },
      1079: {
        items: 4,
      },
      1289: {
        items: 5,
      },
    },
  });

  $(".owl_bookstore_btn_left").click(function () {
    owl_bookstore.trigger("prev.owl.carousel");
  });

  $(".owl_bookstore_btn_right").click(function () {
    owl_bookstore.trigger("next.owl.carousel");
  });
});

$(document).ready(function () {
  owl_prayer1 = $(".owl_prayer1");

  owl_prayer1.owlCarousel({
    items: 1,
    loop: true,
    center: true,
    nav: false,
    autoplay: true,
    margin: 10,
    responsive: {
      515: {
        items: 1,
      },
      600: {
        items: 2,
      },
      785: {
        items: 3,
      },
      1161: {
        items: 4,
      },
      1419: {
        items: 5,
      },
    },
  });

  $(".owl_prayer_btn_left1").click(function () {
    owl_prayer1.trigger("prev.owl.carousel");
  });

  $(".owl_prayer_btn_right1").click(function () {
    owl_prayer1.trigger("next.owl.carousel");
  });
});

$(document).ready(function () {
  owl_prayer2 = $(".owl_prayer2");

  owl_prayer2.owlCarousel({
    items: 1,
    loop: true,
    center: true,
    nav: false,
    autoplay: true,
    margin: 10,
    responsive: {
      515: {
        items: 1,
      },
      600: {
        items: 2,
      },
      785: {
        items: 3,
      },
      1161: {
        items: 4,
      },
      1419: {
        items: 5,
      },
    },
  });
  1;

  $(".owl_prayer_btn_left2").click(function () {
    owl_prayer2.trigger("prev.owl.carousel");
  });

  $(".owl_prayer_btn_right2").click(function () {
    owl_prayer2.trigger("next.owl.carousel");
  });
});

$(document).ready(function () {
  rtv_owl = $(".rtv_owl");

  rtv_owl.owlCarousel({
    items: 1,
    loop: true,
    center: true,
    nav: false,
    autoplay: false,
    margin: 10,
    responsive: {
      600: {
        items: 1,
      },
      1415: {
        items: 2,
      },
    },
  });

  $(".rtv_owl_btn_left").click(function () {
    rtv_owl.trigger("prev.owl.carousel");
  });

  $(".rtv_owl_btn_right").click(function () {
    rtv_owl.trigger("next.owl.carousel");
  });
});

$(document).ready(function () {
  partner_owl = $(".partner_owl");

  partner_owl.owlCarousel({
    items: 1,
    loop: true,
    center: true,
    nav: false,
    autoplay: true,
    margin: 10,
    responsive: {
      423: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1123: {
        items: 4,
      },
      1319: {
        items: 5,
      },
    },
  });
});

$(document).ready(function () {
  owl_verset = $(".owl_verset");

  owl_verset.owlCarousel({
    items: 1,
    loop: true,
    center: true,
    nav: false,
    autoplay: true,
    margin: 10,
  });
});

$(document).ready(function () {
  owl_categorie = $(".owl_categorie");

  owl_categorie.owlCarousel({
    items: 1,
    loop: true,
    center: true,
    nav: false,
    autoplay: true,
    margin: 10,
    responsive: {
      600: {
        items: 1,
      },
      603: {
        items: 2,
      },
      855: {
        items: 3,
      },
      1143: {
        items: 4,
      },
      1371: {
        items: 5,
      },
    },
  });

  $(".btn_owl_categorie_left").click(function () {
    owl_categorie.trigger("prev.owl.carousel");
  });

  $(".btn_owl_categorie_right").click(function () {
    owl_categorie.trigger("next.owl.carousel");
  });
});

$("#btn_menu").click(function () {
  $(".mob_menu").toggleClass("mob_menu_active");
});

// language system
$(document).ready(function () {
  $(".lang_system").on("click", function () {
    $(".lang_system .after").fadeToggle("fast");
  });

  $(".lang_system .after").on("click", function () {
    temp_lang = $(".lang_active .text").text();
    $(".lang_active .text").text($(this).text());
    $(this).text(temp_lang);

    if (temp_lang == "FR") {
      $(".flag .FR").fadeOut();
      $(".flag .EN").fadeIn();
    } else {
      $(".flag .FR").fadeIn();
      $(".flag .EN").fadeOut();
    }
  });
});


