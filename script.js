const letters = {
  mathwizard: {
    img: "zachzach.jpg",
    color: "#d2b48c",
    text: "HI PREEEE - working test letter"
  }
};

function checkPassword() {
  const input = document.getElementById("password").value.trim();
  const letterBox = document.getElementById("letterBox");

  const data = letters[input];

  if (!data) {
    letterBox.innerHTML = "<p class='error'>Wrong password</p>";
    return;
  }

  letterBox.innerHTML = `
    <div class="card" style="background:${data.color}">
      <img src="${data.img}" class="friend-img">
      <div class="letter">${data.text}</div>
    </div>
  `;
}
