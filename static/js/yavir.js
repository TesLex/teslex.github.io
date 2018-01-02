let $route = {};
let $data = {};
let $mode = 'hash';

function x(el) {
	return new X(el)
}

class X {

	constructor(el) {
		this.el = [];

		if (typeof el !== 'function')
			(typeof el === 'object') ? this.el.push(el) : this.el = document.querySelectorAll(el);
		else
			el();
	}

	on(type, callback) {
		this.exec(e => e.addEventListener(type, callback))
	}

	html(content) {
		let tmp;

		if (typeof content !== 'undefined')
			return this.exec(e => e.innerHTML = content);
		else
			this.exec(e => tmp = e.innerHTML);

		return tmp ? tmp : new X(this.el)
	}

	addClass(clazz) {
		return this.exec(e => {
			clazz.split(' ').forEach(c => e.classList.add(c))
		});
	}

	removeClass(clazz) {
		return this.exec(e => {
			clazz.split(' ').forEach(c => e.classList.remove(c))
		});
	}

	hasClass(clazz) {
		let hasClass = false;
		this.exec(e => hasClass = e.classList.contains(clazz));
		return hasClass
	}

	style(style) {
		return this.exec(e => e.style = style)
	}

	createElement(el, content) {
		return this.exec(e => e.appendChild(document.createElement(el)).innerHTML = content);
	}

	appendChild(el) {
		return this.exec(e => e.appendChild(el));
	}

	replace(what, to) {
		return this.exec(e => e.innerHTML = e.innerHTML.replace(what, to));
	}

	append(content) {
		return this.exec(e => e.innerHTML = e.innerHTML + content)
	}

	remove(el) {
		if (typeof el !== 'undefined') {
			return this.exec(e => e.removeChild(this.selectFirst(el)))
		} else {
			return this.exec(e => e.parentElement.removeChild(e))
		}
	}

	clear() {
		return this.exec(e => e.innerHTML = '')
	}

	selectFirst(selector) {
		return document.querySelector(selector);
	}

	exec(callback) {

		// log(this.el);

		this.el.forEach(e => {
			callback(e);
		});

		// if (typeof this.el !== 'object') {
		// 	document.querySelectorAll(this.el).forEach((e => {
		// 		callback(e)
		// 	}));
		// } else {
		// 	callback(this.el)
		// }

		return x(this.el)
	}
}

class Yavir {

	constructor(el) {
		this.app = el;
	}

	match(path, route) {
		let names = path.match(new RegExp('{([a-zA-Z0-9]+)}', 'g'));

		path = path
			.replace(new RegExp('{([a-zA-Z]+)}', 'g'), '(.+)')
			.replace(new RegExp('{([a-zA-Z]+)\((.+)\)}', 'g'), /\2/);

		let params = route.match(new RegExp('^' + path + '$'));

		$route['path'] = route;

		if (params !== null && names !== null)
			for (let i = 1; i <= names.length; i++)
				$route[names[i - 1].replace('{', '').replace('}', '')] = params[i];

		return params !== null;
	}

	renderComponent(component) {
		let tpl = ("function" === typeof component.template) ? component.template() : component.template;

		let start = tpl.indexOf('<script load>');
		let end = tpl.substr(start, tpl.length).indexOf('</script>');

		x('div#' + component.selector).html(tpl);

		if (start > 0 && end > 0)
			window.eval(tpl.substr(start + 13, end - 13));
		else if (component.script)
			component.script();

		x('div#' + component.selector).replace(new RegExp('{{([a-zA-Z0-9 ]+)}}', 'g'), (q, val) => {
			val = $data[val.trim()];
			return typeof val === 'function' ? val() : val
		});

		if (component.title) {
			window.document.title = component.title;
		} else {
			x('title[load]').exec(x => window.document.title = x.innerHTML);
		}

		if (component.style)
			x('div#' + component.selector).createElement('style', component.style);

		if (component.components !== null && "undefined" !== typeof component.components) {
			component.components.forEach(function (c) {
				this.renderComponent(c);
			});
		}
	}

	renderActive() {
		x('*').removeClass('active-route');

		let found = this.app.components.find(e => {
			if ($mode === 'hash') {
				return typeof e.route === 'undefined' ? false : this.match(e.route, window.location.hash.substr(1, window.location.hash.length));
			} else {
				return typeof e.route === 'undefined' ? false : this.match(e.route, window.location.pathname);
			}
		});

		if (found) {
			x('div#' + this.app.el).clear();

			let el = document.createElement('div');
			el.id = found.selector;

			document.getElementById(this.app.el).appendChild(el);

			this.renderComponent(found);

			x('.' + found.selector.replace('-', '_')).addClass('active-route')
		} else {
			x('div#view').html('404')
		}
	}

	run() {
		$mode = this.app.mode;

		if ($mode === 'hash' && window.location.hash === "") {
			history.replaceState({}, '', '#/');
		}

		for (const e of this.app.components) {
			if (e.route === undefined)
				x('div#' + e.selector).html(typeof e.template === 'function' ? e.template() : e.template);
			;
		}

		if (typeof this.app.path === 'undefined') this.app.path = '/';

		this.renderActive();

		x(window).on($mode === 'hash' ? 'hashchange' : 'popstate', () => {
			this.renderActive()
		});
	}
}

function url(href) {
	if ($mode === 'hash') {
		window.location.hash = href
	} else {
		history.pushState({}, '', href);
		window.dispatchEvent(new Event('popstate'));
	}

	return false
}

function page(file, async = false) {
	let rawFile = new XMLHttpRequest();
	let s;
	rawFile.open("GET", file, async);
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status === 0) {
				s = rawFile.responseText;
			}
		}
	};
	rawFile.send(null);
	return s;
}

function log(...text) {
	text.forEach(function (e) {
		console.log(e);
	});
}