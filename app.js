let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

// function ambientDrift() {
//   const shapes = document.querySelectorAll(".shape");

//   shapes.forEach((shape, i) => {
//     const x = Math.sin(Date.now() / 4000 + i) * 10;
//     const y = Math.cos(Date.now() / 5000 + i) * 10;

//     shape.style.transform = `translate(${x}px, ${y}px)`;
//   });

//   requestAnimationFrame(ambientDrift);
// }

// ambientDrift();

function toggleContrast() {
  contrastToggle = !contrastToggle;
  document.body.classList.toggle("dark-theme");
}


function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_qn6wr1c",
      "template_cuckcrp",
      event.target,
      "9LHVBFFS8KSaWHz2h"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on jacksonjacque.jj@gmail.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}


