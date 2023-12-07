(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/service-message2/index" ], {
    104: function(e, n, r) {
        (function(e) {
            r(5);
            t(r(4));
            var n = t(r(105));
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = r, e(n.default);
        }).call(this, r(1).createPage);
    },
    105: function(e, n, r) {
        r.r(n);
        var t = r(106), o = r(108);
        for (var i in o) "default" !== i && function(e) {
            r.d(n, e, function() {
                return o[e];
            });
        }(i);
        r(110);
        var u = r(11), a = Object(u.default)(o.default, t.render, t.staticRenderFns, !1, null, "022e2d9f", null, !1, t.components, void 0);
        a.options.__file = "pages/service-message2/index.vue", n.default = a.exports;
    },
    106: function(e, n, r) {
        r.r(n);
        var t = r(107);
        r.d(n, "render", function() {
            return t.render;
        }), r.d(n, "staticRenderFns", function() {
            return t.staticRenderFns;
        }), r.d(n, "recyclableRender", function() {
            return t.recyclableRender;
        }), r.d(n, "components", function() {
            return t.components;
        });
    },
    107: function(e, n, r) {
        var t;
        r.r(n), r.d(n, "render", function() {
            return o;
        }), r.d(n, "staticRenderFns", function() {
            return u;
        }), r.d(n, "recyclableRender", function() {
            return i;
        }), r.d(n, "components", function() {
            return t;
        });
        try {
            t = {
                uForm: function() {
                    return r.e("uview-ui/components/u-form/u-form").then(r.bind(null, 188));
                },
                uFormItem: function() {
                    return Promise.all([ r.e("common/vendor"), r.e("uview-ui/components/u-form-item/u-form-item") ]).then(r.bind(null, 195));
                },
                uInput: function() {
                    return Promise.all([ r.e("common/vendor"), r.e("uview-ui/components/u-input/u-input") ]).then(r.bind(null, 206));
                },
                uButton: function() {
                    return r.e("uview-ui/components/u-button/u-button").then(r.bind(null, 213));
                },
                FootCopyRight: function() {
                    return r.e("components/FootCopyRight/FootCopyRight").then(r.bind(null, 167));
                }
            };
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            if (-1 === e.message.indexOf("Cannot find module") || -1 === e.message.indexOf(".vue")) throw e;
            console.error(e.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), 
            console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件");
        }
        var o = function() {
            var e = this, n = e.$createElement;
            e._self._c;
            e._isMounted || (e.e0 = function(n) {
                e.form.sex = 1;
            }, e.e1 = function(n) {
                e.form.sex = 0;
            });
        }, i = !1, u = [];
        o._withStripped = !0;
    },
    108: function(e, n, r) {
        r.r(n);
        var t = r(109), o = r.n(t);
        for (var i in t) "default" !== i && function(e) {
            r.d(n, e, function() {
                return t[e];
            });
        }(i);
        n.default = o.a;
    },
    109: function(e, n, r) {
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t, o = (t = r(48)) && t.__esModule ? t : {
                default: t
            }, i = r(39);
            function u(e, n, r, t, o, i, u) {
                try {
                    var a = e[i](u), c = a.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void r(e);
                }
                a.done ? n(c) : Promise.resolve(c).then(t, o);
            }
            function a(e) {
                return function() {
                    var n = this, r = arguments;
                    return new Promise(function(t, o) {
                        var i = e.apply(n, r);
                        function a(e) {
                            u(i, t, o, a, c, "next", e);
                        }
                        function c(e) {
                            u(i, t, o, a, c, "throw", e);
                        }
                        a(void 0);
                    });
                };
            }
            var c = getApp().globalData, s = {
                name: "",
                sex: "",
                mobile: "",
                work: "",
                address: "",
                idcard: "",
                pic: ""
            }, d = {
                data: function() {
                    var e = this;
                    return {
                        cardSrc: "",
                        precriminalPreviewPath: "",
                        form: Object.assign({}, s),
                        customStyle: {
                            width: "300rpx",
                            border: "0",
                            height: "70rpx",
                            fontSize: "30rpx",
                            color: "#ffffff",
                            borderRadius: "0",
                            marginBottom: "100rpx",
                            background: "#2b64a7"
                        },
                        labelStyle: {
                            fontSize: "30rpx",
                            color: "#1b1b1b"
                        },
                        rules: {
                            name: [ {
                                required: !0,
                                message: "请输入您的姓名",
                                trigger: "blur"
                            } ],
                            sex: [ {
                                required: !0,
                                message: "请选择您的性别"
                            } ],
                            address: [ {
                                required: !0,
                                message: "请填写详细地址",
                                trigger: "blur"
                            } ],
                            work: [ {
                                required: !0,
                                message: "请填写工作单位名称",
                                trigger: "blur"
                            } ],
                            mobile: [ {
                                required: !0,
                                message: "请输入您的手机号码",
                                trigger: "blur"
                            }, {
                                validator: function(n, r, t) {
                                    return e.$u.test.mobile(r);
                                },
                                message: "手机号码不正确",
                                trigger: [ "blur" ]
                            } ],
                            idcard: [ {
                                required: !0,
                                message: "请输入您的身份证号码",
                                trigger: "blur"
                            }, {
                                validator: function(n, r, t) {
                                    return e.$u.test.idCard(r);
                                },
                                message: "身份证号码不正确",
                                trigger: [ "blur" ]
                            } ]
                        }
                    };
                },
                onReady: function() {
                    this.$refs.uForm.setRules(this.rules);
                },
                onLoad: function() {
                    e.showModal({
                        title: "提示",
                        content: "仅限沈阳机场员工入职使用！",
                        success: function(n) {
                            n.confirm ? console.log("confirm") : n.cancel && e.navigateBack({
                                delta: 1
                            });
                        }
                    });
                },
                methods: {
                    uploadCardPhoto: function() {
                        var n = this;
                        e.chooseImage({
                            sourceType: [ "camera", "album" ],
                            sizeType: [ "compressed" ],
                            count: 1,
                            success: function(e) {
                                n.cardSrc = e.tempFilePaths[0], n.imgSave(e.tempFilePaths[0]);
                            },
                            fail: function(e) {
                                console.log("err", e);
                            }
                        });
                    },
                    imgSave: function(n) {
                        var r = this;
                        e.uploadFile({
                            url: "".concat(i.baseUrl, "/Index/imgsave"),
                            filePath: n,
                            name: "pic",
                            success: function(e) {
                                var n = JSON.parse(e.data).data;
                                r.form.pic = n.pic_path;
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        });
                    },
                    getPreviewExcel: function() {
                        var n = this;
                        return a(o.default.mark(function r() {
                            var t, i;
                            return o.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return t = {
                                        user_id: c.userInfo.openid,
                                        name: n.form.name,
                                        tel: n.form.mobile,
                                        idcard: n.form.idcard,
                                        address: n.form.address,
                                        company: n.form.work,
                                        pic: n.form.pic,
                                        sex: n.form.sex
                                    }, r.next = 3, n.$u.api.precriminalPreview(t);

                                  case 3:
                                    i = r.sent, n.precriminalPreviewPath = i.data, n.precriminalPreviewPath && e.downloadFile({
                                        url: n.precriminalPreviewPath,
                                        success: function(n) {
                                            var r = n.tempFilePath;
                                            e.openDocument({
                                                filePath: r,
                                                success: function(e) {
                                                    console.log("打开文档成功");
                                                }
                                            });
                                        }
                                    });

                                  case 6:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                        }))();
                    },
                    submit: function() {
                        var n = this;
                        this.$refs.uForm.validate(function() {
                            var r = a(o.default.mark(function r(t) {
                                var i, u;
                                return o.default.wrap(function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                      case 0:
                                        if (!t) {
                                            r.next = 16;
                                            break;
                                        }
                                        if ("" !== n.form.pic) {
                                            r.next = 4;
                                            break;
                                        }
                                        return n.$u.toast("请上传手持身份证照片"), r.abrupt("return");

                                      case 4:
                                        return i = {
                                            user_id: c.userInfo.openid,
                                            name: n.form.name,
                                            tel: n.form.mobile,
                                            idcard: n.form.idcard,
                                            address: n.form.address,
                                            company: n.form.work,
                                            pic: n.form.pic,
                                            sex: n.form.sex
                                        }, console.log("表单", i), r.next = 8, n.$u.api.criminalAdd(i);

                                      case 8:
                                        u = r.sent, n.$u.toast(u.message), n.cardSrc = null, n.form = Object.assign({}, s), 
                                        c.messageIndex = 1, setTimeout(function() {
                                            e.redirectTo({
                                                url: "../my-message/index"
                                            });
                                        }, 1800), r.next = 17;
                                        break;

                                      case 16:
                                        console.log("验证失败");

                                      case 17:
                                      case "end":
                                        return r.stop();
                                    }
                                }, r);
                            }));
                            return function(e) {
                                return r.apply(this, arguments);
                            };
                        }());
                    }
                }
            };
            n.default = d;
        }).call(this, r(1).default);
    },
    110: function(e, n, r) {
        r.r(n);
        var t = r(111), o = r.n(t);
        for (var i in t) "default" !== i && function(e) {
            r.d(n, e, function() {
                return t[e];
            });
        }(i);
        n.default = o.a;
    },
    111: function(e, n, r) {}
}, [ [ 104, "common/runtime", "common/vendor" ] ] ]);