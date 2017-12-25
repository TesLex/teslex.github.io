const main = {
	selector: 'app',
	template: '<view></view><navbar></navbar>'
};

const navbar = {
	selector: 'navbar',
	template: () => page('/pages/navbar.html')
};

const home = {
	route: '/',
	selector: 'home-page',
	template: () => page('/pages/home.html')
};

const contact = {
	route: '/contact',
	selector: 'contact-page',
	animate: 'animated fadeIn',
	template: () => page('/pages/contact.html')
};

const portfolio = {
	route: '/portfolio',
	selector: 'portfolio-page',
	animate: 'animated fadeIn',
	template: () => page('/pages/portfolio.html')
};

new Yavir({
	el: 'view',
	mode: 'history',
	components: [
		main,
		navbar,
		home,
		contact,
		portfolio
	]
}).run();