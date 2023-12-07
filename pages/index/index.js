(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/index" ], {
    53: function(n, e, t) {
        (function(n) {
            t(5);
            r(t(4));
            var e = r(t(54));
            function r(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(e.default);
        }).call(this, t(1).createPage);
    },
    54: function(n, e, t) {
        t.r(e);
        var r = t(55), o = t(57);
        for (var i in o) "default" !== i && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(i);
        t(59);
        var u = t(11), a = Object(u.default)(o.default, r.render, r.staticRenderFns, !1, null, "57280228", null, !1, r.components, void 0);
        a.options.__file = "pages/index/index.vue", e.default = a.exports;
    },
    55: function(n, e, t) {
        t.r(e);
        var r = t(56);
        t.d(e, "render", function() {
            return r.render;
        }), t.d(e, "staticRenderFns", function() {
            return r.staticRenderFns;
        }), t.d(e, "recyclableRender", function() {
            return r.recyclableRender;
        }), t.d(e, "components", function() {
            return r.components;
        });
    },
    56: function(n, e, t) {
        var r;
        t.r(e), t.d(e, "render", function() {
            return o;
        }), t.d(e, "staticRenderFns", function() {
            return u;
        }), t.d(e, "recyclableRender", function() {
            return i;
        }), t.d(e, "components", function() {
            return r;
        });
        try {
            r = {
                uSwiper: function() {
                    return t.e("uview-ui/components/u-swiper/u-swiper").then(t.bind(null, 160));
                },
                FootCopyRight: function() {
                    return t.e("components/FootCopyRight/FootCopyRight").then(t.bind(null, 167));
                }
            };
        } catch (n) {
            n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
            if (-1 === n.message.indexOf("Cannot find module") || -1 === n.message.indexOf(".vue")) throw n;
            console.error(n.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), 
            console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件");
        }
        var o = function() {
            var n = this.$createElement;
            this._self._c;
        }, i = !1, u = [];
        o._withStripped = !0;
    },
    57: function(n, e, t) {
        t.r(e);
        var r = t(58), o = t.n(r);
        for (var i in r) "default" !== i && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(i);
        e.default = o.a;
    },
    58: function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r, o = (r = t(48)) && r.__esModule ? r : {
                default: r
            };
            function i(n, e, t, r, o, i, u) {
                try {
                    var a = n[i](u), c = a.value;
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    return void t(n);
                }
                a.done ? e(c) : Promise.resolve(c).then(r, o);
            }
            var u = {
                data: function() {
                    return {
                        current: 0,
                        welcomeInfo: "您好，欢迎您关注辽宁省公安厅机场公安局微信平台",
                        gridList: [ {
                            text: "组织架构",
                            image: "/static/menu7.png"
                        }, {
                            text: "执法公开",
                            image: "/static/menu8.png"
                        }, {
                            text: "行政机构",
                            image: "/static/menu9.png"
                        }, {
                            text: "营商环境献言献策",
                            image: "/static/menu10.png"
                        } ],
                        list: []
                    };
                },
                onLoad: function() {
                    this.getData();
                },
                methods: {
                    getData: function() {
                        var n, e = this;
                        return (n = o.default.mark(function n() {
                            var t;
                            return o.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$u.api.governmentIndex();

                                  case 2:
                                    t = n.sent, e.list = t.data.atm, e.welcomeInfo = e.list[0].content;

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }), function() {
                            var e = this, t = arguments;
                            return new Promise(function(r, o) {
                                var u = n.apply(e, t);
                                function a(n) {
                                    i(u, r, o, a, c, "next", n);
                                }
                                function c(n) {
                                    i(u, r, o, a, c, "throw", n);
                                }
                                a(void 0);
                            });
                        })();
                    },
                    redirect: function(e) {
                        3 === e ? n.navigateTo({
                            url: "../message/index"
                        }) : n.navigateTo({
                            url: "../informations/index?dataType=".concat(e)
                        });
                    },
                    swiperChange: function(n) {
                        this.current = n, this.welcomeInfo = this.list[n].content;
                    }
                }
            };
            e.default = u;
        }).call(this, t(1).default);
    },
    59: function(n, e, t) {
        t.r(e);
        var r = t(60), o = t.n(r);
        for (var i in r) "default" !== i && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(i);
        e.default = o.a;
    },
    60: function(n, e, t) {}
}, [ [ 53, "common/runtime", "common/vendor" ] ] ]);