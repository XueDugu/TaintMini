(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-button/u-button" ], {
    213: function(t, e, n) {
        n.r(e);
        var i = n(214), r = n(216);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        n(218);
        var u = n(11), a = Object(u.default)(r.default, i.render, i.staticRenderFns, !1, null, "6e15e680", null, !1, i.components, void 0);
        a.options.__file = "uview-ui/components/u-button/u-button.vue", e.default = a.exports;
    },
    214: function(t, e, n) {
        n.r(e);
        var i = n(215);
        n.d(e, "render", function() {
            return i.render;
        }), n.d(e, "staticRenderFns", function() {
            return i.staticRenderFns;
        }), n.d(e, "recyclableRender", function() {
            return i.recyclableRender;
        }), n.d(e, "components", function() {
            return i.components;
        });
    },
    215: function(t, e, n) {
        n.r(e), n.d(e, "render", function() {
            return i;
        }), n.d(e, "staticRenderFns", function() {
            return o;
        }), n.d(e, "recyclableRender", function() {
            return r;
        }), n.d(e, "components", function() {});
        var i = function() {
            var t = this.$createElement, e = (this._self._c, this.__get_style([ this.customStyle, {
                overflow: this.ripple ? "hidden" : "visible"
            } ])), n = Number(this.hoverStartTime), i = Number(this.hoverStayTime);
            this.$mp.data = Object.assign({}, {
                $root: {
                    s0: e,
                    m0: n,
                    m1: i
                }
            });
        }, r = !1, o = [];
        i._withStripped = !0;
    },
    216: function(t, e, n) {
        n.r(e);
        var i = n(217), r = n.n(i);
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = r.a;
    },
    217: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "u-button",
                props: {
                    hairLine: {
                        type: Boolean,
                        default: !0
                    },
                    type: {
                        type: String,
                        default: "default"
                    },
                    size: {
                        type: String,
                        default: "default"
                    },
                    shape: {
                        type: String,
                        default: "square"
                    },
                    plain: {
                        type: Boolean,
                        default: !1
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    loading: {
                        type: Boolean,
                        default: !1
                    },
                    openType: {
                        type: String,
                        default: ""
                    },
                    formType: {
                        type: String,
                        default: ""
                    },
                    appParameter: {
                        type: String,
                        default: ""
                    },
                    hoverStopPropagation: {
                        type: Boolean,
                        default: !1
                    },
                    lang: {
                        type: String,
                        default: "en"
                    },
                    sessionFrom: {
                        type: String,
                        default: ""
                    },
                    sendMessageTitle: {
                        type: String,
                        default: ""
                    },
                    sendMessagePath: {
                        type: String,
                        default: ""
                    },
                    sendMessageImg: {
                        type: String,
                        default: ""
                    },
                    showMessageCard: {
                        type: Boolean,
                        default: !1
                    },
                    hoverBgColor: {
                        type: String,
                        default: ""
                    },
                    rippleBgColor: {
                        type: String,
                        default: ""
                    },
                    ripple: {
                        type: Boolean,
                        default: !1
                    },
                    hoverClass: {
                        type: String,
                        default: ""
                    },
                    customStyle: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    dataName: {
                        type: String,
                        default: ""
                    },
                    throttleTime: {
                        type: [ String, Number ],
                        default: 1e3
                    },
                    hoverStartTime: {
                        type: [ String, Number ],
                        default: 20
                    },
                    hoverStayTime: {
                        type: [ String, Number ],
                        default: 150
                    }
                },
                computed: {
                    getHoverClass: function() {
                        if (this.loading || this.disabled || this.ripple || this.hoverClass) return "";
                        return this.plain ? "u-" + this.type + "-plain-hover" : "u-" + this.type + "-hover";
                    },
                    showHairLineBorder: function() {
                        return [ "primary", "success", "error", "warning" ].indexOf(this.type) >= 0 && !this.plain ? "" : "u-hairline-border";
                    }
                },
                data: function() {
                    return {
                        rippleTop: 0,
                        rippleLeft: 0,
                        fields: {},
                        waveActive: !1
                    };
                },
                methods: {
                    click: function(t) {
                        var e = this;
                        this.$u.throttle(function() {
                            !0 !== e.loading && !0 !== e.disabled && (e.ripple && (e.waveActive = !1, e.$nextTick(function() {
                                this.getWaveQuery(t);
                            })), e.$emit("click", t));
                        }, this.throttleTime);
                    },
                    getWaveQuery: function(t) {
                        var e = this;
                        this.getElQuery().then(function(n) {
                            var i = n[0];
                            if (i.width && i.width && (i.targetWidth = i.height > i.width ? i.height : i.width, 
                            i.targetWidth)) {
                                e.fields = i;
                                var r, o;
                                r = t.touches[0].clientX, o = t.touches[0].clientY, e.rippleTop = o - i.top - i.targetWidth / 2, 
                                e.rippleLeft = r - i.left - i.targetWidth / 2, e.$nextTick(function() {
                                    e.waveActive = !0;
                                });
                            }
                        });
                    },
                    getElQuery: function() {
                        var e = this;
                        return new Promise(function(n) {
                            var i = "";
                            (i = t.createSelectorQuery().in(e)).select(".u-btn").boundingClientRect(), i.exec(function(t) {
                                n(t);
                            });
                        });
                    },
                    getphonenumber: function(t) {
                        this.$emit("getphonenumber", t);
                    },
                    getuserinfo: function(t) {
                        this.$emit("getuserinfo", t);
                    },
                    error: function(t) {
                        this.$emit("error", t);
                    },
                    opensetting: function(t) {
                        this.$emit("opensetting", t);
                    },
                    launchapp: function(t) {
                        this.$emit("launchapp", t);
                    }
                }
            };
            e.default = n;
        }).call(this, n(1).default);
    },
    218: function(t, e, n) {
        n.r(e);
        var i = n(219), r = n.n(i);
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = r.a;
    },
    219: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-button/u-button-create-component", {
    "uview-ui/components/u-button/u-button-create-component": function(t, e, n) {
        n("1").createComponent(n(213));
    }
}, [ [ "uview-ui/components/u-button/u-button-create-component" ] ] ]);