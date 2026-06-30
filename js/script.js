const eventDate = new Date("September 20, 2026 09:00:00").getTime();

const timer = document.getElementById("timer");

if (timer) {
  setInterval(function () {
    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    nav.style.boxShadow = "0 8px 20px rgba(0,0,0,0.4)";
  } else {
    nav.style.boxShadow = "none";
  }
});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";

      entry.target.style.transform = "translateY(0px)";
    }
  });
});

cards.forEach((card) => {
  card.style.opacity = "0";

  card.style.transform = "translateY(50px)";

  card.style.transition = "0.7s";

  observer.observe(card);
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const phone = document.getElementById("phone").value;

    if (name === "" || email === "" || phone === "") {
      alert("Please fill all fields.");

      return;
    }

    alert("Registration Successful!");

    form.reset();
  });
}

document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;

      document.querySelector(hash)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

window.addEventListener("load", () => {
  console.log("College Event Website Loaded Successfully.");
});
