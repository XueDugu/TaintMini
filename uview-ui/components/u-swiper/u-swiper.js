(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-swiper/u-swiper" ], {
    160: function(t, e, n) {
        n.r(e);
        var r = n(161), i = n(163);
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        n(165);
        var u = n(11), a = Object(u.default)(i.default, r.render, r.staticRenderFns, !1, null, "a5b2d580", null, !1, r.components, void 0);
        a.options.__file = "uview-ui/components/u-swiper/u-swiper.vue", e.default = a.exports;
    },
    161: function(t, e, n) {
        n.r(e);
        var r = n(162);
        n.d(e, "render", function() {
            return r.render;
        }), n.d(e, "staticRenderFns", function() {
            return r.staticRenderFns;
        }), n.d(e, "recyclableRender", function() {
            return r.recyclableRender;
        }), n.d(e, "components", function() {
            return r.components;
        });
    },
    162: function(t, e, n) {
        n.r(e), n.d(e, "render", function() {
            return r;
        }), n.d(e, "staticRenderFns", function() {
            return o;
        }), n.d(e, "recyclableRender", function() {
            return i;
        }), n.d(e, "components", function() {});
        var r = function() {
            var t = this, e = t.$createElement, n = (t._self._c, t.__map(t.list, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    s0: t.title && e.title ? t.__get_style([ {
                        "padding-bottom": t.titlePaddingBottom
                    }, t.titleStyle ]) : null
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: n
                }
            });
        }, i = !1, o = [];
        r._withStripped = !0;
    },
    163: function(t, e, n) {
        n.r(e);
        var r = n(164), i = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = i.a;
    },
    164: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = {
            name: "u-swiper",
            props: {
                list: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                title: {
                    type: Boolean,
                    default: !1
                },
                indicator: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                borderRadius: {
                    type: [ Number, String ],
                    default: 8
                },
                interval: {
                    type: [ String, Number ],
                    default: 3e3
                },
                mode: {
                    type: String,
                    default: "round"
                },
                height: {
                    type: [ Number, String ],
                    default: 250
                },
                indicatorPos: {
                    type: String,
                    default: "bottomCenter"
                },
                effect3d: {
                    type: Boolean,
                    default: !1
                },
                effect3dPreviousMargin: {
                    type: [ Number, String ],
                    default: 50
                },
                autoplay: {
                    type: Boolean,
                    default: !0
                },
                duration: {
                    type: [ Number, String ],
                    default: 500
                },
                circular: {
                    type: Boolean,
                    default: !0
                },
                imgMode: {
                    type: String,
                    default: "aspectFill"
                },
                name: {
                    type: String,
                    default: "image"
                },
                bgColor: {
                    type: String,
                    default: "#f3f4f6"
                },
                current: {
                    type: [ Number, String ],
                    default: 0
                },
                titleStyle: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            watch: {
                list: function(t, e) {
                    t.length !== e.length && (this.uCurrent = 0);
                },
                current: function(t) {
                    this.uCurrent = t;
                }
            },
            data: function() {
                return {
                    uCurrent: this.current
                };
            },
            computed: {
                justifyContent: function() {
                    return "topLeft" == this.indicatorPos || "bottomLeft" == this.indicatorPos ? "flex-start" : "topCenter" == this.indicatorPos || "bottomCenter" == this.indicatorPos ? "center" : "topRight" == this.indicatorPos || "bottomRight" == this.indicatorPos ? "flex-end" : void 0;
                },
                titlePaddingBottom: function() {
                    return "none" == this.mode ? "12rpx" : [ "bottomLeft", "bottomCenter", "bottomRight" ].indexOf(this.indicatorPos) >= 0 && "number" == this.mode ? "60rpx" : [ "bottomLeft", "bottomCenter", "bottomRight" ].indexOf(this.indicatorPos) >= 0 && "number" != this.mode ? "40rpx" : "12rpx";
                },
                elCurrent: function() {
                    return Number(this.current);
                }
            },
            methods: {
                listClick: function(t) {
                    this.$emit("click", t);
                },
                change: function(t) {
                    var e = t.detail.current;
                    this.uCurrent = e, this.$emit("change", e);
                },
                animationfinish: function(t) {}
            }
        };
        e.default = r;
    },
    165: function(t, e, n) {
        n.r(e);
        var r = n(166), i = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = i.a;
    },
    166: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-swiper/u-swiper-create-component", {
    "uview-ui/components/u-swiper/u-swiper-create-component": function(t, e, n) {
        n("1").createComponent(n(160));
    }
}, [ [ "uview-ui/components/u-swiper/u-swiper-create-component" ] ] ]);