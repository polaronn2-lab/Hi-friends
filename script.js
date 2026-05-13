function checkPassword() {
  const inputRaw = document.getElementById("password").value;
  const input = inputRaw.trim().toLowerCase();
  const letterBox = document.getElementById("letterBox");

  console.log("INPUT:", input);
  console.log("AVAILABLE KEYS:", Object.keys(letters));

  const data = letters[input];

  if (!data) {
    letterBox.innerHTML = `
      <p class="error">
        Wrong password: "${inputRaw}"
      </p>
    `;
    return;
  }

  letterBox.innerHTML = `
    <div class="card" style="background:${data.color}">
      <img src="${data.img}" class="friend-img">
      <div class="letter">
        ${data.text.replace(/\n/g, "<br>")}
      </div>
    </div>
  `;

  const music = new Audio(data.song);
  music.play().catch(() => {});
}
