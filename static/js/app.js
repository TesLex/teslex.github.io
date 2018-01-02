const main = {
	selector: 'app',
	template: '<div id="view"></div><div id="navbar"></div>'
};

const navbar = {
	selector: 'navbar',
	template: () => page('/static/pages/navbar.html')
};

const home = {
	route: '/',
	selector: 'home-page',
	template: () => page('/static/pages/home.html')
};

const contact = {
	route: '/contact',
	selector: 'contact-page',
	template: () => page('/static/pages/contact.html')
};

const portfolio = {
	route: '/portfolio',
	selector: 'portfolio-page',
	template: () => page('/static/pages/portfolio.html')
};

const projects = {
	route: '/projects',
	selector: 'projects-page',
	template: () => page('/static/pages/projects.html')
};

const user = {
	route: '/user/{id}',
	selector: 'projects-page',
	template:
		`
	<div>{{ user }}</div>
	`,

	script: () => {
		$data['user'] = $route.id
	}
};

const app = new Yavir({
	el: 'view',
	mode: 'hash',
	components: [
		main,
		navbar,
		home,
		contact,
		portfolio,
		projects,
		user
	]
});

app.run();