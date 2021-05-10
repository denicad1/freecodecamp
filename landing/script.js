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
