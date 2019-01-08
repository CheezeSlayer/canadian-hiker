function setCanvasHead(headerID) {
  var hcanvas = document.getElementById(headerID);
  $("#canvasHead").text($(hcanvas).text());
  console.log(headerID);
  console.log(hcanvas);
}

var modal;
var imgZoom;
var arr;

function loadCanvas(canvasJSON) {
  arr = [];
  $.getJSON(`/json/${canvasJSON}.json`, function(data) {
    $.each(data.hikes, function(index, value) {
      arr.push(data.hikes[index].imgSrc);
    });
    console.log(arr.length);
    console.log(arr);
  });
}

function setCanvas(canvasID) {
  setTimeout( function() {
    while( document.getElementById("imgCanvas").firstChild ) {
      document.getElementById("imgCanvas").removeChild(document.getElementById("imgCanvas").firstChild);
    }
    console.log("canvas cleared");

    modal = document.getElementById("imgModal");
    imgZoom = document.getElementsByClassName("imgModal-content")[0];

    for ( i = 0; i < arr.length; i++ ) {
      var newImg = document.createElement("IMG");
      newImg.setAttribute("src", `/images/portfolio/${canvasID}/${arr[i]}`);
      newImg.setAttribute("width", "600");
      newImg.setAttribute("height", "auto");
      newImg.setAttribute("id", arr[i]);
      console.log(newImg.src);
      document.getElementById("imgCanvas").appendChild(newImg);
      newImg.onclick = function() {
        modal.style.display = "block";
        imgZoom.src = this.src;
      }
    }
  }, 30);
}

function extZoom() {
  modal.style.display = "none";
}

function openCanvas() {
  document.getElementById("overlay").style.width = "100%";
}

function closeCanvas() {
  document.getElementById("overlay").style.width = "0%";
}
