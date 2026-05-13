const letters = {
  "juvi123": {
    img: "juvi.jpg",
    text: `
Dear Juvi,

Thank you for always being there. I appreciate everything more than I say in person.
    `
  },

  "seiji123": {
    img: "seiji.jpg",
    text: `
Dear Seiji,

You’ve made school days lighter and more meaningful.
    `
  },

  "vince123": {
    img: "vince.jpg",
    text: `
Dear Vince,

You’re one of the reasons I’ll remember this journey.
    `
  }
};

function checkPassword() {
  const input = document.getElementById("password").value;
  const letterBox = document.getElementById("letterBox");

  if (letters[input]) {
    const data = letters[input];

    letterBox.innerHTML = `
      <div class="card">
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
