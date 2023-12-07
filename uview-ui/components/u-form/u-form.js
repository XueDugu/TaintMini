(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-form/u-form" ], {
    188: function(e, n, t) {
        t.r(n);
        var r = t(189), o = t(191);
        for (var u in o) "default" !== u && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(u);
        t(193);
        var i = t(11), f = Object(i.default)(o.default, r.render, r.staticRenderFns, !1, null, "5dd1f800", null, !1, r.components, void 0);
        f.options.__file = "uview-ui/components/u-form/u-form.vue", n.default = f.exports;
    },
    189: function(e, n, t) {
        t.r(n);
        var r = t(190);
        t.d(n, "render", function() {
            return r.render;
        }), t.d(n, "staticRenderFns", function() {
            return r.staticRenderFns;
        }), t.d(n, "recyclableRender", function() {
            return r.recyclableRender;
        }), t.d(n, "components", function() {
            return r.components;
        });
    },
    190: function(e, n, t) {
        t.r(n), t.d(n, "render", function() {
            return r;
        }), t.d(n, "staticRenderFns", function() {
            return u;
        }), t.d(n, "recyclableRender", function() {
            return o;
        }), t.d(n, "components", function() {});
        var r = function() {
            var e = this.$createElement;
            this._self._c;
        }, o = !1, u = [];
        r._withStripped = !0;
    },
    191: function(e, n, t) {
        t.r(n);
        var r = t(192), o = t.n(r);
        for (var u in r) "default" !== u && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(u);
        n.default = o.a;
    },
    192: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = {
            name: "u-form",
            props: {
                model: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                errorType: {
                    type: Array,
                    default: function() {
                        return [ "message", "toast" ];
                    }
                },
                borderBottom: {
                    type: Boolean,
                    default: !0
                },
                labelPosition: {
                    type: String,
                    default: "left"
                },
                labelWidth: {
                    type: [ String, Number ],
                    default: 90
                },
                labelAlign: {
                    type: String,
                    default: "left"
                },
                labelStyle: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            provide: function() {
                return {
                    uForm: this
                };
            },
            data: function() {
                return {
                    rules: {}
                };
            },
            created: function() {
                this.fields = [];
            },
            methods: {
                setRules: function(e) {
                    this.rules = e;
                },
                resetFields: function() {
                    this.fields.map(function(e) {
                        e.resetField();
                    });
                },
                validate: function(e) {
                    var n = this;
                    return new Promise(function(t) {
                        var r = !0, o = 0, u = [];
                        n.fields.map(function(i) {
                            i.validation("", function(i) {
                                i && (r = !1, u.push(i)), ++o === n.fields.length && (t(r), -1 === n.errorType.indexOf("none") && n.errorType.indexOf("toast") >= 0 && u.length && n.$u.toast(u[0]), 
                                "function" == typeof e && e(r));
                            });
                        });
                    });
                }
            }
        };
        n.default = r;
    },
    193: function(e, n, t) {
        t.r(n);
        var r = t(194), o = t.n(r);
        for (var u in r) "default" !== u && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(u);
        n.default = o.a;
    },
    194: function(e, n, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-form/u-form-create-component", {
    "uview-ui/components/u-form/u-form-create-component": function(e, n, t) {
        t("1").createComponent(t(188));
    }
}, [ [ "uview-ui/components/u-form/u-form-create-component" ] ] ]);