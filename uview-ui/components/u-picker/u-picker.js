var t = require("../../../@babel/runtime/helpers/typeof");

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-picker/u-picker" ], {
    220: function(t, e, r) {
        r.r(e);
        var i = r(221), n = r(223);
        for (var s in n) "default" !== s && function(t) {
            r.d(e, t, function() {
                return n[t];
            });
        }(s);
        r(228);
        var a = r(11), o = Object(a.default)(n.default, i.render, i.staticRenderFns, !1, null, "70102400", null, !1, i.components, void 0);
        o.options.__file = "uview-ui/components/u-picker/u-picker.vue", e.default = o.exports;
    },
    221: function(t, e, r) {
        r.r(e);
        var i = r(222);
        r.d(e, "render", function() {
            return i.render;
        }), r.d(e, "staticRenderFns", function() {
            return i.staticRenderFns;
        }), r.d(e, "recyclableRender", function() {
            return i.recyclableRender;
        }), r.d(e, "components", function() {
            return i.components;
        });
    },
    222: function(t, e, r) {
        var i;
        r.r(e), r.d(e, "render", function() {
            return n;
        }), r.d(e, "staticRenderFns", function() {
            return a;
        }), r.d(e, "recyclableRender", function() {
            return s;
        }), r.d(e, "components", function() {
            return i;
        });
        try {
            i = {
                uPopup: function() {
                    return r.e("uview-ui/components/u-popup/u-popup").then(r.bind(null, 296));
                }
            };
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            if (-1 === t.message.indexOf("Cannot find module") || -1 === t.message.indexOf(".vue")) throw t;
            console.error(t.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), 
            console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件");
        }
        var n = function() {
            var t = this, e = t.$createElement, r = (t._self._c, "region" != t.mode && "time" == t.mode && !t.reset && t.params.month ? t.__map(t.months, function(e, r) {
                return {
                    $orig: t.__get_orig(e),
                    m0: t.formatNumber(e)
                };
            }) : null), i = "region" != t.mode && "time" == t.mode && !t.reset && t.params.day ? t.__map(t.days, function(e, r) {
                return {
                    $orig: t.__get_orig(e),
                    m1: t.formatNumber(e)
                };
            }) : null, n = "region" != t.mode && "time" == t.mode && !t.reset && t.params.hour ? t.__map(t.hours, function(e, r) {
                return {
                    $orig: t.__get_orig(e),
                    m2: t.formatNumber(e)
                };
            }) : null, s = "region" != t.mode && "time" == t.mode && !t.reset && t.params.minute ? t.__map(t.minutes, function(e, r) {
                return {
                    $orig: t.__get_orig(e),
                    m3: t.formatNumber(e)
                };
            }) : null, a = "region" != t.mode && "time" == t.mode && !t.reset && t.params.second ? t.__map(t.seconds, function(e, r) {
                return {
                    $orig: t.__get_orig(e),
                    m4: t.formatNumber(e)
                };
            }) : null, o = "region" == t.mode || "time" == t.mode || "selector" != t.mode || t.reset ? null : t.__map(t.range, function(e, r) {
                return {
                    $orig: t.__get_orig(e),
                    m5: t.getItemValue(e, "selector")
                };
            }), u = "region" != t.mode && "time" != t.mode && "selector" != t.mode && "multiSelector" == t.mode ? t.__map(t.range, function(e, r) {
                return {
                    $orig: t.__get_orig(e),
                    l6: t.reset ? null : t.__map(e, function(e, r) {
                        return {
                            $orig: t.__get_orig(e),
                            m6: t.getItemValue(e, "multiSelector")
                        };
                    })
                };
            }) : null;
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: r,
                    l1: i,
                    l2: n,
                    l3: s,
                    l4: a,
                    l5: o,
                    l7: u
                }
            });
        }, s = !1, a = [];
        n._withStripped = !0;
    },
    223: function(t, e, r) {
        r.r(e);
        var i = r(224), n = r.n(i);
        for (var s in i) "default" !== s && function(t) {
            r.d(e, t, function() {
                return i[t];
            });
        }(s);
        e.default = n.a;
    },
    224: function(e, r, i) {
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = void 0;
        var n = o(i(225)), s = o(i(226)), a = o(i(227));
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function u(t) {
            return function(t) {
                if (Array.isArray(t)) return h(t);
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
            }(t) || function(t, e) {
                if (!t) return;
                if ("string" == typeof t) return h(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === r && t.constructor && (r = t.constructor.name);
                if ("Map" === r || "Set" === r) return Array.from(t);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return h(t, e);
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function h(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
            return i;
        }
        var c = {
            name: "u-picker",
            props: {
                params: {
                    type: Object,
                    default: function() {
                        return {
                            year: !0,
                            month: !0,
                            day: !0,
                            hour: !1,
                            minute: !1,
                            second: !1,
                            province: !0,
                            city: !0,
                            area: !0,
                            timestamp: !0
                        };
                    }
                },
                range: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                defaultSelector: {
                    type: Array,
                    default: function() {
                        return [ 0 ];
                    }
                },
                rangeKey: {
                    type: String,
                    default: ""
                },
                mode: {
                    type: String,
                    default: "time"
                },
                startYear: {
                    type: [ String, Number ],
                    default: 1950
                },
                endYear: {
                    type: [ String, Number ],
                    default: 2050
                },
                cancelColor: {
                    type: String,
                    default: "#606266"
                },
                confirmColor: {
                    type: String,
                    default: "#2979ff"
                },
                defaultTime: {
                    type: String,
                    default: ""
                },
                defaultRegion: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                showTimeTag: {
                    type: Boolean,
                    default: !0
                },
                areaCode: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                safeAreaInsetBottom: {
                    type: Boolean,
                    default: !1
                },
                maskCloseAble: {
                    type: Boolean,
                    default: !0
                },
                value: {
                    type: Boolean,
                    default: !1
                },
                zIndex: {
                    type: [ String, Number ],
                    default: 0
                },
                title: {
                    type: String,
                    default: ""
                },
                cancelText: {
                    type: String,
                    default: "取消"
                },
                confirmText: {
                    type: String,
                    default: "确认"
                }
            },
            data: function() {
                return {
                    years: [],
                    months: [],
                    days: [],
                    hours: [],
                    minutes: [],
                    seconds: [],
                    year: 0,
                    month: 0,
                    day: 0,
                    hour: 0,
                    minute: 0,
                    second: 0,
                    reset: !1,
                    startDate: "",
                    endDate: "",
                    valueArr: [],
                    provinces: n.default,
                    citys: s.default[0],
                    areas: a.default[0][0],
                    province: 0,
                    city: 0,
                    area: 0,
                    moving: !1
                };
            },
            mounted: function() {
                this.init();
            },
            computed: {
                propsChange: function() {
                    return "".concat(this.mode, "-").concat(this.defaultTime, "-").concat(this.startYear, "-").concat(this.endYear, "-").concat(this.defaultRegion, "-").concat(this.areaCode);
                },
                regionChange: function() {
                    return "".concat(this.province, "-").concat(this.city);
                },
                yearAndMonth: function() {
                    return "".concat(this.year, "-").concat(this.month);
                },
                uZIndex: function() {
                    return this.zIndex ? this.zIndex : this.$u.zIndex.popup;
                }
            },
            watch: {
                propsChange: function() {
                    var t = this;
                    this.reset = !0, setTimeout(function() {
                        return t.init();
                    }, 10);
                },
                regionChange: function(t) {
                    this.citys = s.default[this.province], this.areas = a.default[this.province][this.city];
                },
                yearAndMonth: function(t) {
                    this.params.year && this.setDays();
                },
                value: function(t) {
                    var e = this;
                    t && (this.reset = !0, setTimeout(function() {
                        return e.init();
                    }, 10));
                }
            },
            methods: {
                pickstart: function() {
                    this.moving = !0;
                },
                pickend: function() {
                    this.moving = !1;
                },
                getItemValue: function(e, r) {
                    if (this.mode == r) return "object" == t(e) ? e[this.rangeKey] : e;
                },
                formatNumber: function(t) {
                    return +t < 10 ? "0" + t : String(t);
                },
                generateArray: function(t, e) {
                    return t = Number(t), e = (e = Number(e)) > t ? e : t, u(Array(e + 1).keys()).slice(t);
                },
                getIndex: function(t, e) {
                    var r = t.indexOf(e);
                    return ~r ? r : 0;
                },
                initTimeValue: function() {
                    var t = this.defaultTime.replace(/\-/g, "/"), e = null;
                    e = (t = t && -1 == t.indexOf("/") ? "2020/01/01 ".concat(t) : t) ? new Date(t) : new Date(), 
                    this.year = e.getFullYear(), this.month = Number(e.getMonth()) + 1, this.day = e.getDate(), 
                    this.hour = e.getHours(), this.minute = e.getMinutes(), this.second = e.getSeconds();
                },
                init: function() {
                    this.valueArr = [], this.reset = !1, "time" == this.mode ? (this.initTimeValue(), 
                    this.params.year && (this.valueArr.push(0), this.setYears()), this.params.month && (this.valueArr.push(0), 
                    this.setMonths()), this.params.day && (this.valueArr.push(0), this.setDays()), this.params.hour && (this.valueArr.push(0), 
                    this.setHours()), this.params.minute && (this.valueArr.push(0), this.setMinutes()), 
                    this.params.second && (this.valueArr.push(0), this.setSeconds())) : "region" == this.mode ? (this.params.province && (this.valueArr.push(0), 
                    this.setProvinces()), this.params.city && (this.valueArr.push(0), this.setCitys()), 
                    this.params.area && (this.valueArr.push(0), this.setAreas())) : "selector" == this.mode ? this.valueArr = this.defaultSelector : "multiSelector" == this.mode && (this.valueArr = this.defaultSelector, 
                    this.multiSelectorValue = this.defaultSelector), this.$forceUpdate();
                },
                setYears: function() {
                    this.years = this.generateArray(this.startYear, this.endYear), this.valueArr.splice(this.valueArr.length - 1, 1, this.getIndex(this.years, this.year));
                },
                setMonths: function() {
                    this.months = this.generateArray(1, 12), this.valueArr.splice(this.valueArr.length - 1, 1, this.getIndex(this.months, this.month));
                },
                setDays: function() {
                    var t = new Date(this.year, this.month, 0).getDate();
                    this.days = this.generateArray(1, t);
                    var e = 0;
                    e = this.params.year && this.params.month ? 2 : this.params.month || this.params.year ? 1 : 0, 
                    this.day > this.days.length && (this.day = this.days.length), this.valueArr.splice(e, 1, this.getIndex(this.days, this.day));
                },
                setHours: function() {
                    this.hours = this.generateArray(0, 23), this.valueArr.splice(this.valueArr.length - 1, 1, this.getIndex(this.hours, this.hour));
                },
                setMinutes: function() {
                    this.minutes = this.generateArray(0, 59), this.valueArr.splice(this.valueArr.length - 1, 1, this.getIndex(this.minutes, this.minute));
                },
                setSeconds: function() {
                    this.seconds = this.generateArray(0, 59), this.valueArr.splice(this.valueArr.length - 1, 1, this.getIndex(this.seconds, this.second));
                },
                setProvinces: function() {
                    if (this.params.province) {
                        var t = "", e = !1;
                        this.areaCode.length ? (t = this.areaCode[0], e = !0) : t = this.defaultRegion.length ? this.defaultRegion[0] : 0, 
                        n.default.map(function(r, i) {
                            (e ? r.value == t : r.label == t) && (t = i);
                        }), this.province = t, this.provinces = n.default, this.valueArr.splice(0, 1, this.province);
                    }
                },
                setCitys: function() {
                    if (this.params.city) {
                        var t = "", e = !1;
                        this.areaCode.length ? (t = this.areaCode[1], e = !0) : t = this.defaultRegion.length ? this.defaultRegion[1] : 0, 
                        s.default[this.province].map(function(r, i) {
                            (e ? r.value == t : r.label == t) && (t = i);
                        }), this.city = t, this.citys = s.default[this.province], this.valueArr.splice(1, 1, this.city);
                    }
                },
                setAreas: function() {
                    if (this.params.area) {
                        var t = "", e = !1;
                        this.areaCode.length ? (t = this.areaCode[2], e = !0) : t = this.defaultRegion.length ? this.defaultRegion[2] : 0, 
                        a.default[this.province][this.city].map(function(r, i) {
                            (e ? r.value == t : r.label == t) && (t = i);
                        }), this.area = t, this.areas = a.default[this.province][this.city], this.valueArr.splice(2, 1, this.area);
                    }
                },
                close: function() {
                    this.$emit("input", !1);
                },
                change: function(t) {
                    this.valueArr = t.detail.value;
                    var e = 0;
                    if ("time" == this.mode) this.params.year && (this.year = this.years[this.valueArr[e++]]), 
                    this.params.month && (this.month = this.months[this.valueArr[e++]]), this.params.day && (this.day = this.days[this.valueArr[e++]]), 
                    this.params.hour && (this.hour = this.hours[this.valueArr[e++]]), this.params.minute && (this.minute = this.minutes[this.valueArr[e++]]), 
                    this.params.second && (this.second = this.seconds[this.valueArr[e++]]); else if ("region" == this.mode) this.params.province && (this.province = this.valueArr[e++]), 
                    this.params.city && (this.city = this.valueArr[e++]), this.params.area && (this.area = this.valueArr[e++]); else if ("multiSelector" == this.mode) {
                        var r = null;
                        this.defaultSelector.map(function(e, i) {
                            e != t.detail.value[i] && (r = i);
                        }), null != r && this.$emit("columnchange", {
                            column: r,
                            index: t.detail.value[r]
                        });
                    }
                },
                getResult: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if (!this.moving) {
                        var e = {};
                        "time" == this.mode ? (this.params.year && (e.year = this.formatNumber(this.year || 0)), 
                        this.params.month && (e.month = this.formatNumber(this.month || 0)), this.params.day && (e.day = this.formatNumber(this.day || 0)), 
                        this.params.hour && (e.hour = this.formatNumber(this.hour || 0)), this.params.minute && (e.minute = this.formatNumber(this.minute || 0)), 
                        this.params.second && (e.second = this.formatNumber(this.second || 0)), this.params.timestamp && (e.timestamp = this.getTimestamp())) : "region" == this.mode ? (this.params.province && (e.province = n.default[this.province]), 
                        this.params.city && (e.city = s.default[this.province][this.city]), this.params.area && (e.area = a.default[this.province][this.city][this.area])) : ("selector" == this.mode || "multiSelector" == this.mode) && (e = this.valueArr), 
                        t && this.$emit(t, e), this.close();
                    }
                },
                getTimestamp: function() {
                    var t = this.year + "/" + this.month + "/" + this.day + " " + this.hour + ":" + this.minute + ":" + this.second;
                    return new Date(t).getTime() / 1e3;
                }
            }
        };
        r.default = c;
    },
    228: function(t, e, r) {
        r.r(e);
        var i = r(229), n = r.n(i);
        for (var s in i) "default" !== s && function(t) {
            r.d(e, t, function() {
                return i[t];
            });
        }(s);
        e.default = n.a;
    },
    229: function(t, e, r) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-picker/u-picker-create-component", {
    "uview-ui/components/u-picker/u-picker-create-component": function(t, e, r) {
        r("1").createComponent(r(220));
    }
}, [ [ "uview-ui/components/u-picker/u-picker-create-component" ] ] ]);