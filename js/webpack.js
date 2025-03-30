(() => {
	"use strict";

	var e = {},
		t = {};

	function r(n) {
		var o = t[n];

		if (void 0 !== o)
            return o.exports;

		var a = t[n] = {
				exports: {}
			},

			i = !0;

		try {
			e[n].call(a.exports, a, a.exports, r), i = !1
		} finally {
			i && delete t[n]
		}

		return a.exports
	}
    
	r.m = e, (() => {
		var e = [];

		r.O = (t, n, o, a) => {
			if (n) {
				a = a || 0;

				for (var i = e.length; i > 0 && e[i - 1][2] > a; i--) e[i] = e[i - 1];

				e[i] = [n, o, a];

				return
			}
			for (var l = 1 / 0, i = 0; i < e.length; i++) {
				for (var [n, o, a] = e[i], u = !0, s = 0; s < n.length; s++)(!1 & a || l >= a) && Object.keys(r.O).every(e => r.O[e](n[s])) ? n.splice(s--, 1) : (u = !1, a < l && (l = a));
				
				if (u) {
					e.splice(i--, 1);

					var d = o();

					void 0 !== d && (t = d)
				}
			}

			return t
		}
	})(), r.n = e => {
		var t = e && e.__esModule ? () => e.default : () => e;

		return r.d(t, {
			a: t
		}), t
	}, (() => {
		var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;

		r.t = function (n, o) {
			if (1 & o && (n = this(n)), 8 & o || "object" == typeof n && n && (4 & o && n.__esModule || 16 & o && "function" == typeof n.then))
				return n;

			var a = Object.create(null);

			r.r(a);

			var i = {};

			e = e || [null, t({}), t([]), t(t)];

			for (var l = 2 & o && n;
				"object" == typeof l && !~e.indexOf(l); l = t(l)) Object.getOwnPropertyNames(l).forEach(e => i[e] = () => n[e]);

			return i.default = () => n, r.d(a, i), a
		}
	})(), r.d = (e, t) => {
		for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		})
	}, r.f = {}, r.e = e => Promise.all(Object.keys(r.f).reduce((t, n) => (r.f[n](e, t), t), [])), r.u = e => "static/chunks/" + e + ".725ac5054a40bad4.js", r.miniCssF = e => "static/css/696219f22bd4af35.css", r.g = function () {
		if ("object" == typeof globalThis)
			return globalThis;

		try {
			return this || Function("return this")()
		} catch (e) {
			if ("object" == typeof window) return window
		}
	}(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
		var e = {},
			t = "_N_E:";

		r.l = (n, o, a, i) => {
			if (e[n]) {
				e[n].push(o);

				return
			}

			if (void 0 !== a)
				for (var l, u, s = document.getElementsByTagName("script"), d = 0; d < s.length; d++) {
					var c = s[d];

					if (c.getAttribute("src") == n || c.getAttribute("data-webpack") == t + a) {
						l = c;

						break
					}
				}

			l || (u = !0, (l = document.createElement("script")).charset = "utf-8", l.timeout = 120, r.nc && l.setAttribute("nonce", r.nc), l.setAttribute("data-webpack", t + a), l.src = r.tu(n)), e[n] = [o];
			
			var f = (t, r) => {
				l.onerror = l.onload = null, clearTimeout(p);

				var o = e[n];

				if (delete e[n], l.parentNode && l.parentNode.removeChild(l), o && o.forEach(e => e(r)), t)
					return t(r)
			},

			p = setTimeout(f.bind(null, void 0, {
				type: "timeout",
				target: l
			}), 12e4);

			l.onerror = f.bind(null, l.onerror), l.onload = f.bind(null, l.onload), u && document.head.appendChild(l)
		}
	})(), r.r = e => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, (() => {
		var e;

		r.tt = () => (void 0 === e && (e = {
			createScriptURL: e => e
		}, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("nextjs#bundler", e))), e)
	})(), r.tu = e => r.tt().createScriptURL(e), r.p = "/_next/", (() => {
		var e = (e, t, r, n) => {
			var o = document.createElement("link");

			return o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = a => {
				if (o.onerror = o.onload = null, "load" === a.type)
					r();

				else {
					var i = a && ("load" === a.type ? "missing" : a.type),
						l = a && a.target && a.target.href || t,
						u = Error("carregar o chunk css " + e + " falhou.\n(" + l + ")");

					u.code = "CSS_CHUNK_LOAD_FAILED", u.type = i, u.request = l, o.parentNode.removeChild(o), n(u)
				}
			}, o.href = t,

			function (e) {
				if ("function" == typeof _N_E_STYLE_LOAD) {
					let {
						href: t,
						onload: r,
						onerror: n
					} = e;

					_N_E_STYLE_LOAD(new URL(t).pathname).then(() => null == r ? void 0 : r.call(e, {
						type: "load"
					}), () => null == n ? void 0 : n.call(e, {}))
				} else document.head.appendChild(e)
			}(o), o
		},

		t = (e, t) => {
			for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
				var o = r[n],
					a = o.getAttribute("data-href") || o.getAttribute("href");

				if ("stylesheet" === o.rel && (a === e || a === t))
					return o
			}

			for (var i = document.getElementsByTagName("style"), n = 0; n < i.length; n++) {
				var o = i[n],
					a = o.getAttribute("data-href");

				if (a === e || a === t)
					return o
			}
		},

		n = n => new Promise((o, a) => {
			var i = r.miniCssF(n),
				l = r.p + i;

			if (t(i, l))
				return o();

			e(n, l, o, a)
		}),

		o = {
			68: 0
		};

		r.f.miniCss = (e, t) => {
			o[e] ? t.push(o[e]) : 0 !== o[e] && ({
				467: 1
			})[e] && t.push(o[e] = n(e).then(() => {
				o[e] = 0
			}, t => {
				throw delete o[e], t
			}))
		}
	})(), (() => {
		var e = {
			68: 0,
			971: 0,
			324: 0,
			97: 0,
			136: 0,
			483: 0,
			114: 0,
			808: 0,
			872: 0,
			756: 0,
			282: 0,
			567: 0,
			33: 0
		};

		r.f.j = (t, n) => {
			var o = r.o(e, t) ? e[t] : void 0;

			if (0 !== o) {
				if (o)
					n.push(o[2]);

				else if (/^(97(|1)|[45]67|114|136|282|324|33|483|68|756|808|872)$/.test(t))
					e[t] = 0;

				else {
					var a = new Promise((r, n) => o = e[t] = [r, n]);

					n.push(o[2] = a);

					var i = r.p + r.u(t),
						l = Error();

					r.l(i, n => {
						if (r.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
							var a = n && ("load" === n.type ? "missing" : n.type),
								i = n && n.target && n.target.src;

							l.message = "carregar o chunk " + t + " falhou.\n(" + a + ": " + i + ")", l.name = "ChunkLoadError", l.type = a, l.request = i, o[1](l)
						}
					}, "chunk-" + t, t)
				}
			}
		}, r.O.j = t => 0 === e[t];

		var t = (t, n) => {
			var o, a, [i, l, u] = n,
				s = 0;

			if (i.some(t => 0 !== e[t])) {
				for (o in l) r.o(l, o) && (r.m[o] = l[o]);

				if (u)
					var d = u(r)
			}

			for (t && t(n); s < i.length; s++) a = i[s], r.o(e, a) && e[a] && e[a][0](), e[a] = 0;

			return r.O(d)
		},
		
		n = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
		n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
	})()
})();