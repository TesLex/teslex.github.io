'use strict';

var main = {
	selector: 'app',
	template: '<view></view><navbar></navbar>'
};

var navbar = {
	selector: 'navbar',
	template: function template() {
		return page('/static/pages/navbar.html');
	}
};

var home = {
	route: '/',
	selector: 'home-page',
	template: function template() {
		return page('/static/pages/home.html');
	}
};

var contact = {
	route: '/contact',
	selector: 'contact-page',
	template: function template() {
		return page('/static/pages/contact.html');
	}
};

var portfolio = {
	route: '/portfolio',
	selector: 'portfolio-page',
	template: function template() {
		return page('/static/pages/portfolio.html');
	}
};

var projects = {
	route: '/projects',
	selector: 'projects-page',
	template: function template() {
		return page('/static/pages/projects.html');
	}
};

var user = {
	route: '/user/{id}',
	selector: 'projects-page',
	template: '\n\t<div>{{ user }}</div>\n\t',

	script: function script() {
		$data['user'] = $route.id;
	}
};

var app = new Yavir({
	el: 'view',
	mode: 'hash',
	components: [main, navbar, home, contact, portfolio, projects, user]
});

app.run();
//# sourceMappingURL=app.js.map