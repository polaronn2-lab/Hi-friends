const letters = {
  "juvi123": {
    img: "juvi.jpg",
    color: "#dff5e1",
    text: `
Dear Juvi,

Thank you for everything.
    `
  },

  "seiji123": {
    img: "seiji.jpg",
    color: "#e1f0ff",
    text: `
Dear Seiji,

You’ve been amazing. I'll miss you, so so much
    `
  },

  "vince123": {
    img: "vince.jpg",
    color: "#fff1dc",
    text: `
Dear Vince,

I’ll remember this always.
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
