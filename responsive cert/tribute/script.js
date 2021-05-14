const sectObserver = () => {
	const tribInfo = document.getElementById("tribute-info");
	tribInfo.classList.add("invisible");
	const slideUp = (entries, observer) => {
		const [entry] = entries;

		if (entry.isIntersecting) {
			entry.target.classList.remove("invisible");
			observer.unobserve(entry.target);
		}
	};
	let options = {
		root: null,
		rootMargin: "50px",
		threshold: 0,
	};
	const observer = new IntersectionObserver(slideUp, options);
	observer.observe(tribInfo);
};
sectObserver();
