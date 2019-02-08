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
  return new Promise(function(resolve, reject) {
    arr = [];
    $.getJSON(`/json/${canvasJSON}.json`, function(data) {
      if(data != null && data != undefined)
      {
        $.each(data.hikes, function(index, value) {
          arr.push(data.hikes[index].imgSrc);
        });
        resolve("Canvas Loaded");
      } else {
        reject(Error("No content to load"));
      }
      //console.log(arr.length);
      //console.log(arr);
    });
  })

}

function setCanvas(canvasID) {
  return new Promise(function(resolve, reject) {
    modal = document.getElementById("imgModal");
    imgZoom = document.getElementsByClassName("imgModal-content")[0];
    console.log(arr.length);
    if(arr.length > 0){
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
      resolve("Canvas Set");
    } else {
      reject("No canvas to set");
    }
  })
}

function extZoom() {
  modal.style.display = "none";
}

function openCanvas(canvasName) {
  loadCanvas(canvasName)
  .then(function(value){
    console.log("Loading Canvas:...");
    console.log("Status: ", value);
    return(setCanvas(canvasName))
  })
  .then(function(value){
    console.log("Setting Canvas:...");
    console.log("Status: ", value);
  })
  .then(function(){
    return true;
  })
  .catch(function(error){
    console.log(error);
    return false;
  })
  document.getElementById("overlay").style.width = "100%";
}

function closeCanvas() {
  document.getElementById("overlay").style.width = "0%";
  while( document.getElementById("imgCanvas").firstChild ) {
    document.getElementById("imgCanvas").removeChild(document.getElementById("imgCanvas").firstChild);
  }
}
