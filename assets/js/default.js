/*! For license information please see default.js.LICENSE.txt */
(() => {
    const t = {
        analyticsCookies: ["_ga", "_gid"],
        adsAndTargetingCookies: ["_fbp", "_uetsid", "_uetvid"],
        privacyLink: {
            en: "privacy-policy.php",
            es: "es/politica-de-privacidad.html",
            ru: "ru/privacy-policy.html",
            de: "de/datenschutz.html",
            pl: "pl/polityka-prywatnosci.html",
            it: "it/privacy-policy.html",
            tr: "tr/gizlilik-politikasi.html",
            fr: "fr/regles-de-confidentialite.html",
            "pt-br": "pt-br/politica-de-privacidade.html",
            nl: "nl/privacy-policy.html",
            cn: "cn/privacy-policy.html",
            cz: "cz/privacy-policy.html",
            ua: "ua/privacy-policy.html",
            hu: "hu/adatvedelmi-iranyelvek.html",
            sv: "sv/privacy-policy.php"
        },
        setSettings: {
            tm: "setUserSettingsFunc",
            one: "setUserSettingsONEFunc"
        },
        countriesEurope: {
            AT: "Austria",
            BE: "Belgium",
            BG: "Bulgaria",
            HR: "Croatia",
            CY: "Cyprus",
            CZ: "Czech Republic",
            DK: "Denmark",
            EE: "Estonia",
            FI: "Finland",
            FR: "France",
            DE: "Germany",
            GR: "Greece",
            HU: "Hungary",
            IS: "Iceland",
            IE: "Ireland, Republic of (EIRE)",
            IT: "Italy",
            LV: "Latvia",
            LT: "Lithuania",
            LU: "Luxembourg",
            MT: "Malta",
            NL: "Netherlands",
            NO: "Norway",
            PL: "Poland",
            PT: "Portugal",
            RO: "Romania",
            SK: "Slovakia",
            SI: "Slovenia",
            ES: "Spain",
            SE: "Sweden",
            CH: "Switzerland",
            GB: "United Kingdom"
        }
    };

    function e(t) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, e(t)
    }

    function r(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function n(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(n), !0).forEach((function(e) {
                o(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function o(t, r, n) {
        return (r = function(t) {
            var r = function(t, r) {
                if ("object" !== e(t) || null === t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(t, r || "default");
                    if ("object" !== e(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === r ? String : Number)(t)
            }(t, "string");
            return "symbol" === e(r) ? r : String(r)
        }(r)) in t ? Object.defineProperty(t, r, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[r] = n, t
    }
    const i = n(n({}, t), {}, {
        siteUrl: "https://www.templatemonster.com/",
        settings: {
            tm: {
                cookieDomain: ".templatemonster.com",
                setSettingsFunc: t.setSettings.tm
            },
            blog: {
                cookieDomain: ".monsterspost.com",
                setSettingsFunc: t.setSettings.tm
            },
            one: {
                cookieDomain: ".monsterone.com",
                setSettingsFunc: t.setSettings.one
            }
        },
        serviceUsers: "//users.templatemonster.com/api/v1/",
        serviceGeo: "//api.templatemonster.com/geo/v1/"
    });

    function a(t) {
        return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, a(t)
    }
    var c;

    function u() {
        u = function() {
            return t
        };
        var t = {},
            e = Object.prototype,
            r = e.hasOwnProperty,
            n = Object.defineProperty || function(t, e, r) {
                t[e] = r.value
            },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator",
            l = o.toStringTag || "@@toStringTag";

        function s(t, e, r) {
            return Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), t[e]
        }
        try {
            s({}, "")
        } catch (t) {
            s = function(t, e, r) {
                return t[e] = r
            }
        }

        function f(t, e, r, o) {
            var i = e && e.prototype instanceof y ? e : y,
                a = Object.create(i.prototype),
                c = new j(o || []);
            return n(a, "_invoke", {
                value: E(t, r, c)
            }), a
        }

        function h(t, e, r) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, r)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        t.wrap = f;
        var p = {};

        function y() {}

        function d() {}

        function v() {}
        var m = {};
        s(m, i, (function() {
            return this
        }));
        var g = Object.getPrototypeOf,
            w = g && g(g(k([])));
        w && w !== e && r.call(w, i) && (m = w);
        var b = v.prototype = y.prototype = Object.create(m);

        function L(t) {
            ["next", "throw", "return"].forEach((function(e) {
                s(t, e, (function(t) {
                    return this._invoke(e, t)
                }))
            }))
        }

        function x(t, e) {
            function o(n, i, c, u) {
                var l = h(t[n], t, i);
                if ("throw" !== l.type) {
                    var s = l.arg,
                        f = s.value;
                    return f && "object" == a(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                        o("next", t, c, u)
                    }), (function(t) {
                        o("throw", t, c, u)
                    })) : e.resolve(f).then((function(t) {
                        s.value = t, c(s)
                    }), (function(t) {
                        return o("throw", t, c, u)
                    }))
                }
                u(l.arg)
            }
            var i;
            n(this, "_invoke", {
                value: function(t, r) {
                    function n() {
                        return new e((function(e, n) {
                            o(t, r, e, n)
                        }))
                    }
                    return i = i ? i.then(n, n) : n()
                }
            })
        }

        function E(t, e, r) {
            var n = "suspendedStart";
            return function(o, i) {
                if ("executing" === n) throw new Error("Generator is already running");
                if ("completed" === n) {
                    if ("throw" === o) throw i;
                    return P()
                }
                for (r.method = o, r.arg = i;;) {
                    var a = r.delegate;
                    if (a) {
                        var c = S(a, r);
                        if (c) {
                            if (c === p) continue;
                            return c
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if ("suspendedStart" === n) throw n = "completed", r.arg;
                        r.dispatchException(r.arg)
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = "executing";
                    var u = h(t, e, r);
                    if ("normal" === u.type) {
                        if (n = r.done ? "completed" : "suspendedYield", u.arg === p) continue;
                        return {
                            value: u.arg,
                            done: r.done
                        }
                    }
                    "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                }
            }
        }

        function S(t, e) {
            var r = e.method,
                n = t.iterator[r];
            if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, S(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), p;
            var o = h(n, t.iterator, e.arg);
            if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, p;
            var i = o.arg;
            return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, p) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, p)
        }

        function _(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function O(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function j(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(_, this), this.reset(!0)
        }

        function k(t) {
            if (t) {
                var e = t[i];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var n = -1,
                        o = function e() {
                            for (; ++n < t.length;)
                                if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e
                        };
                    return o.next = o
                }
            }
            return {
                next: P
            }
        }

        function P() {
            return {
                value: void 0,
                done: !0
            }
        }
        return d.prototype = v, n(b, "constructor", {
            value: v,
            configurable: !0
        }), n(v, "constructor", {
            value: d,
            configurable: !0
        }), d.displayName = s(v, l, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
        }, t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, s(t, l, "GeneratorFunction")), t.prototype = Object.create(b), t
        }, t.awrap = function(t) {
            return {
                __await: t
            }
        }, L(x.prototype), s(x.prototype, c, (function() {
            return this
        })), t.AsyncIterator = x, t.async = function(e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new x(f(e, r, n, o), i);
            return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                return t.done ? t.value : a.next()
            }))
        }, L(b), s(b, l, "Generator"), s(b, i, (function() {
            return this
        })), s(b, "toString", (function() {
            return "[object Generator]"
        })), t.keys = function(t) {
            var e = Object(t),
                r = [];
            for (var n in e) r.push(n);
            return r.reverse(),
                function t() {
                    for (; r.length;) {
                        var n = r.pop();
                        if (n in e) return t.value = n, t.done = !1, t
                    }
                    return t.done = !0, t
                }
        }, t.values = k, j.prototype = {
            constructor: j,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
                    for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var e = this;

                function n(r, n) {
                    return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var i = this.tryEntries[o],
                        a = i.completion;
                    if ("root" === i.tryLoc) return n("end");
                    if (i.tryLoc <= this.prev) {
                        var c = r.call(i, "catchLoc"),
                            u = r.call(i, "finallyLoc");
                        if (c && u) {
                            if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                        } else if (c) {
                            if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                        } else {
                            if (!u) throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(a)
            },
            complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), p
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            O(r)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, e, r) {
                return this.delegate = {
                    iterator: k(t),
                    resultName: e,
                    nextLoc: r
                }, "next" === this.method && (this.arg = void 0), p
            }
        }, t
    }

    function l(t, e, r, n, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value
        } catch (t) {
            return void r(t)
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o)
    }

    function s(t) {
        return function() {
            var e = this,
                r = arguments;
            return new Promise((function(n, o) {
                var i = t.apply(e, r);

                function a(t) {
                    l(i, n, o, a, c, "next", t)
                }

                function c(t) {
                    l(i, n, o, a, c, "throw", t)
                }
                a(void 0)
            }))
        }
    }
    var f = (null === (c = document.getElementById("cookiePolicyModal")) || void 0 === c ? void 0 : c.getAttribute("data-project")) || "tm",
        h = (i.settings[f] || i.settings.tm).cookieDomain,
        p = function(t) {
            for (var e = t + "=", r = document.cookie.split(";"), n = 0; n < r.length; n++) {
                for (var o = r[n];
                    " " == o.charAt(0);) o = o.substring(1);
                if (0 == o.indexOf(e)) return o.substring(e.length, o.length)
            }
            return ""
        },
        y = function(t, e, r, n) {
            var o = new Date;
            o.setTime(o.getTime() + 24 * r * 60 * 60 * 1e3);
            var i = "expires=" + o.toUTCString();
            document.cookie = "".concat(t, "=").concat(e, ";").concat(i, ";path=/;domain=").concat(n)
        };

    function d() {
        window.dataLayer.push(arguments)
    }
    var v = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default",
                e = arguments.length > 1 ? arguments[1] : void 0;
            window.dataLayer = window.dataLayer || [];
            var r = p("cp"),
                n = e || JSON.parse(r),
                o = (null == n ? void 0 : n.n) && (null == n ? void 0 : n.a) && (null == n ? void 0 : n.t),
                i = null == n ? void 0 : n.n,
                a = null == n ? void 0 : n.a,
                c = null == n ? void 0 : n.t;
            d("consent", t, {
                ad_storage: o || c ? "granted" : "denied",
                ad_user_data: o || c ? "granted" : "denied",
                ad_personalization: o || c ? "granted" : "denied",
                analytics_storage: o || a ? "granted" : "denied",
                functionality_storage: o || i || a ? "granted" : "denied",
                personalization_storage: o || i || a ? "granted" : "denied",
                security_storage: "granted"
            }), "update" === t && window.dataLayer.push({
                event: "consent_updated"
            })
        },
        m = function() {
            var t = s(u().mark((function t() {
                var e, r, n;
                return u().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e = "".concat(i.serviceGeo, "ips/my"), t.next = 3, fetch(e);
                        case 3:
                            return r = t.sent, t.next = 6, r.json();
                        case 6:
                            return n = t.sent, t.abrupt("return", n || {});
                        case 8:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })));
            return function() {
                return t.apply(this, arguments)
            }
        }(),
        g = function() {
            var t = s(u().mark((function t() {
                var e, r, n, o, a, c;
                return u().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (e = p("country_code"), r = "", !e) {
                                t.next = 6;
                                break
                            }
                            r = e, t.next = 16;
                            break;
                        case 6:
                            return t.prev = 6, t.next = 9, m();
                        case 9:
                            n = t.sent, r = null == n ? void 0 : n.country_code, y("country_code", r, 14, h), t.next = 16;
                            break;
                        case 14:
                            t.prev = 14, t.t0 = t.catch(6);
                        case 16:
                            o = Object.keys(i.countriesEurope), a = null == o ? void 0 : o.find((function(t) {
                                return t === r
                            })), d("consent", "default", {
                                ad_storage: c = a ? "denied" : "granted",
                                ad_user_data: c,
                                ad_personalization: c,
                                analytics_storage: c,
                                functionality_storage: c,
                                personalization_storage: c,
                                security_storage: "granted"
                            });
                        case 20:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [6, 14]
                ])
            })));
            return function() {
                return t.apply(this, arguments)
            }
        }();

    function w(t) {
        return w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, w(t)
    }

    function b() {
        b = function() {
            return t
        };
        var t = {},
            e = Object.prototype,
            r = e.hasOwnProperty,
            n = Object.defineProperty || function(t, e, r) {
                t[e] = r.value
            },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";

        function u(t, e, r) {
            return Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), t[e]
        }
        try {
            u({}, "")
        } catch (t) {
            u = function(t, e, r) {
                return t[e] = r
            }
        }

        function l(t, e, r, o) {
            var i = e && e.prototype instanceof h ? e : h,
                a = Object.create(i.prototype),
                c = new j(o || []);
            return n(a, "_invoke", {
                value: E(t, r, c)
            }), a
        }

        function s(t, e, r) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, r)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        t.wrap = l;
        var f = {};

        function h() {}

        function p() {}

        function y() {}
        var d = {};
        u(d, i, (function() {
            return this
        }));
        var v = Object.getPrototypeOf,
            m = v && v(v(k([])));
        m && m !== e && r.call(m, i) && (d = m);
        var g = y.prototype = h.prototype = Object.create(d);

        function L(t) {
            ["next", "throw", "return"].forEach((function(e) {
                u(t, e, (function(t) {
                    return this._invoke(e, t)
                }))
            }))
        }

        function x(t, e) {
            function o(n, i, a, c) {
                var u = s(t[n], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        f = l.value;
                    return f && "object" == w(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                        o("next", t, a, c)
                    }), (function(t) {
                        o("throw", t, a, c)
                    })) : e.resolve(f).then((function(t) {
                        l.value = t, a(l)
                    }), (function(t) {
                        return o("throw", t, a, c)
                    }))
                }
                c(u.arg)
            }
            var i;
            n(this, "_invoke", {
                value: function(t, r) {
                    function n() {
                        return new e((function(e, n) {
                            o(t, r, e, n)
                        }))
                    }
                    return i = i ? i.then(n, n) : n()
                }
            })
        }

        function E(t, e, r) {
            var n = "suspendedStart";
            return function(o, i) {
                if ("executing" === n) throw new Error("Generator is already running");
                if ("completed" === n) {
                    if ("throw" === o) throw i;
                    return P()
                }
                for (r.method = o, r.arg = i;;) {
                    var a = r.delegate;
                    if (a) {
                        var c = S(a, r);
                        if (c) {
                            if (c === f) continue;
                            return c
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if ("suspendedStart" === n) throw n = "completed", r.arg;
                        r.dispatchException(r.arg)
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = "executing";
                    var u = s(t, e, r);
                    if ("normal" === u.type) {
                        if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
                        return {
                            value: u.arg,
                            done: r.done
                        }
                    }
                    "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                }
            }
        }

        function S(t, e) {
            var r = e.method,
                n = t.iterator[r];
            if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, S(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
            var o = s(n, t.iterator, e.arg);
            if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
            var i = o.arg;
            return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
        }

        function _(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function O(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function j(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(_, this), this.reset(!0)
        }

        function k(t) {
            if (t) {
                var e = t[i];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var n = -1,
                        o = function e() {
                            for (; ++n < t.length;)
                                if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e
                        };
                    return o.next = o
                }
            }
            return {
                next: P
            }
        }

        function P() {
            return {
                value: void 0,
                done: !0
            }
        }
        return p.prototype = y, n(g, "constructor", {
            value: y,
            configurable: !0
        }), n(y, "constructor", {
            value: p,
            configurable: !0
        }), p.displayName = u(y, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
        }, t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
        }, t.awrap = function(t) {
            return {
                __await: t
            }
        }, L(x.prototype), u(x.prototype, a, (function() {
            return this
        })), t.AsyncIterator = x, t.async = function(e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new x(l(e, r, n, o), i);
            return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                return t.done ? t.value : a.next()
            }))
        }, L(g), u(g, c, "Generator"), u(g, i, (function() {
            return this
        })), u(g, "toString", (function() {
            return "[object Generator]"
        })), t.keys = function(t) {
            var e = Object(t),
                r = [];
            for (var n in e) r.push(n);
            return r.reverse(),
                function t() {
                    for (; r.length;) {
                        var n = r.pop();
                        if (n in e) return t.value = n, t.done = !1, t
                    }
                    return t.done = !0, t
                }
        }, t.values = k, j.prototype = {
            constructor: j,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
                    for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var e = this;

                function n(r, n) {
                    return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var i = this.tryEntries[o],
                        a = i.completion;
                    if ("root" === i.tryLoc) return n("end");
                    if (i.tryLoc <= this.prev) {
                        var c = r.call(i, "catchLoc"),
                            u = r.call(i, "finallyLoc");
                        if (c && u) {
                            if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                        } else if (c) {
                            if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                        } else {
                            if (!u) throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
            },
            complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), f
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            O(r)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, e, r) {
                return this.delegate = {
                    iterator: k(t),
                    resultName: e,
                    nextLoc: r
                }, "next" === this.method && (this.arg = void 0), f
            }
        }, t
    }

    function L(t, e, r, n, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value
        } catch (t) {
            return void r(t)
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o)
    }
    var x, E = p("cp");
    (x = b().mark((function t() {
        var e;
        return b().wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    if (E) {
                        t.next = 6;
                        break
                    }
                    return window.dataLayer = window.dataLayer || [], t.next = 4, g();
                case 4:
                    t.next = 7;
                    break;
                case 6:
                    v("default");
                case 7:
                    e = new Event("InitGTM"), document.dispatchEvent(e);
                case 9:
                case "end":
                    return t.stop()
            }
        }), t)
    })), function() {
        var t = this,
            e = arguments;
        return new Promise((function(r, n) {
            var o = x.apply(t, e);

            function i(t) {
                L(o, r, n, i, a, "next", t)
            }

            function a(t) {
                L(o, r, n, i, a, "throw", t)
            }
            i(void 0)
        }))
    })()
})();