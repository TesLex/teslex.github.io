const app = {
	selector: 'app',
	template: '<view></view>'
};

const main = {
	route: '/',
	selector: 'main-page',
	template: page('/pages/main.html')
};

const portfolio = {
	route: '/portfolio',
	selector: 'portfolio-page',
	template: page('/pages/portfolio.html')
};

const contact = {
	route: '/contact',
	selector: 'contact-page',
	template: page('/pages/contact.html')
};

new Yavir({
	el: 'app',
	mode: 'hash', // or 'history'
	components: [
		app,
		main,
		portfolio,
		contact
	]
}).run();