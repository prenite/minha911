$(document).ready(function () {
  var menu = $(".qnav > li");
  var contents = $("#wrap > div");

  //퀵메뉴 클릭시 해당 파트로 스크롤 이동
  //$(".nav> li").click(function (event) {
  //  event.preventDefault();

  //  var tg = $(this);
  //  var i = tg.index();

  //  var section = $("#wrap > div").eq(i);
  //  var tt = section.offset().top;

  //  $("html, body").stop().animate({ scrollTop: tt });
  //});

  //사이드메뉴 클릭시 해당 파트로 스크롤 이동
  $(".qnav> li").click(function (event) {
    event.preventDefault();

    var tg = $(this);
    var i = tg.index();

    var section = $("#wrap > div").eq(i);
    var tt = section.offset().top;

    $("html, body").stop().animate({ scrollTop: tt });
  });

  //마우스오버시 내비 글자 색깔 변경
  $(".qnav a").mouseover(function () {
    $(this).css({ color: "orangered" });
  });
  $(".qnav a").mouseleave(function () {
    $(this).css({ color: "white" });
  });

  //마우스오버시 퀵메뉴 글자 색깔 변경
  //$("#q_mn a").mouseover(function () {
  //  $(this).css({ color: "orangered" });
  //});
  //$("#q_mn a").mouseleave(function () {
  //  $(this).css({ color: "black" });
  //});

  //이미지 아래에서 나타남

  $(".img_box").delay(1000).stop().animate({ top: "-170", opacity: 1 });

  //메인 글자 서서히 나타남
  $("#main h2").fadeIn(2000, "linear");

  $("#main p").fadeIn(1000, "linear");

  $("#main h3").fadeIn(3000, "linear");

  //사이드메뉴 동적 기능
  var height = window.innerHeight,
    x = 0,
    y = height / 2,
    curveX = 10,
    curveY = 0,
    targetX = 0,
    xitteration = 0,
    yitteration = 0,
    menuExpanded = false;

  (blob = $("#blob")),
    (blobPath = $("#blob-path")),
    (hamburger = $(".hamburger"));

  $(this).on("mousemove", function (e) {
    x = e.pageX;

    y = e.pageY;
  });

  $(".hamburger, .menu-inner").on("mouseenter", function () {
    $(this).parent().addClass("expanded");
    menuExpanded = true;
  });

  $(".menu-inner").on("mouseleave", function () {
    menuExpanded = false;
    $(this).parent().removeClass("expanded");
  });

  function easeOutExpo(
    currentIteration,
    startValue,
    changeInValue,
    totalIterations
  ) {
    return (
      changeInValue *
        (-Math.pow(2, (-10 * currentIteration) / totalIterations) + 1) +
      startValue
    );
  }

  var hoverZone = 150;
  var expandAmount = 20;

  function svgCurve() {
    if (curveX > x - 1 && curveX < x + 1) {
      xitteration = 0;
    } else {
      if (menuExpanded) {
        targetX = 0;
      } else {
        xitteration = 0;
        if (x > hoverZone) {
          targetX = 0;
        } else {
          targetX = -(((60 + expandAmount) / 100) * (x - hoverZone));
        }
      }
      xitteration++;
    }

    if (curveY > y - 1 && curveY < y + 1) {
      yitteration = 0;
    } else {
      yitteration = 0;
      yitteration++;
    }

    curveX = easeOutExpo(xitteration, curveX, targetX - curveX, 100);
    curveY = easeOutExpo(yitteration, curveY, y - curveY, 100);

    var anchorDistance = 200;
    var curviness = anchorDistance - 40;

    var newCurve2 =
      "M60," +
      height +
      "H0V0h60v" +
      (curveY - anchorDistance) +
      "c0," +
      curviness +
      "," +
      curveX +
      "," +
      curviness +
      "," +
      curveX +
      "," +
      anchorDistance +
      "S60," +
      curveY +
      ",60," +
      (curveY + anchorDistance * 2) +
      "V" +
      height +
      "z";

    blobPath.attr("d", newCurve2);

    blob.width(curveX + 60);

    hamburger.css("transform", "translate(" + curveX + "px, " + curveY + "px)");

    $(".key").css("transform", "translateY(" + curveY + "px)");
    window.requestAnimationFrame(svgCurve);
  }

  window.requestAnimationFrame(svgCurve);
});
