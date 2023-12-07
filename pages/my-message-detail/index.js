(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my-message-detail/index" ], {
    71: function(e, n, t) {
        (function(e) {
            t(5);
            o(t(4));
            var n = o(t(72));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, e(n.default);
        }).call(this, t(1).createPage);
    },
    72: function(e, n, t) {
        t.r(n);
        var o = t(73), r = t(75);
        for (var a in r) "default" !== a && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(a);
        t(77);
        var c = t(11), u = Object(c.default)(r.default, o.render, o.staticRenderFns, !1, null, "3f2dbf32", null, !1, o.components, void 0);
        u.options.__file = "pages/my-message-detail/index.vue", n.default = u.exports;
    },
    73: function(e, n, t) {
        t.r(n);
        var o = t(74);
        t.d(n, "render", function() {
            return o.render;
        }), t.d(n, "staticRenderFns", function() {
            return o.staticRenderFns;
        }), t.d(n, "recyclableRender", function() {
            return o.recyclableRender;
        }), t.d(n, "components", function() {
            return o.components;
        });
    },
    74: function(e, n, t) {
        var o;
        t.r(n), t.d(n, "render", function() {
            return r;
        }), t.d(n, "staticRenderFns", function() {
            return c;
        }), t.d(n, "recyclableRender", function() {
            return a;
        }), t.d(n, "components", function() {
            return o;
        });
        try {
            o = {
                FootCopyRight: function() {
                    return t.e("components/FootCopyRight/FootCopyRight").then(t.bind(null, 167));
                }
            };
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            if (-1 === e.message.indexOf("Cannot find module") || -1 === e.message.indexOf(".vue")) throw e;
            console.error(e.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), 
            console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件");
        }
        var r = function() {
            var e = this.$createElement;
            this._self._c;
        }, a = !1, c = [];
        r._withStripped = !0;
    },
    75: function(e, n, t) {
        t.r(n);
        var o = t(76), r = t.n(o);
        for (var a in o) "default" !== a && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        n.default = r.a;
    },
    76: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            data: function() {
                return {
                    message: {}
                };
            },
            onLoad: function(e) {
                this.message = JSON.parse(e.message), console.log("this.message", this.message);
            },
            methods: {}
        };
        n.default = o;
    },
    77: function(e, n, t) {
        t.r(n);
        var o = t(78), r = t.n(o);
        for (var a in o) "default" !== a && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        n.default = r.a;
    },
    78: function(e, n, t) {}
}, [ [ 71, "common/runtime", "common/vendor" ] ] ]);