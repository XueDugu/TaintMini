(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-badge/u-badge" ], {
    303: function(t, e, n) {
        n.r(e);
        var o = n(304), r = n(306);
        for (var u in r) "default" !== u && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        n(308);
        var a = n(11), i = Object(a.default)(r.default, o.render, o.staticRenderFns, !1, null, "2b1712d8", null, !1, o.components, void 0);
        i.options.__file = "uview-ui/components/u-badge/u-badge.vue", e.default = i.exports;
    },
    304: function(t, e, n) {
        n.r(e);
        var o = n(305);
        n.d(e, "render", function() {
            return o.render;
        }), n.d(e, "staticRenderFns", function() {
            return o.staticRenderFns;
        }), n.d(e, "recyclableRender", function() {
            return o.recyclableRender;
        }), n.d(e, "components", function() {
            return o.components;
        });
    },
    305: function(t, e, n) {
        n.r(e), n.d(e, "render", function() {
            return o;
        }), n.d(e, "staticRenderFns", function() {
            return u;
        }), n.d(e, "recyclableRender", function() {
            return r;
        }), n.d(e, "components", function() {});
        var o = function() {
            var t = this, e = t.$createElement, n = (t._self._c, t.show ? t.__get_style([ {
                top: t.offset[0] + "rpx",
                right: t.offset[1] + "rpx",
                fontSize: t.fontSize + "rpx",
                position: t.absolute ? "absolute" : "static",
                color: t.color,
                backgroundColor: t.bgColor
            }, t.boxStyle ]) : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    s0: n
                }
            });
        }, r = !1, u = [];
        o._withStripped = !0;
    },
    306: function(t, e, n) {
        n.r(e);
        var o = n(307), r = n.n(o);
        for (var u in o) "default" !== u && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        e.default = r.a;
    },
    307: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            name: "u-badge",
            props: {
                type: {
                    type: String,
                    default: "error"
                },
                size: {
                    type: String,
                    default: "default"
                },
                isDot: {
                    type: Boolean,
                    default: !1
                },
                count: {
                    type: [ Number, String ]
                },
                overflowCount: {
                    type: Number,
                    default: 99
                },
                showZero: {
                    type: Boolean,
                    default: !1
                },
                offset: {
                    type: Array,
                    default: function() {
                        return [ 20, 20 ];
                    }
                },
                absolute: {
                    type: Boolean,
                    default: !0
                },
                fontSize: {
                    type: [ String, Number ],
                    default: "24"
                },
                color: {
                    type: String,
                    default: "#ffffff"
                },
                bgColor: {
                    type: String,
                    default: ""
                },
                isCenter: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                boxStyle: function() {
                    var t = {};
                    return this.isCenter ? (t.top = 0, t.right = 0, t.transform = "translateY(-50%) translateX(50%)") : (t.top = this.offset[0] + "rpx", 
                    t.right = this.offset[1] + "rpx", t.transform = "translateY(0) translateX(0)"), 
                    "mini" == this.size && (t.transform = t.transform + " scale(0.8)"), t;
                },
                showText: function() {
                    return this.isDot ? "" : this.count > this.overflowCount ? "".concat(this.overflowCount, "+") : this.count;
                },
                show: function() {
                    return 0 != this.count || 0 != this.showZero;
                }
            }
        };
        e.default = o;
    },
    308: function(t, e, n) {
        n.r(e);
        var o = n(309), r = n.n(o);
        for (var u in o) "default" !== u && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        e.default = r.a;
    },
    309: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-badge/u-badge-create-component", {
    "uview-ui/components/u-badge/u-badge-create-component": function(t, e, n) {
        n("1").createComponent(n(303));
    }
}, [ [ "uview-ui/components/u-badge/u-badge-create-component" ] ] ]);