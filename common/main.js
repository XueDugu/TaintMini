(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], [ function(e, n, t) {
    (function(e) {
        t(5);
        var n = l(t(4)), o = l(t(6)), r = l(t(12)), a = l(t(38)), u = l(t(40));
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function c(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                n && (o = o.filter(function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable;
                })), t.push.apply(t, o);
            }
            return t;
        }
        function i(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e;
        }
        wx.__webpack_require_UNI_MP_PLUGIN__ = t, n.default.config.productionTip = !1, o.default.mpType = "app", 
        n.default.use(r.default);
        var f = new n.default(function(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? c(Object(t), !0).forEach(function(n) {
                    i(e, n, t[n]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                });
            }
            return e;
        }({}, o.default)), d = t(41);
        n.default.mixin(d), n.default.use(a.default, f), n.default.use(u.default, f), e(f).$mount();
    }).call(this, t(1).createApp);
}, , , , , , function(e, n, t) {
    t.r(n);
    var o = t(7);
    for (var r in o) "default" !== r && function(e) {
        t.d(n, e, function() {
            return o[e];
        });
    }(r);
    t(9);
    var a = t(11), u = Object(a.default)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
    u.options.__file = "App.vue", n.default = u.exports;
}, function(e, n, t) {
    t.r(n);
    var o = t(8), r = t.n(o);
    for (var a in o) "default" !== a && function(e) {
        t.d(n, e, function() {
            return o[e];
        });
    }(a);
    n.default = r.a;
}, function(e, n, t) {
    (function(e) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var t = {
            globalData: {
                messageIndex: 0,
                userInfo: {
                    openid: null,
                    avatarUrl: null,
                    nickName: null
                },
                hasLogin: !1
            },
            onLaunch: function() {
                var n = e.getUpdateManager();
                n.onCheckForUpdate(function(t) {
                    t.hasUpdate && n.onUpdateReady(function(t) {
                        e.showModal({
                            title: "更新提示",
                            content: "发现新版本，是否重启小程序？",
                            success: function(e) {
                                e.confirm && n.applyUpdate();
                            }
                        });
                    });
                });
                try {
                    var t = e.getStorageSync("userInfo");
                    if (!t) return;
                    this.globalData.hasLogin = !0, this.globalData.userInfo = t;
                } catch (e) {}
                console.log("userInfo", this.globalData.userInfo), console.log("App Launch");
            },
            onShow: function() {
                console.log("App Show");
            },
            onHide: function() {
                console.log("App Hide");
            }
        };
        n.default = t;
    }).call(this, t(1).default);
}, function(e, n, t) {
    t.r(n);
    var o = t(10), r = t.n(o);
    for (var a in o) "default" !== a && function(e) {
        t.d(n, e, function() {
            return o[e];
        });
    }(a);
    n.default = r.a;
}, function(e, n, t) {} ], [ [ 0, "common/runtime", "common/vendor" ] ] ]);