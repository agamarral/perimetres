

document.getElementById('myFirstButton').addEventListener('click', () => {
  alert('Acabes d\'escriure:' + document.getElementById('myText').value);
});

function initColorPicker() {
  const canvas = document.getElementById('colorCanvas');
  const canvasContext = canvas.getContext('2d');

  let gradient = canvas.getContext('2d').createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, '#ff0000');
  gradient.addColorStop(1 / 6, '#ffff00');
  gradient.addColorStop((1 / 6) * 2, '#00ff00');
  gradient.addColorStop((1 / 6) * 3, '#00ffff');
  gradient.addColorStop((1 / 6) * 4, '#0000ff');
  gradient.addColorStop((1 / 6) * 5, '#ff00ff');
  gradient.addColorStop(1, '#ff0000');
  canvas.getContext('2d').fillStyle = gradient;
  canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);

  gradient = canvas.getContext('2d').createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  canvas.getContext('2d').fillStyle = gradient;
  canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);

  gradient = canvas.getContext('2d').createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
  gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
  canvas.getContext('2d').fillStyle = gradient;
  canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);


  canvas.onclick = function(e) {
    console.log();
    const imgData = canvasContext.getImageData((e.offsetX / canvas.clientWidth) * canvas.width,
        (e.offsetY / canvas.clientHeight) * canvas.height, 1, 1);
    const rgba = imgData.data;
    const color = 'rgba(' + rgba[0] + ', ' + rgba[1] + ', ' + rgba[2] + ', ' + rgba[3] + ')';
    document.getElementById('myText').style.backgroundColor = color;
    console.log('%c' + color, 'color:' + color);
  };
}


initColorPicker();
