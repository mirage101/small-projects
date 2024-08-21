const containerEl = document.querySelector('.container');

window.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  containerEl.innerHTML = `
  <div class="mouse-event">
        ${mouseX}
        <h4>Mouse X Position(px)</h4>
      </div>
      <div class="mouse-event">
        ${mouseY}
        <h4>Mouse Y Position(px)</h4>
      </div>`;
});
