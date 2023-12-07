(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/auth/index" ], {
    112: function(n, e, t) {
        (function(n) {
            t(5);
            r(t(4));
            var e = r(t(113));
            function r(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(e.default);
        }).call(this, t(1).createPage);
    },
    113: function(n, e, t) {
        t.r(e);
        var r = t(114), o = t(116);
        for (var a in o) "default" !== a && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        t(118);
        var i = t(11), u = Object(i.default)(o.default, r.render, r.staticRenderFns, !1, null, null, null, !1, r.components, void 0);
        u.options.__file = "pages/auth/index.vue", e.default = u.exports;
    },
    114: function(n, e, t) {
        t.r(e);
        var r = t(115);
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
    115: function(n, e, t) {
        var r;
        t.r(e), t.d(e, "render", function() {
            return o;
        }), t.d(e, "staticRenderFns", function() {
            return i;
        }), t.d(e, "recyclableRender", function() {
            return a;
        }), t.d(e, "components", function() {
            return r;
        });
        try {
            r = {
                uButton: function() {
                    return t.e("uview-ui/components/u-button/u-button").then(t.bind(null, 213));
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
        }, a = !1, i = [];
        o._withStripped = !0;
    },
    116: function(n, e, t) {
        t.r(e);
        var r = t(117), o = t.n(r);
        for (var a in r) "default" !== a && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(a);
        e.default = o.a;
    },
    117: function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r, o = (r = t(48)) && r.__esModule ? r : {
                default: r
            };
            function a(n, e, t, r, o, a, i) {
                try {
                    var u = n[a](i), c = u.value;
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    return void t(n);
                }
                u.done ? e(c) : Promise.resolve(c).then(r, o);
            }
            function i(n) {
                return function() {
                    var e = this, t = arguments;
                    return new Promise(function(r, o) {
                        var i = n.apply(e, t);
                        function u(n) {
                            a(i, r, o, u, c, "next", n);
                        }
                        function c(n) {
                            a(i, r, o, u, c, "throw", n);
                        }
                        u(void 0);
                    });
                };
            }
            var u = getApp(), c = {
                data: function() {
                    return {
                        provider: "weixin",
                        userInfo: {},
                        buttonStyle: {
                            width: "570rpx",
                            height: "64rpx",
                            fontSize: "26rpx",
                            color: "#FFFFFF",
                            borderRadius: "0",
                            backgroundColor: "#2b64a7",
                            marginTop: "36rpx"
                        }
                    };
                },
                onLoad: function() {
                    var e = this;
                    n.getProvider({
                        service: "oauth",
                        success: function(n) {
                            e.provider = n.provider[0];
                        }
                    });
                },
                methods: {
                    getUserInfo: function(e) {
                        "getUserInfo:ok" === e.detail.errMsg ? (this.userInfo = e.detail.userInfo, "weixin" === this.provider ? this.wxLogin() : this.bgLogin()) : n.showModal({
                            title: "获取用户信息失败",
                            content: "请允许小程序获取您的用户名、头像等信息",
                            showCancel: !1
                        });
                    },
                    bgLogin: function() {
                        var e, t = this;
                        n.showLoading({
                            title: "登录中..."
                        }), n.login({
                            success: (e = i(o.default.mark(function e(r) {
                                var a, i;
                                return o.default.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return e.next = 2, t.$u.api.bdLogin({
                                            code: r.code
                                        });

                                      case 2:
                                        a = e.sent, n.hideLoading(), i = {
                                            avatarUrl: t.userInfo.avatarUrl,
                                            nickName: t.userInfo.nickName,
                                            openid: a.data.user_id
                                        };
                                        try {
                                            console.log("userInfo", i), n.setStorageSync("userInfo", i), u.globalData.userInfo = i, 
                                            u.globalData.hasLogin = !0, t.$u.toast("授权登录成功"), n.navigateBack({
                                                delta: 1
                                            });
                                        } catch (n) {}

                                      case 6:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                            })), function(n) {
                                return e.apply(this, arguments);
                            })
                        });
                    },
                    wxLogin: function() {
                        var e, t = this;
                        n.showLoading({
                            title: "登录中..."
                        }), n.login({
                            success: (e = i(o.default.mark(function e(r) {
                                var a, i;
                                return o.default.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return e.next = 2, t.$u.api.wxLogin({
                                            code: r.code
                                        });

                                      case 2:
                                        a = e.sent, n.hideLoading(), i = {
                                            avatarUrl: t.userInfo.avatarUrl,
                                            nickName: t.userInfo.nickName,
                                            openid: a.data.user_id
                                        };
                                        try {
                                            n.setStorageSync("userInfo", i), u.globalData.userInfo = i, u.globalData.hasLogin = !0, 
                                            t.$u.toast("授权登录成功"), n.navigateBack({
                                                delta: 1
                                            });
                                        } catch (n) {}

                                      case 6:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                            })), function(n) {
                                return e.apply(this, arguments);
                            })
                        });
                    }
                }
            };
            e.default = c;
        }).call(this, t(1).default);
    },
    118: function(n, e, t) {
        t.r(e);
        var r = t(119), o = t.n(r);
        for (var a in r) "default" !== a && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(a);
        e.default = o.a;
    },
    119: function(n, e, t) {}
}, [ [ 112, "common/runtime", "common/vendor" ] ] ]);