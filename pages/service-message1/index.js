(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/service-message1/index" ], {
    87: function(e, r, o) {
        (function(e) {
            o(5);
            t(o(4));
            var r = t(o(88));
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = o, e(r.default);
        }).call(this, o(1).createPage);
    },
    88: function(e, r, o) {
        o.r(r);
        var t = o(89), n = o(91);
        for (var a in n) "default" !== a && function(e) {
            o.d(r, e, function() {
                return n[e];
            });
        }(a);
        o(96);
        var i = o(11), u = Object(i.default)(n.default, t.render, t.staticRenderFns, !1, null, "6d497ade", null, !1, t.components, void 0);
        u.options.__file = "pages/service-message1/index.vue", r.default = u.exports;
    },
    89: function(e, r, o) {
        o.r(r);
        var t = o(90);
        o.d(r, "render", function() {
            return t.render;
        }), o.d(r, "staticRenderFns", function() {
            return t.staticRenderFns;
        }), o.d(r, "recyclableRender", function() {
            return t.recyclableRender;
        }), o.d(r, "components", function() {
            return t.components;
        });
    },
    90: function(e, r, o) {
        var t;
        o.r(r), o.d(r, "render", function() {
            return n;
        }), o.d(r, "staticRenderFns", function() {
            return i;
        }), o.d(r, "recyclableRender", function() {
            return a;
        }), o.d(r, "components", function() {
            return t;
        });
        try {
            t = {
                uPicker: function() {
                    return Promise.all([ o.e("common/vendor"), o.e("uview-ui/components/u-picker/u-picker") ]).then(o.bind(null, 220));
                },
                uSelect: function() {
                    return o.e("uview-ui/components/u-select/u-select").then(o.bind(null, 230));
                },
                uForm: function() {
                    return o.e("uview-ui/components/u-form/u-form").then(o.bind(null, 188));
                },
                uFormItem: function() {
                    return Promise.all([ o.e("common/vendor"), o.e("uview-ui/components/u-form-item/u-form-item") ]).then(o.bind(null, 195));
                },
                uInput: function() {
                    return Promise.all([ o.e("common/vendor"), o.e("uview-ui/components/u-input/u-input") ]).then(o.bind(null, 206));
                },
                uCheckboxGroup: function() {
                    return Promise.all([ o.e("common/vendor"), o.e("uview-ui/components/u-checkbox-group/u-checkbox-group") ]).then(o.bind(null, 237));
                },
                uCheckbox: function() {
                    return o.e("uview-ui/components/u-checkbox/u-checkbox").then(o.bind(null, 244));
                },
                uButton: function() {
                    return o.e("uview-ui/components/u-button/u-button").then(o.bind(null, 213));
                },
                FootCopyRight: function() {
                    return o.e("components/FootCopyRight/FootCopyRight").then(o.bind(null, 167));
                }
            };
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            if (-1 === e.message.indexOf("Cannot find module") || -1 === e.message.indexOf(".vue")) throw e;
            console.error(e.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), 
            console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件");
        }
        var n = function() {
            var e = this, r = e.$createElement;
            e._self._c;
            e._isMounted || (e.e0 = function(r) {
                e.form.sex = 1;
            }, e.e1 = function(r) {
                e.form.sex = 0;
            }, e.e2 = function(r) {
                e.educationShow = !0;
            }, e.e3 = function(r) {
                e.nationShow = !0;
            }, e.e4 = function(r) {
                e.birthdayShow = !0;
            }, e.e5 = function(r) {
                e.politicsShow = !0;
            });
        }, a = !1, i = [];
        n._withStripped = !0;
    },
    91: function(e, r, o) {
        o.r(r);
        var t = o(92), n = o.n(t);
        for (var a in t) "default" !== a && function(e) {
            o.d(r, e, function() {
                return t[e];
            });
        }(a);
        r.default = n.a;
    },
    92: function(e, r, o) {
        (function(e) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = void 0;
            var t, n = (t = o(48)) && t.__esModule ? t : {
                default: t
            }, a = o(39), i = o(93), u = o(94), c = o(95);
            function s(e, r, o, t, n, a, i) {
                try {
                    var u = e[a](i), c = u.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void o(e);
                }
                u.done ? r(c) : Promise.resolve(c).then(t, n);
            }
            function d(e) {
                return function() {
                    var r = this, o = arguments;
                    return new Promise(function(t, n) {
                        var a = e.apply(r, o);
                        function i(e) {
                            s(a, t, n, i, u, "next", e);
                        }
                        function u(e) {
                            s(a, t, n, i, u, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            function m(e, r, o) {
                return r in e ? Object.defineProperty(e, r, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = o, e;
            }
            var f = getApp().globalData, l = {
                name: "",
                sex: "",
                education: "",
                nation: "",
                politics: "",
                address: "",
                newaddress: "",
                idcard: "",
                mobile: "",
                work: "",
                post: "",
                job: "",
                photo: "",
                resume: "",
                spousename: "",
                spousework: "",
                spousecard: "",
                fathername: "",
                fatherwork: "",
                fathercard: "",
                mothername: "",
                birthday: "",
                motherwork: "",
                mothercard: "",
                supportname: "",
                supportwork: "",
                supportcard: "",
                sonname: "",
                sonwork: "",
                workyear: "",
                old: "",
                declare: "",
                declareother: "",
                cardPhoto: ""
            }, h = {
                data: function() {
                    var e, r = this;
                    return {
                        backPreviewPath: "",
                        educationShow: !1,
                        nationShow: !1,
                        politicsShow: !1,
                        birthdayShow: !1,
                        educationList: i.educate_data,
                        nationList: u.nation_data,
                        politicsList: c.politics_data,
                        params: {
                            year: !0,
                            month: !0,
                            day: !0,
                            hour: !1,
                            minute: !1,
                            second: !1
                        },
                        photoSrc: "",
                        cardSrc: "",
                        declareList: [ {
                            index: 1,
                            name: "1.无故意犯罪记录（另附无犯罪记录证明）；",
                            checked: !1,
                            disabled: !1
                        }, {
                            index: 2,
                            name: "2.未受过收容教养、强制戒毒、劳动教养；",
                            checked: !1,
                            disabled: !1
                        }, {
                            index: 3,
                            name: "3.近三年未因违反《治安管理处罚法》受过行政拘留；",
                            checked: !1,
                            disabled: !1
                        }, {
                            index: 4,
                            name: "4.未参加过国家禁止的组织及其活动；",
                            checked: !1,
                            disabled: !1
                        }, {
                            index: 5,
                            name: "5.配偶、父母(或直接抚养人)未因危害国家安全罪受过刑事处罚（另附配偶、父母或直接抚养人无犯罪记录证明）；",
                            checked: !1,
                            disabled: !1
                        }, {
                            index: 6,
                            name: "6.无可能危害民用航空安全的其它情形。",
                            checked: !1,
                            disabled: !1
                        } ],
                        form: Object.assign({}, l),
                        customStyle: {
                            width: "288rpx",
                            border: "0",
                            height: "70rpx",
                            fontSize: "30rpx",
                            color: "#ffffff",
                            marginBottom: "100rpx",
                            borderRadius: "0",
                            background: "#2b64a7"
                        },
                        labelStyle: {
                            paddingLeft: "40rpx",
                            fontSize: "30rpx",
                            color: "#1b1b1b"
                        },
                        rules: (e = {
                            name: [ {
                                required: !0,
                                message: "请填写您的姓名",
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
                            birthday: [ {
                                required: !0,
                                message: "请选择您的出生年月日"
                            } ],
                            education: [ {
                                required: !0,
                                message: "请选择您的文化程度"
                            } ],
                            nation: [ {
                                required: !0,
                                message: "请选择您的民族"
                            } ],
                            politics: [ {
                                required: !0,
                                message: "请选择您的政治面貌"
                            } ]
                        }, m(e, "address", [ {
                            required: !0,
                            message: "请填写您的户籍地址",
                            trigger: "blur"
                        } ]), m(e, "newaddress", [ {
                            required: !0,
                            message: "请填写您的现住址",
                            trigger: "blur"
                        } ]), m(e, "post", [ {
                            required: !0,
                            message: "请填写您的部门",
                            trigger: "blur"
                        } ]), m(e, "job", [ {
                            required: !0,
                            message: "请填写您的职务",
                            trigger: "blur"
                        } ]), m(e, "resume", [ {
                            required: !0,
                            message: "请填写您的个人简历",
                            trigger: "blur"
                        } ]), m(e, "old", [ {
                            required: !0,
                            message: "请填写您的年龄",
                            trigger: "blur"
                        } ]), m(e, "fathername", [ {
                            required: !0,
                            message: "父母项信息必填",
                            trigger: "blur"
                        } ]), m(e, "fatherwork", [ {
                            required: !0,
                            message: "父母项信息必填",
                            trigger: "blur"
                        } ]), m(e, "fathercard", [ {
                            required: !0,
                            message: "父母项信息必填",
                            trigger: "blur"
                        } ]), m(e, "mothername", [ {
                            required: !0,
                            message: "父母项信息必填",
                            trigger: "blur"
                        } ]), m(e, "motherwork", [ {
                            required: !0,
                            message: "父母项信息必填",
                            trigger: "blur"
                        } ]), m(e, "mothercard", [ {
                            required: !0,
                            message: "父母项信息必填",
                            trigger: "blur"
                        } ]), m(e, "declare", [ {
                            required: !0,
                            message: "请选择您的个人诚信申报"
                        }, {
                            validator: function(e, r, o) {
                                return 6 === r.split(",").length;
                            },
                            message: "个人诚信若无问题请全部勾选"
                        } ]), m(e, "declareother", [ {
                            required: !0,
                            message: "请填写个人诚信申报其他情况"
                        } ]), m(e, "photo", [ {
                            required: !0,
                            message: "请上传您的二寸照片"
                        } ]), m(e, "cardPhoto", [ {
                            required: !0,
                            message: "请上传手持身份证照片"
                        } ]), m(e, "mobile", [ {
                            required: !0,
                            message: "请输入您的手机号码",
                            trigger: "blur"
                        }, {
                            validator: function(e, o, t) {
                                return r.$u.test.mobile(o);
                            },
                            message: "手机号码不正确",
                            trigger: [ "blur" ]
                        } ]), m(e, "idcard", [ {
                            required: !0,
                            message: "请填写您的身份证号码",
                            trigger: "blur"
                        }, {
                            validator: function(e, o, t) {
                                return r.$u.test.idCard(o);
                            },
                            message: "身份证号码不正确",
                            trigger: [ "blur" ]
                        } ]), e)
                    };
                },
                onReady: function() {
                    this.$refs.uForm.setRules(this.rules);
                },
                onLoad: function() {
                    e.showModal({
                        title: "提示",
                        content: "仅限沈阳机场员工入职使用！",
                        success: function(r) {
                            r.confirm ? console.log("confirm") : r.cancel && e.navigateBack({
                                delta: 1
                            });
                        }
                    });
                },
                methods: {
                    birthdayConfirm: function(e) {
                        this.form.birthday = "".concat(e.year, "-").concat(e.month, "-").concat(e.day), 
                        console.log("this.form.birthday", this.form.birthday);
                    },
                    educationConfirm: function(e) {
                        this.form.education = e[0].label;
                    },
                    nationConfirm: function(e) {
                        this.form.nation = e[0].label;
                    },
                    politicsConfirm: function(e) {
                        this.form.politics = e[0].label;
                    },
                    declareChange: function(e) {
                        var r = [];
                        this.declareList.forEach(function(o) {
                            e.forEach(function(e) {
                                o.name === e && r.push(o.index);
                            });
                        }), this.form.declare = r.join(",");
                    },
                    imgSave: function(r, o) {
                        var t = this;
                        e.uploadFile({
                            url: "".concat(a.baseUrl, "/Index/imgsave"),
                            filePath: r,
                            name: "pic",
                            success: function(e) {
                                var r = JSON.parse(e.data).data;
                                0 === o ? (t.photoSrc = r.pic_path, console.log("//二寸照片", t.photoSrc)) : 1 === o && (t.cardSrc = r.pic_path, 
                                console.log("身份证照片", t.cardSrc));
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        });
                    },
                    uploadPhoto: function(r) {
                        var o = this;
                        e.chooseImage({
                            sourceType: [ "camera", "album" ],
                            sizeType: [ "compressed" ],
                            count: 1,
                            success: function(e) {
                                0 === r ? o.form.photo = e.tempFilePaths[0] : 1 === r && (o.form.cardPhoto = e.tempFilePaths[0]), 
                                o.imgSave(e.tempFilePaths[0], r);
                            }
                        });
                    },
                    getPreviewExcel: function() {
                        var r = this;
                        return d(n.default.mark(function o() {
                            var t, a;
                            return n.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    return t = {
                                        name: r.form.name,
                                        sex: r.form.sex,
                                        cultural: r.form.education,
                                        nation: r.form.nation,
                                        political: r.form.politics,
                                        birthday: r.form.birthday,
                                        hukou: r.form.address,
                                        address: r.form.newaddress,
                                        idcard: r.form.idcard,
                                        company: r.form.work,
                                        post: r.form.post,
                                        job: r.form.job,
                                        pic_path: r.photoSrc,
                                        resume: r.form.resume,
                                        spouse_name: r.form.spousename,
                                        spouse_company: r.form.spousework,
                                        spouse_idcard: r.form.spousecard,
                                        father_name: r.form.fathername,
                                        father_company: r.form.fatherwork,
                                        father_idcard: r.form.fathercard,
                                        mother_name: r.form.mothername,
                                        mother_company: r.form.motherwork,
                                        mother_idcard: r.form.mothercard,
                                        service_year: "",
                                        age: r.form.old,
                                        report: r.form.declare,
                                        remarks: r.form.declareother,
                                        idcard_path: r.cardSrc,
                                        user_id: f.userInfo.openid
                                    }, o.next = 3, r.$u.api.backPreview(t);

                                  case 3:
                                    a = o.sent, r.backPreviewPath = a.data, console.log("this.backPreviewPath", r.backPreviewPath), 
                                    r.backPreviewPath && e.downloadFile({
                                        url: r.backPreviewPath,
                                        success: function(r) {
                                            var o = r.tempFilePath;
                                            e.openDocument({
                                                filePath: o,
                                                success: function(e) {
                                                    console.log("打开文档成功");
                                                }
                                            });
                                        }
                                    });

                                  case 7:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    submit: function() {
                        var r = this;
                        this.$refs.uForm.validate(function() {
                            var o = d(n.default.mark(function o(t) {
                                var a, i;
                                return n.default.wrap(function(o) {
                                    for (;;) switch (o.prev = o.next) {
                                      case 0:
                                        if (!t) {
                                            o.next = 21;
                                            break;
                                        }
                                        if ("" !== r.photoSrc) {
                                            o.next = 6;
                                            break;
                                        }
                                        return r.$u.toast("请上传您的二寸照片"), o.abrupt("return");

                                      case 6:
                                        if ("" !== r.cardSrc) {
                                            o.next = 9;
                                            break;
                                        }
                                        return r.$u.toast("请上传手持身份证照片"), o.abrupt("return");

                                      case 9:
                                        return a = {
                                            name: r.form.name,
                                            sex: r.form.sex,
                                            cultural: r.form.education,
                                            nation: r.form.nation,
                                            political: r.form.politics,
                                            birthday: r.form.birthday,
                                            hukou: r.form.address,
                                            address: r.form.newaddress,
                                            idcard: r.form.idcard,
                                            company: r.form.work,
                                            post: r.form.post,
                                            job: r.form.job,
                                            pic_path: r.photoSrc,
                                            resume: r.form.resume,
                                            tel: r.form.mobile,
                                            spouse_name: r.form.spousename,
                                            spouse_company: r.form.spousework,
                                            spouse_idcard: r.form.spousecard,
                                            father_name: r.form.fathername,
                                            father_company: r.form.fatherwork,
                                            father_idcard: r.form.fathercard,
                                            mother_name: r.form.mothername,
                                            mother_company: r.form.motherwork,
                                            mother_idcard: r.form.mothercard,
                                            service_year: "",
                                            age: r.form.old,
                                            report: r.form.declare,
                                            remarks: r.form.declareother,
                                            idcard_path: r.cardSrc,
                                            user_id: f.userInfo.openid
                                        }, console.log("params", a), o.next = 13, r.$u.api.backgroundAdd(a);

                                      case 13:
                                        i = o.sent, r.$u.toast(i.message), r.cardSrc = r.photoSrc = null, r.form = Object.assign({}, l), 
                                        f.messageIndex = 1, setTimeout(function() {
                                            e.redirectTo({
                                                url: "../my-message/index"
                                            });
                                        }, 1800), o.next = 22;
                                        break;

                                      case 21:
                                        console.log("验证失败");

                                      case 22:
                                      case "end":
                                        return o.stop();
                                    }
                                }, o);
                            }));
                            return function(e) {
                                return o.apply(this, arguments);
                            };
                        }());
                    }
                }
            };
            r.default = h;
        }).call(this, o(1).default);
    },
    96: function(e, r, o) {
        o.r(r);
        var t = o(97), n = o.n(t);
        for (var a in t) "default" !== a && function(e) {
            o.d(r, e, function() {
                return t[e];
            });
        }(a);
        r.default = n.a;
    },
    97: function(e, r, o) {}
}, [ [ 87, "common/runtime", "common/vendor" ] ] ]);