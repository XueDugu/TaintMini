(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/message/index" ], {
    79: function(e, n, t) {
        (function(e) {
            t(5);
            r(t(4));
            var n = r(t(80));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, e(n.default);
        }).call(this, t(1).createPage);
    },
    80: function(e, n, t) {
        t.r(n);
        var r = t(81), o = t(83);
        for (var u in o) "default" !== u && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(u);
        t(85);
        var i = t(11), a = Object(i.default)(o.default, r.render, r.staticRenderFns, !1, null, "191297be", null, !1, r.components, void 0);
        a.options.__file = "pages/message/index.vue", n.default = a.exports;
    },
    81: function(e, n, t) {
        t.r(n);
        var r = t(82);
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
    82: function(e, n, t) {
        var r;
        t.r(n), t.d(n, "render", function() {
            return o;
        }), t.d(n, "staticRenderFns", function() {
            return i;
        }), t.d(n, "recyclableRender", function() {
            return u;
        }), t.d(n, "components", function() {
            return r;
        });
        try {
            r = {
                uForm: function() {
                    return t.e("uview-ui/components/u-form/u-form").then(t.bind(null, 188));
                },
                uFormItem: function() {
                    return Promise.all([ t.e("common/vendor"), t.e("uview-ui/components/u-form-item/u-form-item") ]).then(t.bind(null, 195));
                },
                uInput: function() {
                    return Promise.all([ t.e("common/vendor"), t.e("uview-ui/components/u-input/u-input") ]).then(t.bind(null, 206));
                },
                uButton: function() {
                    return t.e("uview-ui/components/u-button/u-button").then(t.bind(null, 213));
                },
                FootCopyRight: function() {
                    return t.e("components/FootCopyRight/FootCopyRight").then(t.bind(null, 167));
                }
            };
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            if (-1 === e.message.indexOf("Cannot find module") || -1 === e.message.indexOf(".vue")) throw e;
            console.error(e.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), 
            console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件");
        }
        var o = function() {
            var e = this.$createElement;
            this._self._c;
        }, u = !1, i = [];
        o._withStripped = !0;
    },
    83: function(e, n, t) {
        t.r(n);
        var r = t(84), o = t.n(r);
        for (var u in r) "default" !== u && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(u);
        n.default = o.a;
    },
    84: function(e, n, t) {
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r, o = (r = t(48)) && r.__esModule ? r : {
                default: r
            };
            function u(e) {
                return function(e) {
                    if (Array.isArray(e)) return i(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return i(e, n);
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function i(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r;
            }
            function a(e, n, t, r, o, u, i) {
                try {
                    var a = e[u](i), s = a.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void t(e);
                }
                a.done ? n(s) : Promise.resolve(s).then(r, o);
            }
            function s(e) {
                return function() {
                    var n = this, t = arguments;
                    return new Promise(function(r, o) {
                        var u = e.apply(n, t);
                        function i(e) {
                            a(u, r, o, i, s, "next", e);
                        }
                        function s(e) {
                            a(u, r, o, i, s, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var c = getApp().globalData, f = {
                data: function() {
                    var e = this;
                    return {
                        form: {
                            name: "",
                            mobile: "",
                            content: ""
                        },
                        customStyle: {
                            height: "70rpx",
                            fontSize: "30rpx",
                            color: "#ffffff",
                            borderRadius: "0",
                            background: "#2b64a7"
                        },
                        labelStyle: {
                            fontSize: "30rpx",
                            color: "#3f3f3f"
                        },
                        rules: {
                            name: [ {
                                required: !0,
                                message: "请输入您的姓名",
                                trigger: "blur"
                            } ],
                            content: [ {
                                required: !0,
                                message: "请输入您要咨询的内容",
                                trigger: "blur"
                            } ],
                            mobile: [ {
                                required: !0,
                                message: "请输入您的手机号码",
                                trigger: "blur"
                            }, {
                                validator: function(n, t, r) {
                                    return e.$u.test.mobile(t);
                                },
                                message: "手机号码不正确",
                                trigger: [ "blur" ]
                            } ]
                        },
                        page: 1,
                        pageCounts: 1,
                        pageSize: 10,
                        messageList: []
                    };
                },
                onReady: function() {
                    this.$refs.uForm.setRules(this.rules);
                },
                onLoad: function() {
                    this.getMessageOpenList();
                },
                onReachBottom: function() {
                    console.log("触底"), this.page !== this.pageCounts && (this.page++, this.getMessageOpenList());
                },
                methods: {
                    getMessageOpenList: function() {
                        var e = this;
                        return s(o.default.mark(function n() {
                            var t, r, i, a, s;
                            return o.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return r = {
                                        page: e.page,
                                        pageSize: e.pageSize,
                                        user_id: c.userInfo.openid
                                    }, n.next = 3, e.$u.api.messageOpenList(r);

                                  case 3:
                                    i = n.sent, a = i.data.count, s = i.data.list || [], (t = e.messageList).push.apply(t, u(s)), 
                                    e.pageCounts = Number(a) % e.pageSize == 0 ? Number(a) / e.pageSize : parseInt(Number(a) / e.pageSize + 1);

                                  case 8:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    submit: function() {
                        var n = this;
                        this.$refs.uForm.validate(function() {
                            var t = s(o.default.mark(function t(r) {
                                var u, i;
                                return o.default.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                      case 0:
                                        if (!r) {
                                            t.next = 11;
                                            break;
                                        }
                                        return u = {
                                            name: n.form.name,
                                            tel: n.form.mobile,
                                            content: n.form.content,
                                            user_id: c.userInfo.openid
                                        }, t.next = 4, n.$u.api.messageAdd(u);

                                      case 4:
                                        i = t.sent, n.$u.toast(i.message), n.form = {
                                            name: null,
                                            mobile: null,
                                            content: null
                                        }, c.messageIndex = 0, setTimeout(function() {
                                            e.redirectTo({
                                                url: "../my-message/index"
                                            });
                                        }, 1500), t.next = 12;
                                        break;

                                      case 11:
                                        console.log("验证失败");

                                      case 12:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                            }));
                            return function(e) {
                                return t.apply(this, arguments);
                            };
                        }());
                    }
                }
            };
            n.default = f;
        }).call(this, t(1).default);
    },
    85: function(e, n, t) {
        t.r(n);
        var r = t(86), o = t.n(r);
        for (var u in r) "default" !== u && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(u);
        n.default = o.a;
    },
    86: function(e, n, t) {}
}, [ [ 79, "common/runtime", "common/vendor" ] ] ]);