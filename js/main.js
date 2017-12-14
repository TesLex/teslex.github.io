const app = {
	selector: 'app',
	template: '<view></view>'
};

const main = {
	route: '/',
	selector: 'main-page',
	template: 'Wait..',
	script: function () {
		x().request({
			method: 'GET',
			url: '/pages/main.html',
			onComplete: ex => {
				x(this.selector).html(this.template.replace('Wait..', ex.response))
			}
		})
	}
};

const portfolio = {
	route: '/portfolio',
	selector: 'portfolio-page',
	template: 'Wait..',
	script: function () {
		x().request({
			method: 'GET',
			url: '/pages/portfolio.html',
			onComplete: ex => {
				x(this.selector).html(this.template.replace('Wait..', ex.response))
			}
		})
	}
};

const contact = {
	route: '/contact',
	selector: 'contact-page',
	template: 'Wait..',
	script: function () {
		x().request({
			method: 'GET',
			url: '/pages/contact.html',
			onComplete: ex => {
				x(this.selector).html(this.template.replace('Wait..', ex.response))
			}
		})
	}
};


new Yavir({
	el: 'app',
	components: [app, main, portfolio, contact]
}).run();