'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $route = {};
var $data = {};
var $mode = 'hash';

function x(el) {
	return new X(el);
}

var X = function () {
	function X(el) {
		_classCallCheck(this, X);

		this.el = el;
	}

	_createClass(X, [{
		key: 'on',
		value: function on(type, callback) {
			this.exec(function (e) {
				return e.addEventListener(type, callback);
			});
		}
	}, {
		key: 'html',
		value: function html(content) {
			var tmp = void 0;

			if (typeof content !== 'undefined') return this.exec(function (e) {
				return e.innerHTML = content;
			});else this.exec(function (e) {
				return tmp = e.innerHTML;
			});

			return tmp ? tmp : new X(this.el);
		}
	}, {
		key: 'addClass',
		value: function addClass(clazz) {
			return this.exec(function (e) {
				clazz.split(' ').forEach(function (c) {
					return e.classList.add(c);
				});
			});
		}
	}, {
		key: 'removeClass',
		value: function removeClass(clazz) {
			return this.exec(function (e) {
				clazz.split(' ').forEach(function (c) {
					return e.classList.remove(c);
				});
			});
		}
	}, {
		key: 'hasClass',
		value: function hasClass(clazz) {
			var hasClass = false;
			this.exec(function (e) {
				return hasClass = e.classList.contains(clazz);
			});
			return hasClass;
		}
	}, {
		key: 'style',
		value: function style(_style) {
			return this.exec(function (e) {
				return e.style = _style;
			});
		}
	}, {
		key: 'createElement',
		value: function createElement(el, content) {
			return this.exec(function (e) {
				return e.appendChild(document.createElement(el)).innerHTML = content;
			});
		}
	}, {
		key: 'appendChild',
		value: function appendChild(el) {
			return this.exec(function (e) {
				return e.appendChild(el);
			});
		}
	}, {
		key: 'replace',
		value: function replace(what, to) {
			return this.exec(function (e) {
				return e.innerHTML = e.innerHTML.replace(what, to);
			});
		}
	}, {
		key: 'append',
		value: function append(content) {
			return this.exec(function (e) {
				return e.innerHTML = e.innerHTML + content;
			});
		}
	}, {
		key: 'exec',
		value: function exec(callback) {
			if (_typeof(this.el) !== 'object') {
				document.querySelectorAll(this.el).forEach(function (e) {
					callback(e);
				});
			} else {
				callback(this.el);
			}

			return x(this.el);
		}
	}]);

	return X;
}();

var Yavir = function () {
	function Yavir(el) {
		_classCallCheck(this, Yavir);

		this.app = el;
	}

	_createClass(Yavir, [{
		key: 'match',
		value: function match(path, route) {
			var names = path.match(new RegExp('{([a-zA-Z0-9]+)}', 'g'));

			path = path.replace(new RegExp('{([a-zA-Z]+)}', 'g'), '(.+)').replace(new RegExp('{([a-zA-Z]+)\((.+)\)}', 'g'), /\2/);

			var params = route.match(new RegExp('^' + path + '$'));

			$route['path'] = route;

			if (params !== null && names !== null) for (var i = 1; i <= names.length; i++) {
				$route[names[i - 1].replace('{', '').replace('}', '')] = params[i];
			}return params !== null;
		}
	}, {
		key: 'renderComponent',
		value: function renderComponent(component) {
			var tpl = "function" === typeof component.template ? component.template() : component.template;

			var start = tpl.indexOf('<script load>');
			var end = tpl.substr(start, tpl.length).indexOf('</script>');

			x(component.selector).html(tpl);

			if (start > 0 && end > 0) window.eval(tpl.substr(start + 13, end - 13));else if (component.script) component.script();

			x(component.selector).replace(new RegExp('{{([a-zA-Z0-9 ]+)}}', 'g'), function (q, val) {
				val = $data[val.trim()];
				return typeof val === 'function' ? val() : val;
			});

			if (component.title) {
				window.document.title = component.title;
			} else {
				x('title[load]').exec(function (x) {
					return window.document.title = x.innerHTML;
				});
			}

			if (component.style) x(component.selector).createElement('style', component.style);

			if (component.components !== null && "undefined" !== typeof component.components) {
				component.components.forEach(function (c) {
					this.renderComponent(c);
				});
			}
		}
	}, {
		key: 'renderActive',
		value: function renderActive() {
			var _this = this;

			x('*').removeClass('active-route');

			var found = this.app.components.find(function (e) {
				if ($mode === 'hash') {
					return typeof e.route === 'undefined' ? false : _this.match(e.route, window.location.hash.substr(1, window.location.hash.length));
				} else {
					return typeof e.route === 'undefined' ? false : _this.match(e.route, window.location.pathname);
				}
			});

			if (found) {
				x(this.app.el).html('<' + found.selector + '>' + '</' + found.selector + '>');

				this.renderComponent(found);

				x('.' + found.selector.replace('-', '_')).addClass('active-route');
			} else {
				x('view').html('404');
			}
		}
	}, {
		key: 'run',
		value: function run() {
			var _this2 = this;

			$mode = this.app.mode;

			if ($mode === 'hash' && window.location.hash === "") {
				history.replaceState({}, '', '#/');
			}

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.app.components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var e = _step.value;

					if (e.route === undefined) x(e.selector).html(typeof e.template === 'function' ? e.template() : e.template);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			if (typeof this.app.path === 'undefined') this.app.path = '/';

			this.renderActive();

			x(window).on($mode === 'hash' ? 'hashchange' : 'popstate', function () {
				_this2.renderActive();
			});
		}
	}]);

	return Yavir;
}();

function url(href) {
	if ($mode === 'hash') {
		window.location.hash = href;
	} else {
		history.pushState({}, '', href);
		window.dispatchEvent(new Event('popstate'));
	}

	return false;
}

function page(file) {
	var async = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	var rawFile = new XMLHttpRequest();
	var s = void 0;
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

function log() {
	for (var _len = arguments.length, text = Array(_len), _key = 0; _key < _len; _key++) {
		text[_key] = arguments[_key];
	}

	text.forEach(function (e) {
		console.log(e);
	});
}
//# sourceMappingURL=yavir.js.map