(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-loadmore/u-loadmore" ], {
    181: function(e, t, o) {
        o.r(t);
        var n = o(182), r = o(184);
        for (var i in r) "default" !== i && function(e) {
            o.d(t, e, function() {
                return r[e];
            });
        }(i);
        o(186);
        var u = o(11), a = Object(u.default)(r.default, n.render, n.staticRenderFns, !1, null, "874545c0", null, !1, n.components, void 0);
        a.options.__file = "uview-ui/components/u-loadmore/u-loadmore.vue", t.default = a.exports;
    },
    182: function(e, t, o) {
        o.r(t);
        var n = o(183);
        o.d(t, "render", function() {
            return n.render;
        }), o.d(t, "staticRenderFns", function() {
            return n.staticRenderFns;
        }), o.d(t, "recyclableRender", function() {
            return n.recyclableRender;
        }), o.d(t, "components", function() {
            return n.components;
        });
    },
    183: function(e, t, o) {
        var n;
        o.r(t), o.d(t, "render", function() {
            return r;
        }), o.d(t, "staticRenderFns", function() {
            return u;
        }), o.d(t, "recyclableRender", function() {
            return i;
        }), o.d(t, "components", function() {
            return n;
        });
        try {
            n = {
                uLine: function() {
                    return o.e("uview-ui/components/u-line/u-line").then(o.bind(null, 282));
                },
                uLoading: function() {
                    return o.e("uview-ui/components/u-loading/u-loading").then(o.bind(null, 289));
                }
            };
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            if (-1 === e.message.indexOf("Cannot find module") || -1 === e.message.indexOf(".vue")) throw e;
            console.error(e.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), 
            console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件");
        }
        var r = function() {
            var e = this.$createElement, t = (this._self._c, this.$u.addUnit(this.height)), o = this.__get_style([ this.loadTextStyle ]);
            this.$mp.data = Object.assign({}, {
                $root: {
                    g0: t,
                    s0: o
                }
            });
        }, i = !1, u = [];
        r._withStripped = !0;
    },
    184: function(e, t, o) {
        o.r(t);
        var n = o(185), r = o.n(n);
        for (var i in n) "default" !== i && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(i);
        t.default = r.a;
    },
    185: function(e, t, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = {
            name: "u-loadmore",
            props: {
                bgColor: {
                    type: String,
                    default: "transparent"
                },
                icon: {
                    type: Boolean,
                    default: !0
                },
                fontSize: {
                    type: String,
                    default: "28"
                },
                color: {
                    type: String,
                    default: "#606266"
                },
                status: {
                    type: String,
                    default: "loadmore"
                },
                iconType: {
                    type: String,
                    default: "circle"
                },
                loadText: {
                    type: Object,
                    default: function() {
                        return {
                            loadmore: "加载更多",
                            loading: "正在加载...",
                            nomore: "没有更多了"
                        };
                    }
                },
                isDot: {
                    type: Boolean,
                    default: !1
                },
                iconColor: {
                    type: String,
                    default: "#b7b7b7"
                },
                marginTop: {
                    type: [ String, Number ],
                    default: 0
                },
                marginBottom: {
                    type: [ String, Number ],
                    default: 0
                },
                height: {
                    type: [ String, Number ],
                    default: "auto"
                }
            },
            data: function() {
                return {
                    dotText: "●"
                };
            },
            computed: {
                loadTextStyle: function() {
                    return {
                        color: this.color,
                        fontSize: this.fontSize + "rpx",
                        position: "relative",
                        zIndex: 1,
                        backgroundColor: this.bgColor
                    };
                },
                cricleStyle: function() {
                    return {
                        borderColor: "#e5e5e5 #e5e5e5 #e5e5e5 ".concat(this.circleColor)
                    };
                },
                flowerStyle: function() {
                    return {};
                },
                showText: function() {
                    return "loadmore" == this.status ? this.loadText.loadmore : "loading" == this.status ? this.loadText.loading : "nomore" == this.status && this.isDot ? this.dotText : this.loadText.nomore;
                }
            },
            methods: {
                loadMore: function() {
                    "loadmore" == this.status && this.$emit("loadmore");
                }
            }
        };
        t.default = n;
    },
    186: function(e, t, o) {
        o.r(t);
        var n = o(187), r = o.n(n);
        for (var i in n) "default" !== i && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(i);
        t.default = r.a;
    },
    187: function(e, t, o) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-loadmore/u-loadmore-create-component", {
    "uview-ui/components/u-loadmore/u-loadmore-create-component": function(e, t, o) {
        o("1").createComponent(o(181));
    }
}, [ [ "uview-ui/components/u-loadmore/u-loadmore-create-component" ] ] ]);