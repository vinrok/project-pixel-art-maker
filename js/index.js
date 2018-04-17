$(".title").slideUp({ duration: 5000, easing: "easeInOutQuart" });

function makeGrid() {
  // Select size input
    var height = $("#inputHeight").val();
    var width = $("#inputWeight").val();
  
    for (var i = 1; i <= height; i++) {
         let str = "";
        for (var j = 1; j <= width; j++) {         
          str += '<td></td>';
        }
      $('#pixelCanvas').append('<tr>' + str + '</tr>');
    }
}

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function (event) {
    event.preventDefault();
    $("#pixelCanvas").empty();
    makeGrid();

});

// Select color input
$("#pixelCanvas").on("click", "td", function () {
    var col = $("#colorPicker").val();
    $(this).css('background-color', col);
});

// undo colour selection
$("#pixelCanvas").on("dblclick", "td", function () {
    $(this).css('background-color', "");
});

// To reset table
$("input[type=reset]").click(function () {
    $("#pixelCanvas").empty();
    var height = $("#inputHeight").val(1);
    var width = $("#inputWeight").val(1);
});