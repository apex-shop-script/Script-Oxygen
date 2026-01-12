function openPacks(type){
  const modal = document.getElementById("modal");
  const title = document.getElementById("modalTitle");
  const packs = document.getElementById("packs");

  packs.innerHTML = "";

  if(type === "apex"){
    title.innerText = "APEX SCRIPT PACKS";
    packs.innerHTML += pack("Starter Pack","15€","Basic scripts");
    packs.innerHTML += pack("Pro Pack","30€","Advanced control");
    packs.innerHTML += pack("Elite Pack","50€","All features + updates");
  }

  if(type === "warzone"){
    title.innerText = "WARZONE SCRIPT PACKS";
    packs.innerHTML += pack("Basic","20€","Core features");
    packs.innerHTML += pack("Pro","40€","Advanced settings");
    packs.innerHTML += pack("Elite","70€","Full competitive suite");
  }

  modal.style.display = "flex";
}

function pack(name, price, desc) {
  return `
    <div class="pack">
      <h3>${name}</h3>
      <p>${desc}</p>
      <span>${price}</span>
      <button onclick="buy()">Buy</button>
    </div>
  `;
}
}

function closePacks(){
  document.getElementById("modal").style.display = "none";
}
function buy() {
  window.open("https://discord.gg/apex-shop-script", "_blank");
}
