const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
    <div class="key">
    ${event.key === " " ? "Space" : event.key} 
    <small>event.key</small>
    </div>

    <div class="key">
      ${event.keyCode}
      <small>event.keyCode ( <i class="fa-solid fa-trash-can"></i> ) </small>
    </div>

    <div class="key">
      ${event.code}
      <small>event.code</small>
    </div>
  `;
});
