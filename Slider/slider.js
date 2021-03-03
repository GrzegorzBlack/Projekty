const picturesList = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const buttonLeft = document.querySelector(".left");
const buttonRight = document.querySelector(".right");
const image = document.querySelector(".image");
const counter = document.querySelector("h2");

let index = 0;
buttonLeft.style.opacity = 0.5;
buttonLeft.style.cursor = "auto";
//console.log(index);

const counterH = (number) => {
  counter.textContent = number + "/" + picturesList.length;
};

buttonRight.addEventListener("click", () => {
  if (index < picturesList.length - 1) {
    index++;
    console.log(index);
    image.src = "images/" + picturesList[index];
    buttonLeft.style.opacity = 1;
    console.log(image.src);
    counterH(index + 1);
    if (index === picturesList.length - 1) {
      buttonRight.style.opacity = 0.5;
    }
  } else if (index === picturesList.length - 1) {
    buttonRight.style.opacity = 0.5;
    console.log(index);
  }
});

buttonLeft.addEventListener("click", () => {
  if (index > 1) {
    index--;
    console.log(index);
    image.src = "images/" + picturesList[index];
    buttonRight.style.opacity = 1;
    counterH(index + 1);
    console.log(image.src);
  } else if (index == 1) {
    index--;
    console.log(index);
    image.src = "images/" + picturesList[index];
    buttonLeft.style.opacity = 0.5;
    counterH(index + 1);
  }
});
