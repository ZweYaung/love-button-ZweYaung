const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yayyy hapi hapi hapi";
  gif.src =
    "https://scontent.frgn10-1.fna.fbcdn.net/v/t39.30808-6/405038233_1997166857324019_2949868161565914916_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=gmCCYYM37BwAX8eJllB&_nc_ht=scontent.frgn10-1.fna&oh=00_AfBGEhGos5XPXKFokDFEd4CKbINUeunnKnwnVFvj9CeVpQ&oe=65C9016C";
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
