const main = {
	route: '/',
	selector: 'main-page',
	template: () => page('/pages/main.html')
};

const portfolio = {
	route: '/portfolio',
	selector: 'portfolio-page',
	template: () => page('/pages/portfolio/portfolio.html'),
	components: [
		{
			selector: 'portfolio-cards',
			template: () => page('/pages/portfolio/cards.html'),
		}
	]
};

const contact = {
	route: '/contact',
	selector: 'contact-page',
	template: () => page('/pages/contact.html')
};

new Yavir({
	el: 'app',
	mode: 'history',
	components: [
		main,
		portfolio,
		contact
	]
}).run();