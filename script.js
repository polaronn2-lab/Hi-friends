const letters = {
  "juvi123": `
Dear Juvi,

Thank you for always being there...
`,

  "seiji123": `
Dear Seiji,

I appreciate our friendship...
`
};

function checkPassword() {
  const input = document.getElementById("password").value;
  const letterBox = document.getElementById("letterBox");

  if (letters[input]) {
    letterBox.innerText = letters[input];
  } else {
    letterBox.innerText = "Wrong password.";
  }
}
