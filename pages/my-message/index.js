(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my-message/index" ], {
    61: function(e, t, n) {
        (function(e) {
            n(5);
            r(n(4));
            var t = r(n(62));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n(1).createPage);
    },
    62: function(e, t, n) {
        n.r(t);
        var r = n(63), o = n(65);
        for (var s in o) "default" !== s && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(s);
        n(67), n(69);
        var i = n(11), a = Object(i.default)(o.default, r.render, r.staticRenderFns, !1, null, "a8ab633c", null, !1, r.components, void 0);
        a.options.__file = "pages/my-message/index.vue", t.default = a.exports;
    },
    63: function(e, t, n) {
        n.r(t);
        var r = n(64);
        n.d(t, "render", function() {
            return r.render;
        }), n.d(t, "staticRenderFns", function() {
            return r.staticRenderFns;
        }), n.d(t, "recyclableRender", function() {
            return r.recyclableRender;
        }), n.d(t, "components", function() {
            return r.components;
        });
    },
    64: function(e, t, n) {
        var r;
        n.r(t), n.d(t, "render", function() {
            return o;
        }), n.d(t, "staticRenderFns", function() {
            return i;
        }), n.d(t, "recyclableRender", function() {
            return s;
        }), n.d(t, "components", function() {
            return r;
        });
        try {
            r = {
                uEmpty: function() {
                    return n.e("uview-ui/components/u-empty/u-empty").then(n.bind(null, 174));
                },
                uLoadmore: function() {
                    return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null, 181));
                },
                FootCopyRight: function() {
                    return n.e("components/FootCopyRight/FootCopyRight").then(n.bind(null, 167));
                }
            };
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            if (-1 === e.message.indexOf("Cannot find module") || -1 === e.message.indexOf(".vue")) throw e;
            console.error(e.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), 
            console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件");
        }
        var o = function() {
            var e = this, t = e.$createElement, n = (e._self._c, 0 !== e.list[0].length ? e.__map(e.list[0], function(t, n) {
                return {
                    $orig: e.__get_orig(t),
                    f0: e._f("messageStatus")(t.status)
                };
            }) : null), r = 0 !== e.list[1].length ? e.__map(e.list[1], function(t, n) {
                return {
                    $orig: e.__get_orig(t),
                    f1: e._f("applyStatus")(t.status)
                };
            }) : null;
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: n,
                    l1: r
                }
            });
        }, s = !1, i = [];
        o._withStripped = !0;
    },
    65: function(e, t, n) {
        n.r(t);
        var r = n(66), o = n.n(r);
        for (var s in r) "default" !== s && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(s);
        t.default = o.a;
    },
    66: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, o = (r = n(48)) && r.__esModule ? r : {
                default: r
            };
            function s(e) {
                return function(e) {
                    if (Array.isArray(e)) return i(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t);
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function a(e, t, n, r, o, s, i) {
                try {
                    var a = e[s](i), u = a.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                a.done ? t(u) : Promise.resolve(u).then(r, o);
            }
            function u(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, o) {
                        var s = e.apply(t, n);
                        function i(e) {
                            a(s, r, o, i, u, "next", e);
                        }
                        function u(e) {
                            a(s, r, o, i, u, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var c = getApp().globalData, l = {
                0: "/Message/messagelist",
                1: "/Message/criminallist"
            }, f = {
                data: function() {
                    return {
                        status: [ "loadmore", "loadmore" ],
                        current: 0,
                        page: [ 1, 1 ],
                        pageCounts: [ 1, 1 ],
                        user_id: c.userInfo.openid,
                        pageSize: 10,
                        list: [ [], [] ]
                    };
                },
                filters: {
                    messageStatus: function(e) {
                        return {
                            0: "待回复",
                            1: "已处理",
                            2: "延后处理"
                        }[e];
                    },
                    applyStatus: function(e) {
                        return {
                            0: "待回复",
                            1: "已通过",
                            2: "已拒绝"
                        }[e];
                    }
                },
                onShow: function() {
                    this.current = c.messageIndex, this.setTitle(c.messageIndex), this.page = [ 1, 1 ], 
                    this.list = [ [], [] ], this.pageCounts = [ 1, 1 ], this.getMessageList(0), this.getMessageList(1);
                },
                methods: {
                    appraise: function(e, t, n, r) {
                        var s = this;
                        return u(o.default.mark(function i() {
                            var a;
                            return o.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    return o.next = 2, s.$u.api.score({
                                        id: e,
                                        type: t,
                                        score: n,
                                        user_id: s.user_id
                                    });

                                  case 2:
                                    a = o.sent, s.$u.toast(a.message), console.log("1", s.list[1][r]), 200 == a.code && (s.$set(s.list[1][r], "score", n), 
                                    console.log("2", s.list[1][r]));

                                  case 6:
                                  case "end":
                                    return o.stop();
                                }
                            }, i);
                        }))();
                    },
                    downLoadFile: function(t) {
                        e.showModal({
                            title: "提示",
                            content: "附件下载成功后请在新建页面中点击右上角进行操作~",
                            showCancel: !1,
                            success: function(n) {
                                e.showLoading({
                                    title: "下载中..."
                                }), e.downloadFile({
                                    url: t,
                                    success: function(t) {
                                        200 === t.statusCode && e.showToast({
                                            icon: "success",
                                            title: "下载成功",
                                            success: function() {
                                                e.saveFile({
                                                    tempFilePath: t.tempFilePath,
                                                    success: function(t) {
                                                        e.hideLoading(), e.openDocument({
                                                            filePath: t.savedFilePath,
                                                            showMenu: !0,
                                                            success: function(e) {
                                                                console.log("打开文档成功");
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    },
                    change: function(e) {
                        c.messageIndex = e, this.current = e, this.page[e] = 1, this.setTitle(e);
                    },
                    swiperFinish: function(e) {
                        this.current = e.detail.current;
                    },
                    scrolltolower: function() {
                        this.page[this.current] !== this.pageCounts[this.current] ? (this.page[this.current]++, 
                        this.status[this.current] = "loading", console.log("滚动底部", this.current), this.getMessageList(this.current)) : this.status[this.current] = "nomore";
                    },
                    getMessageList: function(e) {
                        var t = this;
                        return u(o.default.mark(function n() {
                            var r, i, a, u, f;
                            return o.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return i = {
                                        user_id: c.userInfo.openid,
                                        page: t.page[e],
                                        pageSize: t.pageSize
                                    }, console.log("请求this.page", t.page), console.log("params", i), n.next = 5, t.$u.get(l[e], i);

                                  case 5:
                                    a = n.sent, u = a.data.list || [], f = a.data.count, t.pageCounts[e] = Number(f) % t.pageSize == 0 ? Number(f) / t.pageSize : parseInt(Number(f) / t.pageSize + 1), 
                                    (r = t.list[e]).push.apply(r, s(u)), t.status[e] = "nomore";

                                  case 11:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    setTitle: function(t) {
                        e.setNavigationBarTitle({
                            title: {
                                0: "我的留言",
                                1: "我的申请"
                            }[t]
                        });
                    },
                    redirectMessage: function(t) {
                        var n = JSON.stringify(t);
                        e.navigateTo({
                            url: "../my-message-detail/index?message=".concat(n)
                        });
                    }
                }
            };
            t.default = f;
        }).call(this, n(1).default);
    },
    67: function(e, t, n) {
        n.r(t);
        var r = n(68), o = n.n(r);
        for (var s in r) "default" !== s && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(s);
        t.default = o.a;
    },
    68: function(e, t, n) {},
    69: function(e, t, n) {
        n.r(t);
        var r = n(70), o = n.n(r);
        for (var s in r) "default" !== s && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(s);
        t.default = o.a;
    },
    70: function(e, t, n) {}
}, [ [ 61, "common/runtime", "common/vendor" ] ] ]);