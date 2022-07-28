/*
    Template Name: Bugrio - Creative Personal Portfolio Template
    Description: Bugrio - Creative Personal Portfolio Template
    Version: 1.0
*/

/*============================
   js index
==============================
    0. Pre loader
    1. Menu Bg
    2. Animated Headline, ajax contact form
    3. Protfolio Masonary & Filter
    4. Filter Active
    5. Magnific Popup
    6. svg play icon animation
    7. Banner video popup
    8. Slide Menu Animation
    9. Content Animation
==========================================*/

(function ($) {
  "use strict";
  $(document).ready(function () {
    /*================================
    0. Pre loader
    ==================================*/
    $(window).on("load", function () {
      $("#preloader-area").fadeOut();
      $("#preloader").delay(35).fadeOut("slow");
      $("body").delay(35).css({
        "overflow-y": "visible",
      });
    });
    $("#preloaderclose").click(function () {
      $("#preloader").css("display", "none");
    });
    /*================================
    1. Menu Bg 
    ==================================*/
    window.onscroll = () => {
      noMenuBg();
    };
    var header = document.querySelector(".header-area");
    var sticky = header.offsetTop;
    function noMenuBg() {
      if (window.pageYOffset > sticky) {
        header.classList.add("addBackground");
      } else {
        header.classList.remove("addBackground");
      }
    }

    /*================================
    2. Animated Headline
    ==================================*/
    $(".bannerSkil").animatedHeadline({
      animationType: "push",
    });

    /*================================
    3. Protfo Masonary & filter
    ==================================*/
    $("#protfo-masonary").imagesLoaded(function () {
      // filter items on button click
      $(".protfo-filter").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      });
      // init Isotope
      var $grid = $(".protfo-masonary-area").isotope({
        itemSelector: ".protfo-grid",
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: ".protfo-grid",
        },
      });
    });

    /*================================
    4. Filter Active
    ==================================*/
    $(".protfo-filter button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });

    /*================================
    5. Magnific Popup
    ==================================*/
    $(".protfo-popup-view").magnificPopup({
      type: "ajax",
      alignTop: true,
      overflowY: "scroll",
      gallery: {
        enabled: true,
      },
    });

    /*================================
    6. svg play icon animation
    ==================================*/
    let playBtnlineDrawing = anime({
      targets: ".svgPath path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 3500,
      delay: function (el, i) {
        return i * 250;
      },
      direction: "alternate",
      loop: true,
    });

    /*================================
    7. Banner video popup
    ==================================*/
    $(".banner-popup-video").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
    /*================================
    8. Slide Menu Animation
    ==================================*/
    let btn = document.querySelector(".menuOpen");
    // menu icon animation
    let barIconOne = () => {
      let barIcon1 = anime({
        targets: ".bar-icon span:first-child",
        rotate: 45,
        direction: "alternate",
        loop: false,
      });
    };
    let barIconOneBack = () => {
      let barIcon1 = anime({
        targets: ".bar-icon span:first-child",
        rotate: 0,
        direction: "alternate",
        loop: false,
      });
    };
    let barIcon2 = anime({
      targets: ".bar-icon span:nth-child(2)",
      width: 10,
      duration: 500,
      direction: "alternate",
      loop: true,
    });

    // svgTwoArea
    let svgTwoArea = () => {
      let svgTwoPositionAnimate = anime({
        targets: ".svg-two-area",
        right: [{ value: "-260px" }, { value: "-160px" }, { value: 0 }],
        top: [{ value: 0 }],
        easing: "linear",
        duration: 2000,
      });
    };
    let svgTwoAreaBack = () => {
      let svgTwoPositionAnimateBack = anime({
        targets: ".svg-two-area",
        right: [{ value: "-160px" }, { value: "-260px" }, { value: "-460px" }],
        top: [{ value: "-394.1px" }],
        easing: "linear",
        duration: 2000,
      });
    };

    // svgThreeArea
    let svgThreeArea = () => {
      let svgThreePositionAnimate = anime({
        targets: ".svg-three-area",
        left: [{ value: "-260px" }, { value: "-160px" }, { value: 0 }],
        bottom: [{ value: 0 }],
        easing: "linear",
        duration: 2000,
      });
    };

    let svgThreeAreaBack = () => {
      let svgThreePositionAnimateBack = anime({
        targets: ".svg-three-area",
        left: [{ value: "-160px" }, { value: "-260px" }, { value: "-460px" }],
        bottom: [{ value: "-394.1px" }],
        easing: "linear",
        duration: 2000,
      });
    };

    // svgOneIntro
    let svgOneIntro = () => {
      let svgOneIntroPosition = anime({
        targets: ".svg-one-area",
        left: {
          value: "105%",
          duration: 100,
          easing: "easeInOutSine",
        },
        transition: {
          value: "1.5s",
        },
      });
    };
    let svgOneIntroBack = () => {
      let svgOneIntroPosition = anime({
        targets: ".svg-one-area",
        left: {
          value: "-100%",
          duration: 85,
          easing: "easeInOutSine",
        },
        transition: {
          value: "3.5s",
        },
      });
    };

    // menuDivIntro
    let menuDivIntro = () => {
      let menuDivIntroDiv = anime({
        targets: ".menu-area",
        left: {
          value: "0%",
          duration: 75,
        },
        transition: {
          value: "1.75s",
        },
      });
    };
    let menuDivIntroBack = () => {
      let menuDivIntroDivBack = anime({
        targets: ".menu-area",
        left: {
          value: "-100%",
          duration: 55,
        },
        transition: {
          value: "1.85s",
        },
      });
    };

    // menu Intro animation
    let menuIntroItem = () => {
      let menuIntro = anime.timeline({
        targets: ".menu-list-area li",
        delay: function (el, i) {
          return i * 100;
        },
        easing: [0.91, -0.54, 0.29, 1.56],
        direction: "alternate",
        loop: false,
      });

      menuIntro
        .add({
          translateX: 1,
          duration: -1,
        })
        .add({
          translateX: 0,
          duration: 1,
        });
    };
    let menuIntroItemBack = () => {
      let menuIntroBack = anime.timeline({
        targets: ".menu-list-area li",
        delay: function (el, i) {
          return i * 100;
        },
        easing: [0.91, -0.54, 0.29, 1.56],
        direction: "alternate",
        loop: false,
      });

      menuIntroBack
        .add({
          translateX: 0,
          duration: -1,
        })
        .add({
          translateX: "-50em",
          duration: 1,
        });
    };

    // menu Hide Show animation
    let menuHideShowFunction = () => {
      let menuHideShow = anime.timeline({
        targets: ".menu-list-area li",
        delay: function (el, i) {
          return i * 200;
        },
        easing: [0.91, -0.54, 0.29, 1.56],
        direction: "alternate",
        loop: 1,
      });

      menuHideShow
        .add({
          opacity: 1,
        })
        .add({
          opacity: 0,
        });
    };

    let menuHideShowFunctionBack = () => {
      let menuHideShowBack = anime.timeline({
        targets: ".menu-list-area li",
        delay: function (el, i) {
          return i * 200;
        },
        easing: [0.91, -0.54, 0.29, 1.56],
        direction: "alternate",
        loop: 1,
      });

      menuHideShowBack
        .add({
          opacity: 0,
        })
        .add({
          opacity: 1,
        });
    };

    // when click on menu icon then work animation strat
    var flag = true;
    btn.onclick = () => {
      if (flag) {
        menuClickAnimation();
        flag = false;
      } else {
        menuClickAnimationBack();
        flag = true;
      }
    };
    let menuClickAnimation = function () {
      var menuClickAnimationTimeline = anime.timeline({});
      menuClickAnimationTimeline
        // .add({
        //     targets: setTimeout(barIconClassChange, 0)
        // })
        .add({
          targets: setTimeout(menuDivIntro, 100),
        })
        .add({
          targets: setTimeout(svgOneIntro, 0),
        })
        .add({
          targets: setTimeout(svgTwoArea, 400),
        })
        .add({
          targets: setTimeout(svgThreeArea, 400),
        })
        .add({
          targets: setTimeout(menuIntroItem, 1500),
        })
        .add({
          targets: setTimeout(menuHideShowFunction, 1600),
        })
        .add({
          targets: setTimeout(barIconOne, 1600),
        });
      var promise = menuClickAnimationTimeline.finished.then(() => {
        // you can add extra animation
      });
    };
    let menuClickAnimationBack = function () {
      var menuClickAnimationTimelineBack = anime.timeline({});
      menuClickAnimationTimelineBack
        .add({
          targets: setTimeout(menuHideShowFunctionBack, 0),
        })

        .add({
          targets: setTimeout(menuIntroItemBack, 0),
        })

        .add({
          targets: setTimeout(svgTwoAreaBack, 0),
        })

        .add({
          targets: setTimeout(svgThreeAreaBack, 0),
        })

        .add({
          targets: setTimeout(svgOneIntroBack, 60),
        })

        .add({
          targets: setTimeout(menuDivIntroBack, 280),
        })

        .add({
          targets: setTimeout(barIconOneBack, 280),
        });
    };

    /*================================
    8. Content Animation
    ==================================*/

    /*
    Use .fetch() to load in new html snippets. A function then removes the old HTML and adds
    the new ones in the correct position in the DOM. Animate the whole thing in and out.
    */

    // select all link by id
    let logoAjax = document.querySelector("#logo-ajax");
    let bannerAjax = document.querySelector("#banner-ajax");
    let aboutAjax = document.querySelector("#about-ajax");
    let serviceAjax = document.querySelector("#service-ajax");
    let clientAjax = document.querySelector("#client-ajax");
    let contactAjax = document.querySelector("#contact-ajax");
    let happiAjax = document.querySelector("#happi-ajax");
    let skillsAjax = document.querySelector("#skills-ajax");
    let protofoAjax = document.querySelector("#protofo-ajax");
    let brandAjax = document.querySelector("#brand-ajax");
    let priceAjax = document.querySelector("#pricing-ajax");
    let contactoAjax = document.querySelector("#contacto-ajax");
    let happiTAjax = document.querySelector("#happi-ajaxT");
    let skillsTAjax = document.querySelector("#skills-ajaxT");
    let protofoTAjax = document.querySelector("#protofo-ajaxT");
    let brandATjax = document.querySelector("#brand-ajaxT");
    let layoutArray = [
      logoAjax,
      bannerAjax,
      aboutAjax,
      serviceAjax,
      clientAjax,
      contactAjax,
      happiAjax,
      skillsAjax,
      protofoAjax,
      brandAjax,
      priceAjax,
      contactoAjax,
      happiTAjax,
      skillsTAjax,
      protofoTAjax,
      brandATjax,
    ];
    layoutArray.forEach((eachLink) => {
      eachLink.addEventListener("click", (e) => {
        switch (eachLink) {
          case logoAjax:
            fetchPage(eachLink, "ajaxcontent/banner.html");
            break;
          case bannerAjax:
            fetchPage(eachLink, "ajaxcontent/banner.html");
            break;
          case aboutAjax:
            fetchPage(eachLink, "ajaxcontent/about.html");
            break;
          case serviceAjax:
            fetchPage(eachLink, "ajaxcontent/service.html");
            break;
          case clientAjax:
            fetchPage(eachLink, "ajaxcontent/client.html");
            break;
          case priceAjax:
            fetchPage(eachLink, "ajaxcontent/price.html");
            break;
          case happiAjax:
            fetchPage(eachLink, "ajaxcontent/happiness.html");
            break;
          case skillsAjax:
            fetchPage(eachLink, "ajaxcontent/skill.html");
            break;
          case protofoAjax:
            fetchPage(eachLink, "ajaxcontent/protfolio.html");
            break;
          case brandAjax:
            fetchPage(eachLink, "ajaxcontent/brand.html");
            break;
          case contactAjax:
            fetchPage(eachLink, "ajaxcontent/contact.html");
            break;
          case contactoAjax:
            fetchPage(eachLink, "ajaxcontent/contact.html");
            break;
          case skillsTAjax:
            fetchPage(eachLink, "ajaxcontent/skill.html");
            break;
          case protofoTAjax:
            fetchPage(eachLink, "ajaxcontent/protfolio.html");
            break;
          case brandATjax:
            fetchPage(eachLink, "ajaxcontent/brand.html");
            break;
          case happiTAjax:
            fetchPage(eachLink, "ajaxcontent/happiness.html");
            break;
        }
      });
    });

    function fetchPage(link, page) {
      flag = true;
      let baseURL = `${window.location.protocol}//${window.location.hostname}`;

      if (window.location.port) {
        baseURL += `:${window.location.port}`;
      }

      fetch(`${baseURL}/${page}`)
        .then(function (response) {
          return response.text();
        })
        .then(function (html) {
          let doc = new DOMParser().parseFromString(html, "text/html");
          anime({
            targets: setTimeout(menuClickAnimationBack, 0),
          });
          anime({
            targets: ".page-content-area *",
            translateX: 700,
            opacity: 0,
            easing: "easeInCirc",
            duration: 700,
            complete: (anim) => {
              document.querySelector(".page-content-area").remove();
            },
          });
          setTimeout(function () {
            document
              .querySelector("body")
              .insertBefore(
                doc.querySelector(".ajax-content-add"),
                document.querySelector(".yes")
              );

            /*================================
                        2. Animated Headline, ajax contact form
                    ==================================*/
            $(".bannerSkil").animatedHeadline({
              animationType: "push",
            });
            // ajax contact form
            $(".contactform").on("submit", function () {
              $(".output_message").text("Loading...");
              $(".contactform").find(".output_message").addClass("loading");
              var form = $(this);
              $.ajax({
                url: form.attr("action"),
                method: form.attr("method"),
                data: form.serialize(),
                success: function (result) {
                  if (result == "success") {
                    $(".contactform")
                      .find(".output_message")
                      .addClass("success");
                    $(".output_message").text("Message Sent!");
                  } else {
                    $(".contactform").find(".output_message").addClass("error");
                    $(".output_message").text("Error Sending!");
                  }
                },
              });

              return false;
            });
            /*================================
                    3. Protfo Masonary & filter
                    ==================================*/
            $("#protfo-masonary").imagesLoaded(function () {
              // filter items on button click
              $(".protfo-filter").on("click", "button", function () {
                var filterValue = $(this).attr("data-filter");
                $grid.isotope({ filter: filterValue });
              });
              // init Isotope
              var $grid = $(".protfo-masonary-area").isotope({
                itemSelector: ".protfo-grid",
                percentPosition: true,
                masonry: {
                  // use outer width of grid-sizer for columnWidth
                  columnWidth: ".protfo-grid",
                },
              });
            });
            /*================================
                    4. Filter Active
                    ==================================*/
            $(".protfo-filter button").on("click", function (event) {
              $(this).siblings(".active").removeClass("active");
              $(this).addClass("active");
              event.preventDefault();
            });
            /*================================
                    5. Magnific Popup
                    ==================================*/
            $(".protfo-popup-view").magnificPopup({
              type: "ajax",
              alignTop: true,
              overflowY: "scroll",
              gallery: {
                enabled: true,
              },
            });
            anime({
              targets: ".ajax-content-add",
              translateX: [-600, 0],
              delay: (el, i) => 100 * i,
              opacity: [0, 1],
              easing: "easeInOutSine",
            });
            /*================================
                    7. Banner video popup
                    ==================================*/
            $(".banner-popup-video").magnificPopup({
              disableOn: 700,
              type: "iframe",
              mainClass: "mfp-fade",
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false,
            });
          }, 700);
        });
    }
  });
})(jQuery);
