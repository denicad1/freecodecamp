const scrolling = () => {
  const nav = document.querySelector("#nav-bar");
  const scroll = function (e) {
    e.preventDefault();
    const sect = e.target.closest("a").getAttribute("href");
    document.querySelector(`#${sect}`).scrollIntoView({
      behavior: "smooth",
    });
  };
  nav.addEventListener("click", scroll);
};
scrolling();
// const section = document.querySelector(`.section`);
const heading = document.getElementById("header");
const headerHeight = heading.getBoundingClientRect().height;
// const options = {
//   root: null,
//   threshold: 0,
// };
// const headerFix = (entries, observer) => {
//   const [entry] = entries;
//   console.log(entry);

//   if (entry.isIntersecting) {
//     console.log(entry);
//     heading.classList.add("sticky");
//     return;
//   }
// };
const headerObserver = new IntersectionObserver(headerFix, options);
// headerObserver.observe(section);
const sections = document.querySelectorAll(".section h1");
const opts = {
  root: null,
  threshold: 0,
};
const slideUp = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.add("animate__animated", "animate__bounceInUp");
  observer.unobserve(entry.target);
};
const sectObserver = new IntersectionObserver(slideUp, opts);

sections.forEach((section) => {
  sectObserver.observe(section);
});
