const scrolling = () => {
  const nav = document.getElementById("header");
  const scroll = function (e) {
    e.preventDefault();
    const sect = e.target.closest("a").getAttribute("href");
    const navHeight = nav.getBoundingClientRect().height;
    const correctSect =
      document.getElementById(`${sect}`).getBoundingClientRect().top +
      window.pageYOffset -
      (navHeight + 100);

    window.scrollTo({ top: correctSect, behavior: "smooth" });
    // document.querySelector(`#${sect}`).scrollIntoView({
    //   behavior: "smooth",
    // });
  };
  nav.addEventListener("click", scroll);
};
scrolling();
// const section = document.querySelector(`.section`);
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
// const headerObserver = new IntersectionObserver(headerFix, options);
// headerObserver.observe(section);
const titleRaise = () => {
  const sections = document.querySelectorAll(".section h1");
  const opts = {
    root: null,
    threshold: 0,
  };
  const slideUp = (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    entry.target.classList.add("animate__animated", "animate__bounce");
    observer.unobserve(entry.target);
  };
  const sectObserver = new IntersectionObserver(slideUp, opts);

  sections.forEach((section) => {
    sectObserver.observe(section);
  });
};
titleRaise();
