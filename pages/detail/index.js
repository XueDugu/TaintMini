(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/detail/index" ], {
    136: function(n, e, t) {
        (function(n) {
            t(5);
            o(t(4));
            var e = o(t(137));
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(e.default);
        }).call(this, t(1).createPage);
    },
    137: function(n, e, t) {
        t.r(e);
        var o = t(138), r = t(140);
        for (var a in r) "default" !== a && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(a);
        t(142);
        var i = t(11), u = Object(i.default)(r.default, o.render, o.staticRenderFns, !1, null, "12dbf08d", null, !1, o.components, void 0);
        u.options.__file = "pages/detail/index.vue", e.default = u.exports;
    },
    138: function(n, e, t) {
        t.r(e);
        var o = t(139);
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
    139: function(n, e, t) {
        var o;
        t.r(e), t.d(e, "render", function() {
            return r;
        }), t.d(e, "staticRenderFns", function() {
            return i;
        }), t.d(e, "recyclableRender", function() {
            return a;
        }), t.d(e, "components", function() {
            return o;
        });
        try {
            o = {
                uParse: function() {
                    return Promise.all([ t.e("common/vendor"), t.e("uview-ui/components/u-parse/u-parse") ]).then(t.bind(null, 265));
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
        var r = function() {
            var n = this.$createElement;
            this._self._c;
        }, a = !1, i = [];
        r._withStripped = !0;
    },
    140: function(n, e, t) {
        t.r(e);
        var o = t(141), r = t.n(o);
        for (var a in o) "default" !== a && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        e.default = r.a;
    },
    141: function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o, r = (o = t(48)) && o.__esModule ? o : {
                default: o
            };
            function a(n, e, t, o, r, a, i) {
                try {
                    var u = n[a](i), c = u.value;
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    return void t(n);
                }
                u.done ? e(c) : Promise.resolve(c).then(o, r);
            }
            var i = {
                data: function() {
                    return {
                        dataInfo: {},
                        title: "详情",
                        tagStyle: {
                            p: "font-size: 15px!important;",
                            span: "font-size: 15px!important;",
                            video: "width: 320px; height: 240px;object-fit: contain;margin: 0 auto;display: block;"
                        },
                        content: "\n            <p>暂无数据，去其他页面看看吧~</p>\n          "
                    };
                },
                onLoad: function(n) {
                    this.getDetail({
                        id: n.id
                    });
                },
                methods: {
                    getDetail: function(e) {
                        var t, o = this;
                        return (t = r.default.mark(function t() {
                            var a;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, o.$u.api.details(e);

                                  case 2:
                                    a = t.sent, o.dataInfo = a.data.dataInfo, o.content = a.data.dataInfo.content, n.setNavigationBarTitle({
                                        title: a.data.dataInfo.title
                                    });

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }), function() {
                            var n = this, e = arguments;
                            return new Promise(function(o, r) {
                                var i = t.apply(n, e);
                                function u(n) {
                                    a(i, o, r, u, c, "next", n);
                                }
                                function c(n) {
                                    a(i, o, r, u, c, "throw", n);
                                }
                                u(void 0);
                            });
                        })();
                    }
                }
            };
            e.default = i;
        }).call(this, t(1).default);
    },
    142: function(n, e, t) {
        t.r(e);
        var o = t(143), r = t.n(o);
        for (var a in o) "default" !== a && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        e.default = r.a;
    },
    143: function(n, e, t) {}
}, [ [ 136, "common/runtime", "common/vendor" ] ] ]);