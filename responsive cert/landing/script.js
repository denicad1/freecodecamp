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
// const heading = document.getElementById("header");
// const sectHeight = section.getBoundingClientRect().top;
// const options = {
//   root: null,
//   threshold: 1,
// };
// const headerFix = (entries, observer) => {
//   const [entry] = entries;
//   let target = entry.target;
//   console.log(entry);

//   if (entry.isIntersecting) {
//     console.log(entry);
//     heading.classList.add("sticky");
//     return;
//   }
// };
// const headerObserver = new IntersectionObserver(headerFix, options);

// headerObserver.observe(section);
