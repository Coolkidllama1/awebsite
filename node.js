let touchHandler = function(event) {
    let x = 0, y = 0;
  
    if (event.touches && event.touches[0]) {
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
    } else if (event.originalEvent && event.originalEvent.changedTouches[0]) {
        x = event.originalEvent.changedTouches[0].clientX;
        y = event.originalEvent.changedTouches[0].clientY;
    } else if (event.clientX && event.clientY) {
        x = event.clientX;
        y = event.clientY;
    }
  
    document.getElementById('x').innerHTML = x;
    document.getElementById('y').innerHTML = y;
  }
  
  window.addEventListener('touchstart', touchHandler, false);
  window.addEventListener('touchmove', touchHandler, false);
  window.addEventListener('touchend', touchHandler, false);