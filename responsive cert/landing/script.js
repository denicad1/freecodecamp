const heading = document.getElementById("header");
headerHeight = heading.getBoundingClientRect().height;
console.log(headerHeight);

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
const options = {
	root: null,
	threshold: 0,
	rootMargin: `${headerHeight}px`,
};

const headerFix = (entries, observer) => {
	const [entry] = entries;
	console.log(entry);
};
const headerObserver = new IntersectionObserver(headerFix, options);
