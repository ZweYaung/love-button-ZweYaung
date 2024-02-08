const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yayyy hapi hapi hapi";
  gif.src =
    "https://scontent.frgn10-1.fna.fbcdn.net/v/t39.30808-6/307452344_1710379612669413_3714347934930556651_n.jpg?stp=dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=mOEgx5Mu-CEAX-_ID0e&_nc_ht=scontent.frgn10-1.fna&oh=00_AfBcQTDQjcL04VXPG6lHwjpTMaYGLU5LfMRQ0pfRmT4QJQ&oe=65CAB062";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
