const letters = {
  "juvi123": {
    img: "juvi.jpg",
    color: "#dff5e1",
    text: `
Dear Juvi,

Thank you for always being there. I appreciate you more than I say.
    `
  },

  "seiji123": {
    img: "seiji.jpg",
    color: "#e1f0ff",
    text: `
Dear Seiji,

You made everything lighter and more memorable.
    `
  },

  "vince123": {
    img: "vince.jpg",
    color: "#fff1dc",
    text: `
Dear Vince,

I’ll always remember the moments we shared.
    `
  }
};

function checkPassword() {
  const input = document.getElementById("password").value;
  const letterBox = document.getElementById("letterBox");

  if (letters[input]) {
    const data = letters[input];

    letterBox.innerHTML = `
      <div class="card" style="background:${data.color}">
        <img src="${data.img}" class="friend-img">
        <div class="letter">
          ${data.text.replace(/\n/g, "<br>")}
        </div>
      </div>
    `;
  } else {
    letterBox.innerHTML = `<p class="error">Wrong password.</p>`;
  }
}
