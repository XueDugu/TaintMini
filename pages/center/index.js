(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/center/index" ], {
    152: function(n, e, t) {
        (function(n) {
            t(5);
            o(t(4));
            var e = o(t(153));
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(e.default);
        }).call(this, t(1).createPage);
    },
    153: function(n, e, t) {
        t.r(e);
        var o = t(154), r = t(156);
        for (var u in r) "default" !== u && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(u);
        t(158);
        var a = t(11), i = Object(a.default)(r.default, o.render, o.staticRenderFns, !1, null, null, null, !1, o.components, void 0);
        i.options.__file = "pages/center/index.vue", e.default = i.exports;
    },
    154: function(n, e, t) {
        t.r(e);
        var o = t(155);
        t.d(e, "render", function() {
            return o.render;
        }), t.d(e, "staticRenderFns", function() {
            return o.staticRenderFns;
        }), t.d(e, "recyclableRender", function() {
            return o.recyclableRender;
        }), t.d(e, "components", function() {
            return o.components;
        });
    },
    155: function(n, e, t) {
        t.r(e), t.d(e, "render", function() {
            return o;
        }), t.d(e, "staticRenderFns", function() {
            return u;
        }), t.d(e, "recyclableRender", function() {
            return r;
        }), t.d(e, "components", function() {});
        var o = function() {
            var n = this.$createElement;
            this._self._c;
        }, r = !1, u = [];
        o._withStripped = !0;
    },
    156: function(n, e, t) {
        t.r(e);
        var o = t(157), r = t.n(o);
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        e.default = r.a;
    },
    157: function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var t = getApp(), o = {
                data: function() {
                    return {
                        hasLogin: !1,
                        userInfo: null
                    };
                },
                onShow: function() {
                    this.userInfo = t.globalData.userInfo, this.hasLogin = t.globalData.hasLogin;
                },
                onLoad: function() {},
                methods: {
                    redirectLogin: function() {
                        n.navigateTo({
                            url: "../auth/index"
                        });
                    },
                    redirect: function(e) {
                        t.globalData.messageIndex = e, this.hasLogin ? n.navigateTo({
                            url: "../my-message/index"
                        }) : n.showModal({
                            title: "提示",
                            content: "请您登录后查看~",
                            success: function(e) {
                                e.confirm ? n.navigateTo({
                                    url: "../auth/index"
                                }) : e.cancel && console.log("用户点击取消");
                            }
                        });
                    }
                }
            };
            e.default = o;
        }).call(this, t(1).default);
    },
    158: function(n, e, t) {
        t.r(e);
        var o = t(159), r = t.n(o);
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        e.default = r.a;
    },
    159: function(n, e, t) {}
}, [ [ 152, "common/runtime", "common/vendor" ] ] ]);