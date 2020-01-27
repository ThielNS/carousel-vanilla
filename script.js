const data = {
  0: {
    id: 0,
    title: "Patrícia Magi",
    description: "ISTIC Technical Coordinator",
    image: "images/image-0.jpg"
  },
  1: {
    id: 1,
    title: "Gabriel N. Souza",
    description: "Front-end Developer and React Native Developer",
    image: "images/image-1.jpg"
  },
  2: {
    id: 2,
    title: "Guilherme Akira",
    description: "UI/UX Designer",
    image: "images/image-2.jpg"
  },
  3: {
    id: 3,
    title: "Lucas Eduardo Gomes",
    description: "Data Scientist: AI, Machine Learning, Image Processing",
    image: "images/image-3.jpg"
  },
  4: {
    id: 4,
    title: "Daniel Clemente da Silva",
    description: "Programming Intern: Back-end Technician, .Net, Android, Mobile Programming",
    image: "images/image-4.jpg"
  },
  5: {
    id: 5,
    title: "George Razera",
    description: "Digitalization and Industry 4.0 Consultant: IoT, Hardware, Connectivity, LoRaWAN",
    image: "images/image-5.jpg"
  },
  6: {
    id: 6,
    title: "Wesley Ramalho",
    description: "Software developer focused on Front-end",
    image: "images/image-6.jpg"
  },
  7: {
    id: 7,
    title: "Luma Marigo",
    description: "Full-Stack: Team Leader, Front-end, Back-end and Mobile Developer",
    image: "images/image-7.jpg"
  },
  8: {
    id: 8,
    title: "Jonathan Bertoldi da Silva",
    description: "Full-Stack: Front-end Expert, Back-end Expert, Game Developer",
    image: "images/image-8.jpg"
  },
  9: {
    id: 9,
    title: "Andre Rosa Bertollo",
    description: "Digitalization and Industry 4.0 Consultant: Big Data, Data Science, AI, Data Mining, Business Intelligence ",
    image: "images/image-9.jpg"
  },
  10: {
    id: 10,
    title: "Erika Aparecida Fidele de Souza",
    description: "Technical Assistent: Project Administrator, Management Support",
    image: "images/image-10.jpg"
  },
  11: {
    id: 11,
    title: "Patrick Ens",
    description: "Full-Stack: Front-end Expert, Back-end Expert, Team Leader, Game Developer, Mobile Developer",
    image: "images/image-11.jpg"
  },
  12: {
    id: 12,
    title: "Lucas Viana Soares de Souza",
    description: "Programming Intern: Front-end Technician, Back-end Technician, Game Developer, Mobile Developer",
    image: "images/image-12.jpg"
  },
  13: {
    id: 13,
    title: "Mayara Rodrigues Fernandes",
    description: "Network Manager: Cloud, Azure, AWS, DevOps, Infrastructure, Application Servers",
    image: "images/image-13.jpg"
  },
  14: {
    id: 14,
    title: "Anderson Pessoa",
    description: "Back-end, .Net Core and Blockchain Developer",
    image: "images/image-14.jpg"
  },
  15: {
    id: 15,
    title: "Murillo Marigo",
    description: "Full-Stack: Front-end Expert, Back-end Expert, Team Leader, Game Developer, Mobile Developer",
    image: "images/image-15.jpg"
  },
  16: {
    id: 16,
    title: "Brian Costa Lira",
    description: "Full-Stack: Front-end Technician, Back-end Expert, Blockchain and Mobile Developer",
    image: "images/image-16.jpg"
  }
};

const carouselInformations = document.querySelector(".carousel-informations");
const carouselListItem = document.querySelector(".carousel-list-item");
const carouselControl = document.querySelector(".carousel-control");

function createCarouselItemImg(item, isInitial) {
  const carouselItem = document.createElement("li");
  carouselItem.classList.add("carousel-item");
  if (isInitial) {
    carouselItem.classList.add("-active");
  }

  const carouselImg = document.createElement("img");
  carouselImg.classList.add("carousel-img");
  carouselImg.setAttribute("src", item.image);

  carouselItem.appendChild(carouselImg);

  return carouselItem;
}

