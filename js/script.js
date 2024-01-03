$(document).ready(function () {
  var startBtn = $(".start-btn");
  var container = $(".container");
  var message = $(".message");
  var boxes = $(".box");
  var restBtn = $(".reset-btn");
  var winingPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  $(startBtn).click(function () {
    $(container).addClass("active");
  });

  $(restBtn).click(function () {
    turnO = true;
    btnCount = 0;
    enableBoxes();
    $(message).removeClass("active");
    $(restBtn).text("Reset Game");
    $(boxes).removeClass("active blue red");
  });

  var turnO = true;
  var btnCount = 0;
  $(boxes).click(function () {
    btnCount += 1;
    if (btnCount == 9) {
      showDraw();
    }
    if (turnO) {
      $(this).addClass("blue")  
      $(this).text("O");
      turnO = false;
    } else {
        $(this).addClass("red")  
      $(this).text("X");
      turnO = true;
    }
    $(this).prop("disabled", true);
    checkPattern();
  });

  function enableBoxes() {
    $(boxes).prop("disabled", false);
    $(boxes).text("");
  }

  function disableBoxes() {
    $(boxes).prop("disabled", true);
  }

  function showDraw() {
    $(message).addClass("active");
    $(message).text("Draw");
    console.log("draw");
  }
  function showWinner(winner) {
    $(message).addClass("active");
    $(message).text(`congratulations,Winner is ${winner}`);
    $(restBtn).text("New Game");
    disableBoxes();
  }

  function showGreen(a, b, c) {
    a.addClass("active");
    b.addClass("active");
    c.addClass("active");
  }

  function checkPattern() {
    for (var pattern of winingPattern) {
      var positionOne = $(boxes[pattern[0]]).text();
      var positionTwo = $(boxes[pattern[1]]).text();
      var positionThree = $(boxes[pattern[2]]).text();

      if (positionOne != "" && positionTwo != "" && positionThree != "") {
        if (positionOne == positionTwo && positionTwo == positionThree) {
          showGreen(
            $(boxes[pattern[0]]),
            $(boxes[pattern[1]]),
            $(boxes[pattern[2]])
          );
          //   hideGreen($(boxes[pattern[0]]),$(boxes[pattern[1]]),$(boxes[pattern[2]]))
          showWinner(positionOne);
        }
      }
    }
  }
});
