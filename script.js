const wrapper dokumen.querySelector(".wrapper"); pertanyaan const = document.querySelector(".question"); const gif = dokumen.querySelector(".gif");

const yesBtn = dokumen.querySelector(".yes-btn"); const noBtn dokumen.querySelector(".no-btn");

yesBtn.addEventListener("klik", () => {

pertanyaan. innerHTML = "Aaaaa, aku juga menyukaimu";

gif.src:

"https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";

});

noBtn.addEventListener("mouseover", () => {

const noBtnRect = noBtn.getBoundingClientRect(); const maxX = window.innerWidth noBtnRect.width; const maxY = jendela. innerHeight noBtnRect.height;

CodeSphere

const randomX = Matematika.lantai(Matematika.acak() maxX);

const randomYMath.floor(Math.random() * maxY);

noBtn.style.left = randomX + "px";

noBtn.style.top = acakY + "px":

});