function createInformation(item, isInitial) {
  const information = document.createElement("li");
  information.classList.add("information");
  if (isInitial) {
    information.classList.add("-active");
  }

  const title = document.createElement("h2");
  title.classList.add("title");
  title.innerText = item.title;

  const subTitle = document.createElement("h3");
  subTitle.innerText = "Technical-Skills";

  const description = document.createElement("p");
  description.classList.add("description");
  description.innerText = item.description;

  const linkOpen = document.createElement("a");
  linkOpen.classList.add("open");
  linkOpen.setAttribute("href", "#");
  linkOpen.setAttribute("data-id", item.id);
  linkOpen.innerText = "See";

  information.appendChild(title);
  information.appendChild(subTitle);
  information.appendChild(description);
  // information.appendChild(linkOpen);

  return information;
}

function createCarouselControlBullet(index, isInitial) {
  const carouselControlBullet = document.createElement("li");
  carouselControlBullet.classList.add("carousel-control-bullet");
  carouselControlBullet.setAttribute("data-order", index);
  if (isInitial) {
    carouselControlBullet.classList.add("-active");
  }

  return carouselControlBullet;
}

function loadCarousel(dataSource) {
  dataSource.map((item, index) => {
    const carouselItemImg = createCarouselItemImg(item, index === 0);
    const carouselItemInformation = createInformation(item, index === 0);
    const carouselItemControlBullet = createCarouselControlBullet(
      index,
      index === 0
    );

    carouselListItem.appendChild(carouselItemImg);
    carouselInformations.appendChild(carouselItemInformation);
    carouselControl.appendChild(carouselItemControlBullet);
  });
}

loadCarousel(Object.values(data));

const carousel = document.querySelector("#carousel");
const carouselListItems = carousel.querySelectorAll(".carousel-item");
const carouselInformationtems = carousel.querySelectorAll(".information");
const carouselControlItems = carousel.querySelectorAll(
  ".carousel-control-bullet"
);
const timerElement = document.querySelector(".timer");
const timerBarElement = document.querySelector(".timer > span");

let currentItem = 0;
let carouselLoopInterval;

function carouselChangeItem(index) {
  const carouselItemActive = carousel.querySelectorAll(
    ".carousel-item.-active"
  )[0];
  const carouselInformationActive = carousel.querySelectorAll(
    ".information.-active"
  )[0];
  const carouselControlItemActive = carousel.querySelectorAll(
    ".carousel-control-bullet.-active"
  )[0];

  carouselItemActive.classList.remove("-active");
  carouselListItems[index].classList.add("-active");

  carouselInformationActive.classList.remove("-active");
  carouselInformationtems[index].classList.add("-active");

  carouselControlItemActive.classList.remove("-active");
  carouselControlItems[index].classList.add("-active");
}

function carouselLoopStart() {
  carouselLoopInterval = setInterval(() => {
    currentItem += 1;

    if (currentItem === carouselListItems.length) {
      currentItem = 0;
    }

    carouselChangeItem(currentItem);
  }, 5000);
  timerElement.appendChild(timerBarElement);
}

function carouselLoopStop() {
  clearInterval(carouselLoopInterval);
  timerElement.removeChild(timerBarElement);
}

addEventListener("click", ({ toElement }) => {
  if (toElement.className === "carousel-control-bullet") {
    carouselLoopStop();
    const { order } = toElement.dataset;
    currentItem = parseInt(order);

    carouselChangeItem(currentItem);
    carouselLoopStart();
  }

  if (toElement.className === "open") {
    const { id } = toElement.dataset;

    document.querySelector("body").style.overflowY = "auto";
    const articleElement = document.querySelector("#article");
    const articleContentElement = document.querySelector("#article > .content");

    articleElement.classList.add("open-article");
    articleElement.querySelector("#article .title").innerHTML = data[id].title;
    articleElement.querySelector("#article .description").innerHTML =
      data[id].description;
    articleElement.querySelector("#article .article-image").src =
      data[id].image;

    articleContentElement.classList.add("show-content");
  }
});

carouselLoopStart();

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const dateElement = document.querySelector(".date");

const span = document.createElement("span");
span.innerHTML = `${day} ${month} ${year}`;
dateElement.appendChild(span);
