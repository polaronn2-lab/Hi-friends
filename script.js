const letters = {
  "mathwizard": {
    img: "zachzach.jpg",
    color: "#f5f5dc",
    text: `
HI PREEEE

So Happy grad parechong!! Medjo I don't know how to be sentimental and all that but I want to say congratulations pree like goddamn hard carry sobra HAHAHAHHAHA Honestly though, you were one of the first that I knew I would be classmates 
sa Humility, and then the rest is history na. Never expected us to be the beadle-sub beadle duo but hey, I know we did a great job because Humility reflects that. Honestly wouldn't know how I'd handle the class if hindi ko pinapasa sayo 
yung announcements na ayaw ko isigaw HAHAHAHAHA and jusko don't get me started sa physics away natin, honestly would miss those. or kung makikihiram ka lang ng ipad for a bangs update, or if di sila nakikinig sakin kaya mas malakas ng sigaw mo.
They were moments na wala, very simple, yet it felt like they made us more like this 🤞🤞🤞 I don't know, but I'm not a very vocal person with appreciation, so I always tried to be there naman. In quiet or gloomy days, I'm glad I had a katabi, a seatmate
that was there. Thanks for everything pree, we may be kilometers apart but I'm a message away ah, mag uupdate pa tayong apat sa row alr? Congrats uli sa grad! Padayon future archi!! 
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
