const list = document.getElementsByClassName("inner");
var mousePosition;
var offset = [0, 0];
var isDown = false;

for (let idx = 0; idx < list.length; idx++) {
  const element = list[idx];
  const action = element.nextElementSibling;
  const actionWidth = action.clientWidth;
  action.style.right = -1 * actionWidth + "px";

  element.addEventListener(
    "mousedown",
    function (e) {
      isDown = true;
      offset = [element.offsetLeft - e.clientX, element.offsetTop - e.clientY];
      offset = [element.offsetLeft - e.clientX, element.offsetTop - e.clientY];
    },
    true
  );

  element.addEventListener(
    "mouseup",
    function () {
      isDown = false;
    },
    true
  );

  element.addEventListener(
    "mousemove",
    function (event) {
      event.preventDefault();

      if (isDown) {
        mousePosition = {
          x: event.clientX,
          y: event.clientY,
        };

        if (mousePosition.x + offset[0] > 0) {
          element.style.marginLeft = 0;
          action.style.right = 0;
          action.style.right = -1 * action.clientWidth + "px";
        } else {
          console.log("mouse", mousePosition.x);

          element.style.marginLeft = "-30px";
          action.style.right = 0;
        }
      }
    },
    true
  );
}
