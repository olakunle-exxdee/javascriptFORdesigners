let pageNumber: number = 0;

const pages = [
  {
    Background: "#edc7a9",
    Circle: "#3e78ed",
    Copy: "a Paris-based Product Manager.🧕🏾",
  },
  {
    Background: "#a1fffe",
    Circle: "#e34a47",
    Copy: "Project Oreinted Person",
  },
  {
    Background: "#d3c7f3",
    Circle: "#f7fe00",
    Copy: "looking for a job at the start of September",
  },
  {
    Background: "#faffb8",
    Circle: "#b472e6",
    Copy: "letting you ",
  },
];

const nextTag = document.querySelector("footer img.next");
const prevTag = document.querySelector("footer img.previous");
const randomTag = document.querySelector("footer img.random");
const outputTag = document.querySelector("h2");
const circleTag = document.getElementById("circles");
const bodyTag = document.querySelector("body");

const next = function () {
  pageNumber++;
  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }
  updateSection();
};

const updateSection = () => {
  if (outputTag?.innerHTML) {
    outputTag.innerHTML = pages[pageNumber].Copy;
  }
  if (circleTag) {
    circleTag.style.backgroundColor = pages[pageNumber].Circle;
  }
  if (bodyTag) {
    bodyTag.style.backgroundColor = pages[pageNumber].Background;
  }
};

const previous = () => {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }
  updateSection();
};
const random = () => {
  pageNumber = Math.floor(Math.random() * pages.length);
  updateSection();
};

nextTag?.addEventListener("click", () => {
  next();
});

prevTag?.addEventListener("click", () => {
  previous();
});

randomTag?.addEventListener("click", () => {
  random();
});

document.addEventListener("keyup", (e) => {
  if (e.key == "ArrowRight") {
    next();
  }
  if (e.key == "ArrowLeft") {
    previous();
  }
});
