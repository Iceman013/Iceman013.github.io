var effectButton;
var paintButton;
var canvas;
var context;

function init() {
  var image = document.getElementById('SourceImage');
  effectButton = document.getElementById('EffectButton');
  paintButton = document.getElementById('PaintButton');
  canvas = document.getElementById('Canvas');
  context = canvas.getContext('2d');
  
  // Set the canvas the same width and height of the image
  canvas.width = image.width;
  canvas.height = image.height;

  paintButton.addEventListener('click', function () {
    drawImage(image);
    // Or
    // var image = new Image();
    // image.onload = function () {
    //    drawImage(image);
    // }
    // image.src = 'image.jpg';
  });
  
  effectButton.addEventListener('click', addEffect);
}

function drawImage(image) {
  context.drawImage(image, 0, 0);
}

function addEffect() {
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    changeToWhite(imageData.data);
    context.putImageData(imageData, 0, 0);
}

function changeToWhite(data) {
  for (var i = 0; i < data.length; i++ ) {
    data[i] = 255;
  }
}

window.addEventListener('load', init);