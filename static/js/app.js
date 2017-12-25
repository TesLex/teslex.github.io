const main = {
	selector: 'app',
	template: '<view></view><navbar></navbar>'
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

// const user = {
// 	route: '/user/{id}',
// 	selector: 'projects-page',
// 	template:
// 	`
// 	<script load>
// 		log($route);
// 	</script>
//
// 	`s
// };

const app = new Yavir({
	el: 'view',
	mode: 'history',
	components: [
		main,
		navbar,
		home,
		contact,
		portfolio,
		projects,
		// user
	]
});

app.run();