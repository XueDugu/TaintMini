require("../../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-parse/u-parse" ], {
    265: function(e, t, n) {
        n.r(t);
        var i = n(266), o = n(268);
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n(273);
        var s = n(11), a = Object(s.default)(o.default, i.render, i.staticRenderFns, !1, null, null, null, !1, i.components, void 0);
        a.options.__file = "uview-ui/components/u-parse/u-parse.vue", t.default = a.exports;
    },
    266: function(e, t, n) {
        n.r(t);
        var i = n(267);
        n.d(t, "render", function() {
            return i.render;
        }), n.d(t, "staticRenderFns", function() {
            return i.staticRenderFns;
        }), n.d(t, "recyclableRender", function() {
            return i.recyclableRender;
        }), n.d(t, "components", function() {
            return i.components;
        });
    },
    267: function(e, t, n) {
        n.r(t), n.d(t, "render", function() {
            return i;
        }), n.d(t, "staticRenderFns", function() {
            return r;
        }), n.d(t, "recyclableRender", function() {
            return o;
        }), n.d(t, "components", function() {});
        var i = function() {
            var e = this.$createElement;
            this._self._c;
        }, o = !1, r = [];
        i._withStripped = !0;
    },
    268: function(e, t, n) {
        n.r(t);
        var i = n(269), o = n.n(i);
        for (var r in i) "default" !== r && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(r);
        t.default = o.a;
    },
    269: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = {}, o = e.getFileSystemManager ? e.getFileSystemManager() : null, r = n(270);
            var s = {
                name: "parser",
                data: function() {
                    return {
                        showAm: "",
                        nodes: []
                    };
                },
                components: {
                    trees: function() {
                        n.e("uview-ui/components/u-parse/libs/trees").then(function() {
                            return resolve(n(310));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    html: String,
                    autopause: {
                        type: Boolean,
                        default: !0
                    },
                    autoscroll: Boolean,
                    autosetTitle: {
                        type: Boolean,
                        default: !0
                    },
                    compress: Number,
                    loadingImg: String,
                    useCache: Boolean,
                    domain: String,
                    lazyLoad: Boolean,
                    selectable: Boolean,
                    tagStyle: Object,
                    showWithAnimation: Boolean,
                    useAnchor: Boolean
                },
                watch: {
                    html: function(e) {
                        this.setContent(e);
                    }
                },
                created: function() {
                    this.imgList = [], this.imgList.each = function(e) {
                        for (var t = 0, n = this.length; t < n; t++) this.setItem(t, e(this[t], t, this));
                    }, this.imgList.setItem = function(e, t) {
                        var n = this;
                        if (null != e && t) {
                            if (0 == t.indexOf("http") && this.includes(t)) {
                                for (var i, r = t.split("://")[0], s = r.length; (i = t[s]) && ("/" != i || "/" == t[s - 1] || "/" == t[s + 1]); s++) r += Math.random() > .5 ? i.toUpperCase() : i;
                                return r += t.substr(s), this[e] = r;
                            }
                            if (this[e] = t, t.includes("data:image")) {
                                var a, c = t.match(/data:image\/(\S+?);(\S+?),(.+)/);
                                if (!c) return;
                                a = "".concat(wx.env.USER_DATA_PATH, "/").concat(Date.now(), ".").concat(c[1]), 
                                o && o.writeFile({
                                    filePath: a,
                                    data: c[3],
                                    encoding: c[2],
                                    success: function() {
                                        return n[e] = a;
                                    }
                                });
                            }
                        }
                    };
                },
                mounted: function() {
                    this.html && this.setContent(this.html);
                },
                beforeDestroy: function() {
                    this.imgList.each(function(t) {
                        t && t.includes(e.env.USER_DATA_PATH) && o && o.unlink({
                            filePath: t
                        });
                    }), clearInterval(this._timer);
                },
                methods: {
                    setContent: function(t, n) {
                        var o, s = this;
                        if (!t) return this.nodes = [];
                        var a, c = new r(t, this);
                        if (this.useCache) {
                            var l = function(e) {
                                for (var t = e.length, n = 5381; t--; ) n += (n << 5) + e.charCodeAt(t);
                                return n;
                            }(t);
                            i[l] ? o = i[l] : (o = c.parse(), i[l] = o);
                        } else o = c.parse();
                        this.$emit("parse", o), this.nodes = n ? this.nodes.concat(o) : o, o.length && o.title && this.autosetTitle && e.setNavigationBarTitle({
                            title: o.title
                        }), this.imgList && (this.imgList.length = 0), this.videoContexts = [], this.$nextTick(function() {
                            !function e(t) {
                                for (var n = t.length; n--; ) t[n].top && (t[n].controls = [], t[n].init(), e(t[n].$children));
                            }(s.$children), s.$emit("load");
                        }), clearInterval(this._timer), this._timer = setInterval(function() {
                            e.createSelectorQuery().in(s).select("#_top").boundingClientRect().exec(function(e) {
                                e && (s.rect = e[0], s.rect.height == a && (s.$emit("ready", s.rect), clearInterval(s._timer)), 
                                a = s.rect.height);
                            });
                        }, 350), this.showWithAnimation && !n && (this.showAm = "animation:_show .5s");
                    },
                    getText: function() {
                        for (var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.nodes, n = "", i = 0; e = t[i++]; ) if ("text" == e.type) n += e.text.replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"); else if ("br" == e.type) n += "\n"; else {
                            var o = "p" == e.name || "div" == e.name || "tr" == e.name || "li" == e.name || "h" == e.name[0] && e.name[1] > "0" && e.name[1] < "7";
                            o && n && "\n" != n[n.length - 1] && (n += "\n"), e.children && (n += this.getText(e.children)), 
                            o && "\n" != n[n.length - 1] ? n += "\n" : "td" != e.name && "th" != e.name || (n += "\t");
                        }
                        return n;
                    },
                    in: function(e) {
                        e.page && e.selector && e.scrollTop && (this._in = e);
                    },
                    navigateTo: function(t) {
                        var n = this;
                        if (!this.useAnchor) return t.fail && t.fail("Anchor is disabled");
                        var i = e.createSelectorQuery().in(this._in ? this._in.page : this).select((this._in ? this._in.selector : "#_top") + (t.id ? "".concat(">>>", "#").concat(t.id, ",").concat(this._in ? this._in.selector : "#_top").concat(">>>", ".").concat(t.id) : "")).boundingClientRect();
                        this._in ? i.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect() : i.selectViewport().scrollOffset(), 
                        i.exec(function(i) {
                            if (!i[0]) return t.fail && t.fail("Label not found");
                            var o = i[1].scrollTop + i[0].top - (i[2] ? i[2].top : 0) + (t.offset || 0);
                            n._in ? n._in.page[n._in.scrollTop] = o : e.pageScrollTo({
                                scrollTop: o,
                                duration: 300
                            }), t.success && t.success();
                        });
                    },
                    getVideoContext: function(e) {
                        if (!e) return this.videoContexts;
                        for (var t = this.videoContexts.length; t--; ) if (this.videoContexts[t].id == e) return this.videoContexts[t];
                    }
                }
            };
            t.default = s;
        }).call(this, n(1).default);
    },
    273: function(e, t, n) {
        n.r(t);
        var i = n(274), o = n.n(i);
        for (var r in i) "default" !== r && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(r);
        t.default = o.a;
    },
    274: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-parse/u-parse-create-component", {
    "uview-ui/components/u-parse/u-parse-create-component": function(e, t, n) {
        n("1").createComponent(n(265));
    }
}, [ [ "uview-ui/components/u-parse/u-parse-create-component" ] ] ]);